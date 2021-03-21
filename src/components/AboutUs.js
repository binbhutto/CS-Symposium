import React from 'react';
import './../styles/AboutUs.css';

function AboutUs() {
    return (
        <div className='aboutUs_container'>
            <div className='aboutUs_inner' id="aboutus">
                <p className="aboutus-header">About Us</p>
                <p className="aboutus-content">We, the students of Engineering, have started a webinar series for students who are curious to know
                about the industrial life that awaits in their upcoming future. Led by one of the best professors from
                Department of CSE, TU - Dr. Arindam Karmakar Sir, we wish to present some of the finest speakers who
                will share their profuse experience in their respective fields.</p>
            </div>
            <div className='aboutUs_button_container'>
                <a href="#ourteam">
                    <button className='aboutUs_button'>OUR TEAM</button>
                </a>
            </div>
        </div>
    )
}

export default AboutUs
