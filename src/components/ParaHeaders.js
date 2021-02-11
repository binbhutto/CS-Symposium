import React from 'react';
import './../styles/ParaHeaders.css';
import thinStrip from '../graphics/stripe thin.png';

function ParaHeader({title}) {
    return (
        <React.Fragment>
            <div className='para-header-container'>
                <div className='para_heading'>
                    <h1>{title}</h1>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ParaHeader