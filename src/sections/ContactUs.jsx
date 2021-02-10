import React from 'react';
import '../styles/ContactUs.css';
import EventBanner from '../components/EventBanner';
function ContactUs(){
    return(
        <React.Fragment>
            <EventBanner title={'CONTACT US'} />
            <div className="contact-form-outer" id="contactus">
                <div className="contact-form-inner">
                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <div className="form-group">
                                <input className="form-control"
                                placeholder="FullName" type="text" required/>
                            </div>
                            <div className="form-group">
                                <input className="form-control"
                                placeholder="Email" type="email" required/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control message"
                                placeholder="Message" rows={8} required/>
                            </div>
                            <div className="form-group">
                                <button className="form-control sendbtn">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className="other-wrapper">
                        <div className="other-inner">
                            <textarea className="form-control message"
                            placeholder="Write Something..." rows={15} cols={8} required/>
                        </div>
                    </div>
                </div> 
            </div>
        </React.Fragment>
    );
}

export default ContactUs;