import React from 'react';
import leftLogo from './../graphics/cs sym logo.png';
import './../styles/Navbar.css';
import rightLogo from './../graphics/linkedin.png';
import topLeftGraphic from './../graphics/top left corner.png';

function Navbar() {
    return (
        <div className='navbar_container'>
            <div className='navbar_left'>
                <img className='topLeftGraphic' src={topLeftGraphic}></img>
                <img className='nav_leftLogo' src={leftLogo}></img>
            </div>
            <div className='navbar_right'>
                <p>HOME</p>
                <a href="#contactus" className="navbar-links"><p>CONTACT</p></a>
                <a href="#aboutus" className="navbar-links"><p>ABOUT</p></a>
                <img className='nav_rightLogo' src={rightLogo}></img>
            </div>
        </div>
    )
}

export default Navbar
