const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating course schema
const scheduleSchema = new Schema({
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
const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;

