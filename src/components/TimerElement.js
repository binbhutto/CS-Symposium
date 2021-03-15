import React from 'react';
import '../styles/TimerElement.css';
function NextEvent({str}){
    return(
        <React.Fragment>
            <div className="timer-element">
                {/* <div className="number-part" id>
                    {number}
                </div> */}
                <div className="string-part">
                    {str}
                </div>
            </div>
        </React.Fragment>
    );
}

export default NextEvent;