import React, {useState, useEffect} from "react";
import Axios from 'axios';
import './../App.css';

const Courses = () => {
    useEffect(()=>{
        Axios.get('http://localhost:3001/readCourse').then((response)=>{
          setCourseList(response.data);
        });
      }, []);
    
      const addToCourseList = ()=> {
        Axios.post("http://localhost:3001/insertCourse", {
          courseID: courseID,
          courseName: courseName,
        });
      };
    
      const updateCourse = (id)=> {
        Axios.put("http://localhost:3001/updateCourse", {
          id: id,
          newCourseName: newCourseName,
        });
      }
    
      const deleteCourse = (id)=> {
        Axios.delete(`http://localhost:3001/deleteCourse/${id}`, {
          id: id,
          newCourseName: newCourseName,
        });
      }
    
    
      const [courseID, setCourseID] = useState('');
      const [courseName, setCourseName] = useState(0);

      // For updated values
      const [newCourseName, setNewCourseName] = useState('');
      const [courseList, setCourseList] = useState([]);
    
      return (
        <div className="App"> 
          <h1>COURSES CRUD MERN</h1>
    
          <label>Course ID</label>
          <input 
            type="number" 
            onChange={(event) => {
              setCourseID(event.target.value);
            }}
          />
    
          <label>Courses Name</label>
          <input 
            type="text" 
            onChange={(event) => {
              setCourseName(event.target.value);
              }}
          />
          
          <button onClick={addToCourseList}>Add To List</button>
          <hr/>
          <h1>Courses Info</h1>
          {courseList.map((val, key) => {
            return <div><h3>{val.courseID}</h3> <h3>{val.courseName}</h3>
            <input 
              type="text" 
              placeholder="New Course Name" 
              onChange={(event) => {
                setNewCourseName(event.target.value);
              }}
            />
            <button onClick={()=>updateCourse(val._id)}>Update</button>
            <button onClick={()=>deleteCourse(val._id)}>Delete</button>
            </div>
            
          })}
        </div>
      );
}

export default Courses;