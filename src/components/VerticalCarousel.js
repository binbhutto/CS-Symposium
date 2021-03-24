import React from 'react';
import '../styles/VerticalCarousel.css';
import CarouselBtn from '../graphics/past evnts button.png';
import {requests} from './requests';
import CarouselItem from './CarouselItem';

function VerticalCarousel(){
    const[pastEvent, setPastEvent] = React.useState([]);
    React.useEffect(() => {
        function GetPastEvent(){
            const xhr =  new XMLHttpRequest();
            xhr.open('GET',`${requests.fetchPastEvents}`,true);
            xhr.responseType = 'json';
            xhr.addEventListener('load', () => {
                if(xhr.response.status === 200){
                    setPastEvent(xhr.response.result);    
                }
            });
            xhr.send();
        }
        GetPastEvent();
    }, [])
    return(
        <React.Fragment>
            <div className="carousel-wrapper">
                <div className="carousel-up-btn">
                    <img className="p-event-btn-top" src={CarouselBtn} />
                </div>
                <div className="carousel"> 
                    {pastEvent.map((item, idx) => <CarouselItem event={item} index={pastEvent.length - idx} key={idx*31}/>)}
                </div>
                <div className="carousel-down-btn">
                    <img className="p-event-btn-bottom" src={CarouselBtn} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default VerticalCarousel;