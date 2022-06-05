const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    courseID:{
        type: Number,
        required: true,
    },
    courseName:{
        type: String,
        required: true,
    },
});

const CourseDB = mongoose.model("courses", CourseSchema);
module.exports = CourseDB;