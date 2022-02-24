import React from "react";
import "./Navbar.css";

const Navbar = () => {

    return (
        <div className = "navbar">
            <div className='header'><h3>Wii Recommend</h3></div>
            <ul className='menu'>
                <li><a href='/'>HOME</a></li>
                <li><a href='about'>ABOUT</a></li>
            </ul> 
        </div>
    );
};

export default Navbar;