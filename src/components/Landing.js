import React from 'react';
import logo from './../graphics/cs sym logo.png';
import './../styles/Landing.css';
import leftGraphic from './../graphics/left top1.png';
import rightGraphic from './../graphics/right top.png';

function Landing() {
    return (
        <>
            <div className='landing_container'>
                <img className='landing_logo' src={logo}></img> 
                <button className='landing_button'>REGISTER YOURSELF</button>    
            </div>
            <div className='langing_graphics'>
                <img className='leftGraphic' src={leftGraphic} />
                <img className='rightGraphic' src={rightGraphic} />
            </div>
        </>
        
    )
}

export default Landing;
