import React, {useState, useEffect} from "react";
import Axios from 'axios';
import './../App.css';

const Department = () => {
    useEffect(()=>{
        Axios.get('http://localhost:3001/readDepartment').then((response)=>{
          setDepartmentList(response.data);
        });
      }, []);
    
      const addToDeptList = ()=> {
        Axios.post("http://localhost:3001/insertDepartment", {
          departmentID: departmentID,
          departmentName: departmentName,
        });
      };
    
      const updateDept = (id)=> {
        Axios.put("http://localhost:3001/updateDepartment", {
          id: id,
          newDeptName: newDeptName,
        });
      }
    
      const deleteDept = (id)=> {
        Axios.delete(`http://localhost:3001/deleteDepartment/${id}`, {
          id: id,
          newDeptName: newDeptName,
        });
      }
    
    
      const [departmentID, setDepartmentID] = useState('');
      const [departmentName, setDepartmentName] = useState('');

      // For updated values
      const [newDeptName, setNewDeptName] = useState('');
      const [departmentList, setDepartmentList] = useState([]);
    
      return (
        <div className="App"> 
          <h1>CRUD App with MERN</h1>
    
          <label>Department ID</label>
          <input 
            type="number" 
            onChange={(event) => {
              setDepartmentID(event.target.value);
            }}
          />
    
          <label>Department Name</label>
          <input 
            type="text" 
            onChange={(event) => {
              setDepartmentName(event.target.value);
              }}
          />
          
          <button onClick={addToDeptList}>Add To List</button>
          <hr/>
          <h1>Department Info</h1>
          {departmentList.map((val, key) => {
            return <div><h3>{val.departmentID}</h3> <h3>{val.departmentName}</h3>
            <input 
              type="text" 
              placeholder="New Dept Name" 
              onChange={(event) => {
                setNewDeptName(event.target.value);
              }}
            />
            <button onClick={()=>updateDept(val._id)}>Update</button>
            <button onClick={()=>deleteDept(val._id)}>Delete</button>
            </div>
            
          })}
        </div>
      );
}

export default Department;