import React from 'react';
import EventBanner from '../components/EventBanner';
import SpeakerCard from '../components/SpeakerCard';

function NextEvent(){
    return(
        <React.Fragment>
            <EventBanner title={'NEXT EVENT'} />
            <SpeakerCard />
        </React.Fragment>
    );
}

export default NextEvent;