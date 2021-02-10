import React from 'react';
import '../styles/PastEvent.css';
import MidRightIllustration from '../graphics/mid right.png';
import EventBanner from '../components/EventBanner';
import VerticalCarousel from '../components/VerticalCarousel';

function PastEvent(){
    return(
        <React.Fragment>
            <EventBanner title={'PAST EVENT'} />
            <div className="p-wrapper">
                <div className="p-left">
                    <VerticalCarousel />
                </div>
                <div className="p-right">
                    <img className="mid-right-illustration" src={MidRightIllustration} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default PastEvent;