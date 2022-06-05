import Department from './components/Department';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Courses from "./components/Courses";
import Faculty from './components/Faculty';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route path="/department" element={<Department />}/>
              <Route path="/courses" element={<Courses />}/>
              <Route path="/faculty" element={<Faculty />}/>
          </Routes>                
      </BrowserRouter>

    </div>    
  );
  
}

export default App;
