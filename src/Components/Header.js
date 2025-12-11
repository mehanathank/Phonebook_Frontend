import {NavLink} from "react-router-dom";
import '../App.css'

const Header = () => {
    return (
        <header className="header">
            <NavLink to={"/"}> <img src="/images/phone.png" alt="logo"></img></NavLink>
            <div className="links">
                <NavLink to={"/"}>Login</NavLink>
                <NavLink to={"/home"}>Home</NavLink>
                <NavLink to={"/edit"}>Edit</NavLink>
                <NavLink to={"/add"}>AddContact</NavLink>
                <NavLink to={"/list"}>List</NavLink>
                <NavLink to={"/trash"}>Trash</NavLink>
            </div>
        </header>
    );
};

export default Header;