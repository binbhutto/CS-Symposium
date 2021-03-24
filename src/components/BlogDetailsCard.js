import React from 'react';
import ParaHeader from './ParaHeaders';
import CommingSoon from './CommingSoon';
import '../styles/SpeakerCard.css';
import '../styles/BlogDetailsCard.css';
import linkedin from '../graphics/linkedin.png';

let marked = require("marked");

function BlogDetailsCard({event}) {

    function descriptionShortener(value,n){
        return value?.length > n ? value.substr(0,n-1) + "..." : value;
    }
    return (
        <>
        <div className="blog-speaker-content">
            <div className="event-header-wrapper">
                <div className="blog-event-number">
                    Event {event.event_number}
                </div>
                <div className="blog-event-topic">
                    {event.event_topic}
                </div>
            </div>
            <div className="card">
                <div className="card-p-1">
                    <div className="speaker-profile-wrapper">
                        <div className="avatar-bg">
                            <img className="avatar" src={event.avatar} />
                        </div>
                        <div className="speaker-details">
                            <p className="speaker-name">{event.speaker}</p>
                            <a className="speaker-linkedin-wrapper" href={event.linkedin}>
                                <img className="speaker-linkedin" src={linkedin} />
                            </a>
                        </div>
                    </div>
                    <div className="speaker-abexp-wrapper">
                        <div className="about-speaker">
                            <ParaHeader title={'ABOUT'} />
                            <p className="about-content">
                                {descriptionShortener(event.about_speaker,300)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {event.hasOwnProperty('blog_title') ? 
            <div className="blog-wrapper">
                <div className="blog-markdown-title"
                dangerouslySetInnerHTML={{__html : marked(event.blog_title)}}
                ></div>
                <div className="blog-markdown"
                dangerouslySetInnerHTML={{__html : marked(event.blog_content)}}
                ></div>
            </div>
            : 
            <>
            <div className="blog-header">Blog</div>
            <CommingSoon />
            </>}
        </div>
        </>
    );
}

export default BlogDetailsCard;
