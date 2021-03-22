import React from 'react';
import '../styles/TimerElement.css';
function TimerWrapper(){
    return(
        <React.Fragment>
            <div className="timer-element">
                <div className="number-part" id="days">
                    
                </div>
                <div className="string-part">
                    DAYS
                </div>
            </div>
            <div className="timer-element">
                <div className="number-part" id="hours">
                    
                </div>
                <div className="string-part">
                    HOURS
                </div>
            </div>
            <div className="timer-element">
                <div className="number-part" id="minutes">
                    
                </div>
                <div className="string-part">
                    MIN
                </div>
            </div>
            <div className="timer-element">
                <div className="number-part" id="seconds">
                    
                </div>
                <div className="string-part">
                    SEC
                </div>
            </div>
        </React.Fragment>
    );
}

export default TimerWrapper;