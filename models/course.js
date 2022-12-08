const { default: mongoose } = require('mongoose');
const Schema = mongoose.Schema;

// creating course schem
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
    students: {
        type: Object,
        required: true
    },
}, { timestamps: true });

// model
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;

// course:{ 
//      id: 1, 
//      name: "Math-122"
//      description: "Teaching numbers."
//      teacher: "Sue,"
//      students: {
//           "Mark",
//           "Clara",
//           "George"
//      }
// }
