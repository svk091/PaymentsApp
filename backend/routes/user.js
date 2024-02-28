const express = require('express');
const router = express.Router();
const z = require('zod')

const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');

const { authMiddleware } = require('./middleware');
const { User } = require('../db');
const { Accounts } = require('../db');


const signupBody = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string()
})

router.post('/signup', async(req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }
    const isExistingUser = await User.findOne({username: req.body.username});
    if(isExistingUser) {
        return res.status(411).json({
            message: 'Email already taken'
        })
    }
    const newUser = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });
    await Accounts.create({
        userId: newUser._id,
        balance: 1 + Math.random() * 10000
    })
    const token = jwt.sign({
        userId: newUser._id
    }, JWT_SECRET);

    return res.status(200).json({
        message: "User created successfully",
        token: 'Bearer'+' '+ token
    });
});


const signinBody = z.object({
    username: z.string().email(),
    password: z.string()
})
router.post('/signin', async(req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            message: 'Incorrect inputs'
        })
    }
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if(user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
        return res.status(200).json({
            token: 'Bearer' + ' ' + token
        })
    }
    res.status(411).json({
        message: "Error while logging in"
    })
})

const updateBody = z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional()
});
router.put('/update', authMiddleware, async(req, res) => {
    const { success } = updateBody.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            message: 'Error while updating information'
        })
    }
    await User.updateOne({
        _id: req.userId
    },req.body)

    return res.json({
        msg: 'Updated Sucessfully'
    })
})

router.get('/bulk', async(req, res) => {
    const filter = req.query.filter || '';
    const regex = new RegExp(filter, 'i');
    const users = await User.find({
        $or: [ {firstName: regex},{lastName: regex}]
    });
    res.json({
        user: users.map((user) => (
            {
                firstName: user.firstName,
                lastName: user.lastName,
                id: user._id
            }
        ))
    })
})

router.get('/getUser',authMiddleware, async(req, res) => {
    const userAccount = await Accounts.findOne({userId: req.userId});
    const user = await User.findOne({_id: req.userId});
    res.json({
        amount: userAccount.balance,
        firstName: user.firstName,
        lastName: user.lastName,
        id: user._id,
        password: user.password
    })
})


module.exports = router;