const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true });

// model
const User = mongoose.model('User', userSchema);
module.exports = User;