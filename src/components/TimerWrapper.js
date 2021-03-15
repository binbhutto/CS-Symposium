import React from 'react';
import TimerElement from './TimerElement';
import '../styles/TimerElement.css';
function TimerWrapper({date,time}){
    const countDownDate = new Date(`${date},${time}:00`).getTime();
    React.useEffect(setInterval(() => {
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

        // If the count down is finished, write some text
        // if (distance < 0) {
        //     clearInterval(x);
        //     document.getElementById("demo").innerHTML = "EXPIRED";
    },1000),[])
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