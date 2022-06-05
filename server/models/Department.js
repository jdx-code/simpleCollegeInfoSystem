const mongoose = require('mongoose')

const DeptSchema = new mongoose.Schema({
    departmentID:{
        type: Number,
        required: true,
    },
    departmentName:{
        type: String,
        required: true,
    },
});

const DeptDB = mongoose.model("departments", DeptSchema);
module.exports = DeptDB;