import React from 'react';
import './../styles/AboutUs.css';

function AboutUs() {
    return (
        <div className='aboutUs_container'>
            <div className='aboutUs_inner' id="aboutus">
                <h1>About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
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
