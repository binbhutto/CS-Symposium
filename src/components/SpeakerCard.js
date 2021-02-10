import React from 'react';
import linkedin from '../graphics/linkedin.png';
import '../styles/SpeakerCard.css';
import ParaHeader from  './ParaHeaders';
import TimerElement from './TimerElement';
import {requests} from '../components/requests';

function SpeakerCard(){
    const[nextEvent, setNextEvent] = React.useState([]);
    function descriptionShortener(value,n){
        return value?.length > n ? value.substr(0,n-1) + "..." : value;
    }
    React.useEffect(() => {
        function GetNextEvent(){
            const xhr =  new XMLHttpRequest();
            xhr.open('GET',`${requests.fetchNextEvents}`,true);
            xhr.responseType = 'json';
            xhr.addEventListener('load', () => {
                if(xhr.response.status === 200){
                    setNextEvent(xhr.response.result);    
                }
            });
            xhr.send();
        }
        GetNextEvent();
    }, [])
    
    return(
        <React.Fragment>
            {console.log(nextEvent)}
            {nextEvent.map((event) => 
                <div className="card" key={event.event_number}>
                    <div className="card-left">
                        <div className="avatar-bg">
                            <img className="avatar" src={event.avatar} />
                        </div>
                        <div className="speaker-details">
                            <p className="speaker-name">{event.speaker.toUpperCase()}</p>
                            <a className="speaker-linkedin-wrapper" href={event.linkedin}>
                                <img className="speaker-linkedin" src={linkedin} />
                            </a>
                        </div>
                        <div className="event-details">
                            <div className="event-details-inner">
                                <p className="event-details-p1">LAST DATE FOR<br/>REGISTRATION:</p>
                                <p className="event-details-p2" id='ld'>{new Date(event.event_rg_date).toDateString()}</p>
                            </div>
                            <div className="event-details-inner">
                                <p className="event-details-p1">EVENT DATE:</p>
                                <p className="event-details-p2">{new Date(event.event_date).toDateString()}</p>
                            </div>
                            <div className="event-details-inner">
                                <p className="event-details-p1">TIME:</p>
                                <p className="event-details-p2">{event.event_time}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-right">
                        <div className="about-speaker">
                            <ParaHeader title={'ABOUT'} />
                            <p className="about-content">
                                {descriptionShortener(event.about_speaker,300)}
                            </p>
                        </div>
                        <div className="about-speaker">
                            <ParaHeader title={'EXPERIENCE'} />
                            <p className="about-content">
                                {descriptionShortener(event.speaker_exp,300)}
                            </p>
                        </div>
                        <div className="timer">
                            <p className="timer-header">NEXT EVENT COMMING SOON</p>
                            <div className="timer-content">
                                <TimerElement number={'12'} str={'DAYS'}/>
                                <TimerElement number={'12'} str={'HOURS'}/>
                                <TimerElement number={'12'} str={'MIN'}/>
                                <TimerElement number={'23'} str={'SEC'}/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default SpeakerCard;