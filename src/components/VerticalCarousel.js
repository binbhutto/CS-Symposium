import React from 'react';
import '../styles/VerticalCarousel.css';
import CarouselBtn from '../graphics/past evnts button.png';
import {requests} from './requests';
import axios from 'axios';
import CarouselItem from './CarouselItem';

function VerticalCarousel(){
    const[pastEvent, setPastEvent] = React.useState([]);
    React.useEffect(() => {
        axios.get(`${requests.fetchPastEvents}`)
        .then(response => {
            setPastEvent(response.data.result);
        })
        .catch(error => console.log(error));
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