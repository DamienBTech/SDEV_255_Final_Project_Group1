const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating course schema
const cartSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
}, { timestamps: true });

// model
const ShoppingCart = mongoose.model('Cart', cartSchema);
module.exports = ShoppingCart;

