import React from 'react';
import EventBanner from '../components/EventBanner';
import SpeakerCard from '../components/SpeakerCard';

function NextEvent({nextEvent}){
    return(
        <React.Fragment>
            <EventBanner title={'NEXT EVENT'} />
            <SpeakerCard nextEvent={nextEvent}/>
        </React.Fragment>
    );
}

export default NextEvent;