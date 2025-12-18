import {NavLink} from "react-router-dom";
import '../App.css'

const Header = () => {
    return (
        <header className="header">
            <NavLink to={"/"}> <img src="./Images/phone.png" alt="logo"></img></NavLink>
            <div className="links">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/edit"}>Edit</NavLink>
                <NavLink to={"/add"}>AddContact</NavLink>
                <NavLink to={"/list"}>List</NavLink>
                <NavLink to={"/trash"}>Trash</NavLink>
            </div>
        </header>
    );
};

export default Header;