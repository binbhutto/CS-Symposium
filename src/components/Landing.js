import React from 'react';
import logo from './../graphics/cs sym logo.png';
import './../styles/Landing.css';
import leftGraphic from './../graphics/left top1.png';
import rightGraphic from './../graphics/right top.png';
import {requests} from './requests';

function Landing({regLink}) {
    function RedirectPage(){
        window.open(regLink);
    }

    return (
        <>
            <div className='landing_container'>
                <img className='landing_logo' src={logo}></img> 
                <a href={regLink} target="_blank" className="register_btn">
                    <button className='landing_button'>REGISTER YOURSELF</button>    
                </a>
            </div>
            <div className='langing_graphics'>
                <img className='leftGraphic' src={leftGraphic} />
                <img className='rightGraphic' src={rightGraphic} />
            </div>
        </>
        
    )
}

export default Landing;
