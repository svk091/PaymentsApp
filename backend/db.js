const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/paytm');
const userSchema = new mongoose.Schema({
    username: {type: String, require: true, unique: true},
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    password: {type: String, require: true}
})


const User = mongoose.model('User', userSchema);

const accSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Accounts = new mongoose.model('Accounts', accSchema);

module.exports = {
    User,
    Accounts
}