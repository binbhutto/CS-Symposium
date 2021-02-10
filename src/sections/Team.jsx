import React from 'react';
import EventBanner from '../components/EventBanner';
import {data} from '../components/MemberData';
import Member from '../components/Member';
import '../styles/Team.css';
function Team(){
    return(
        <div id="ourteam">
            <EventBanner title={'OUR TEAM'} />
            <div className="team-wrapper">
                {data.map(dt => <Member member={dt} />)}
            </div>
        </div>
    );
}

export default Team;