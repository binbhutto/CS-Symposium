import React from 'react';
import '../styles/Member.css';
function Member({member}){
    return(
        <div className="member-wrapper">
            <div className="member-image">
                <div className="member-image-outer">
                    <img className="member-image-inner" src={member.image} />
                </div>
            </div>
            <div className="member-name">
                {member.name}
            </div>
        </div>
    );
}

export default Member;