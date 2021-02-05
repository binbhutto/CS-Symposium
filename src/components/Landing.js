import React from 'react';
import logo from './../graphics/cs sym logo.png';
import './../styles/Landing.css';

function Landing() {
    return (
        <div className='landing_container'>
            <img className='landing_logo' src={logo}></img>     
        </div>
    )
}

export default Landing;
