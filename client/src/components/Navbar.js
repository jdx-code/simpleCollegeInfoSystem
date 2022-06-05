import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <div>          
            <ul>
                <Link to="/department">Department</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/faculty">Faculty</Link>
            </ul>
        </div>
    );
}

export default Navbar;