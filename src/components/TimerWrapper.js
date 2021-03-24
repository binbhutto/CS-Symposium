import React from 'react';
import '../styles/TimerElement.css';
function TimerWrapper({date,time}){
    React.useEffect(() => {
        let countDownDate = new Date(`${date} ${time}`).getTime();

        // Update the count down every 1 second
        let x = setInterval(function() {

            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("days").innerHTML = 0;
                document.getElementById("hours").innerHTML = 0;
                document.getElementById("minutes").innerHTML = 0;
                document.getElementById("seconds").innerHTML = 0;
            }
        }, 1000);
    },[])

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