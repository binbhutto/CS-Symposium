import React from 'react';
import '../styles/CarouselItem.css';
import CarouselItemNumber from '../graphics/past events single box.png';

function CarouselItem({event,index}){

    function SetBlogNumber(e){
        localStorage.setItem('blog_number',JSON.stringify(e));
        window.open('/blog');
    }

    return(
        <div className="carousel-item-wrapper">
            <div className="carousel-left">
                <img className="carousel-image" src={CarouselItemNumber} />
                <div className="item-number">{index}</div>
            </div>
            <div className="carousel-right">
                <div className="p-event-topic">
                    {event.event_topic}
                </div>
                <div className="p-event-speaker">
                    <span className="by">by</span> {event.speaker}
                </div>
                <div className="carousel-right-footer">
                    <div className='p-event-date'>{new Date(event.event_date).toDateString()}</div>
                    <div className="carousel-more-btn-outer">
                        <div className="carousel-more-btn-inner"
                        onClick={() => SetBlogNumber(event.event_number)}>
                            MORE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;