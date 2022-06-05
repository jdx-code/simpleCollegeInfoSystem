const mongoose = require('mongoose')

const FacultySchema = new mongoose.Schema({
    facultyID:{
        type: Number,
        required: true,
    },
    facultyName:{
        type: String,
        required: true,
    },
    facultySpl:{
        type: String,
        required: true,
    },
});

const FacultyDB = mongoose.model("faculties", FacultySchema);
module.exports = FacultyDB;