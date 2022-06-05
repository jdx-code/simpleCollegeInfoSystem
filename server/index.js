const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const DeptModel = require("./models/Department");
const CourseModel = require("./models/Course");
const FacultyModel = require("./models/Faculty");
require('dotenv').config();

app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.tsi29.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
    }
);

//department

app.post("/insertDepartment", async (req, res) => {
    const departmentID = req.body.departmentID;
    const departmentName = req.body.departmentName;

    const dept = new DeptModel({ departmentID: departmentID, departmentName: departmentName });

    try{
        await dept.save();
        res.send("Inserted data");
    } catch(err){
        console.log(err);
    }
});

app.get("/readDepartment", async (req, res) => {
    DeptModel.find({}, (err, result) => {
        if(err){
            res.send(err)
        }
        res.send(result);
    } )
});

app.put("/updateDepartment", async (req, res) => {
    const id = req.body.id;
    const newDeptName = req.body.newDeptName;

    try{
        await DeptModel.findById(id, (err, updatedDept)=>{
            updatedDept.departmentName = newDeptName;
            updatedDept.save();
            res.send("update");
        })
    } catch(err){
        console.log(err);
    }
});

app.delete("/deleteDepartment/:id", async (req, res)=> {
    const id = req.params.id;

    await DeptModel.findByIdAndRemove(id).exec();
    res.send("deleted");
})


// courses

app.post("/insertCourse", async (req, res) => {
    const courseID = req.body.courseID;
    const courseName = req.body.courseName;

    const course = new CourseModel({ courseID: courseID, courseName: courseName });

    try{
        await course.save();
        res.send("Inserted data");
    } catch(err){
        console.log(err);
    }
});

app.get("/readCourse", async (req, res) => {
    CourseModel.find({}, (err, result) => {
        if(err){
            res.send(err)
        }
        res.send(result);
    } )
});

app.put("/updateCourse", async (req, res) => {
    const id = req.body.id;
    const newCourseName = req.body.newCourseName;

    try{
        await CourseModel.findById(id, (err, updatedCourse)=>{
            updatedCourse.courseName = newCourseName;
            updatedCourse.save();
            res.send("update");
        })
    } catch(err){
        console.log(err);
    }
});

app.delete("/deleteCourse/:id", async (req, res)=> {
    const id = req.params.id;

    await CourseModel.findByIdAndRemove(id).exec();
    res.send("deleted");
})

// faculty

app.post("/insertFaculty", async (req, res) => {
    const facultyID = req.body.facultyID;
    const facultyName = req.body.facultyName;
    const facultySpl = req.body.facultySpl;

    const faculties = new FacultyModel({ facultyID: facultyID, facultyName: facultyName, facultySpl: facultySpl });

    try{
        await faculties.save();
        res.send("Inserted data");
    } catch(err){
        console.log(err);
    }
});

app.get("/readFaculty", async (req, res) => {
    FacultyModel.find({}, (err, result) => {
        if(err){
            res.send(err)
        }
        res.send(result);
    } )
});

app.put("/updateFaculty", async (req, res) => {
    const id = req.body.id;
    const newCourseName = req.body.newCourseName;

    try{
        await FacultyModel.findById(id, (err, updatedCourse)=>{
            updatedCourse.courseName = newCourseName;
            updatedCourse.save();
            res.send("update");
        })
    } catch(err){
        console.log(err);
    }
});

app.delete("/deleteFaculty/:id", async (req, res)=> {
    const id = req.params.id;

    await FacultyModel.findByIdAndRemove(id).exec();
    res.send("deleted");
})
app.listen(3001, ()=>{
    console.log("Server running on port 3001...")
})