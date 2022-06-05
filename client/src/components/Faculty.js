import React, {useState, useEffect} from "react";
import Axios from 'axios';
import './../App.css';

const Faculty = () => {
    useEffect(()=>{
        Axios.get('http://localhost:3001/readFaculty').then((response)=>{
          setFacultyList(response.data);
        });
      }, []);
    
      const addToFacultyList = ()=> {
        Axios.post("http://localhost:3001/insertFaculty", {
          facultyID: facultyID,
          facultyName: facultyName,
          facultySpl: facultySpl,
        });
      };
    
      const updateFaculty = (id)=> {
        Axios.put("http://localhost:3001/updateFaculty", {
          id: id,
          newFacultyName: newFacultyName,
        });
      }
    
      const deleteFaculty = (id)=> {
        Axios.delete(`http://localhost:3001/deleteFaculty/${id}`, {
          id: id,
          newFacultyName: newFacultyName,
        });
      }
    
    
      const [facultyID, setFacultyID] = useState(0);
      const [facultyName, setFacultyName] = useState('');
      const [facultySpl, setFacultySpl] = useState('');

      // For updated values
      const [newFacultyName, setNewFacultyName] = useState('');
      const [facultyList, setFacultyList] = useState([]);
    
      return (
        <div className="App"> 
          <h1>CRUD Faculty</h1>
    
          <label>Faculty ID</label>
          <input 
            type="number" 
            onChange={(event) => {
              setFacultyID(event.target.value);
            }}
          />
    
          <label>Faculty Name</label>
          <input 
            type="text" 
            onChange={(event) => {
              setFacultyName(event.target.value);
              }}
          />

          <label>Specialization</label>
          <input 
            type="text" 
            onChange={(event) => {
              setFacultySpl(event.target.value);
              }}
          />
          
          <button onClick={addToFacultyList}>Add To List</button>
          <hr/>
          <h1>Faculty Info</h1>
          {facultyList.map((val, key) => {
            return <div><h3>{val.facultyID}</h3> <h3>{val.facultyName}</h3><h3>{val.facultySpl}</h3>
            <input 
              type="text" 
              placeholder="New Dept Name" 
              onChange={(event) => {
                setNewFacultyName(event.target.value);
              }}
            />
            <button onClick={()=>updateFaculty(val._id)}>Update</button>
            <button onClick={()=>deleteFaculty(val._id)}>Delete</button>
            </div>
            
          })}
        </div>
      );
}

export default Faculty;