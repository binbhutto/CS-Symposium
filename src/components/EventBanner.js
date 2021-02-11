import React from 'react';
import './../styles/EventBanner.css';
import SpeakerCard from '../components/SpeakerCard';
import thickStrip from './../graphics/thick stripes full length.png';

function EventBanner({title}) {
    return (
        <React.Fragment>
            <div className='banner_container'>
                <div className='banner_heading'>
                    <h1>{title}</h1>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EventBanner
