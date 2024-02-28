const express = require('express');
const router = express.Router();

const { authMiddleware } = require('./middleware');
const { Accounts } = require('../db');
const mongoose = require('mongoose');

router.get('/balance', authMiddleware, async(req, res) => {
    const account = await Accounts.findOne({
        userId: req.userId
    });
    res.json({
        balance: account.balance
    })
})

router.post('/transfer', authMiddleware, async(req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try{
    const { to, amount } = req.body;
    const account = await Accounts.findOne({ userId: req.userId }).session(session);
    console.log('snder acc found')
    const parsedAmount = parseFloat(amount);
    if(!account || account.balance < parsedAmount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: 'Insufficient Balance'
        })
    }

    const toAccount = await Accounts.findOne({ userId: to }).session(session);

    if(!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: 'Invalid Account'
        })
    }

    await Accounts.updateOne({ userId: req.userId },{ $inc: { balance : -parsedAmount }}).session(session);
    await Accounts.updateOne({ userId: to },{ $inc: { balance: parsedAmount }}).session(session);

    await session.commitTransaction();
    return res.json({
        message: 'Transaction Successfull'
    })
    }catch(err) {
        await session.abortTransaction();
        console.log(err);
        return res.status(400).json({
            message: 'Transaction aborted'
        })
    }finally{
        session.endSession();
    }
    
})

module.exports = router