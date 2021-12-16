const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        // unique:true,
        lowercase: true,
    },
    lastName: {
        type: String,
        required: true,
        uppercase: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        lowercase: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model('User', userSchema);