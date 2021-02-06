import React from 'react';
import './../styles/EventBanner.css';
import thickStrip from './../graphics/thick stripes full length.png';

function EventBanner({title}) {
    return (
        <div className='banner_container'>
           <img className='thickStrip' src={thickStrip} /> 
           <div className='banner_heading'>
               <h1>{title}</h1>
           </div>
        </div>
    )
}

export default EventBanner
