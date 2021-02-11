import React from 'react';
import '../styles/TextSection.css';
import AboutUs from '../components/AboutUs';
import Objectives from '../components/Objectives';

function TextSection(){
    return(
        <div className="text-section-wrapper">
            <AboutUs />
            <Objectives />
        </div>
    );
}

export default TextSection;