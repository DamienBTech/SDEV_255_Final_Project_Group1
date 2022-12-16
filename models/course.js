const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating course schema
const courseSchema = new Schema({
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
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
