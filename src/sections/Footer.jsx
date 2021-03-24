import React from 'react';
import '../styles/Footer.css';
import Linkedin from '../graphics/linkedin.png';
import Twitter from '../graphics/twitter.png';
import Instagram from '../graphics/insta.png';

function Footer(){
    return(
        <div className="footer-wrapper">
            <div className="social-wrapper">
                <div className="social-side-header">
                    OUR SOCIAL MEDIA
                </div>
                <div className="social-links-wrapper">
                    <a href="https://www.instagram.com/cs_symposium_/">
                        <img className="social-links" src={Instagram} />
                    </a>
                    <a href="https://twitter.com/CsSymposium">
                        <img className="social-links" src={Twitter} />
                    </a>
                    <a href="https://www.linkedin.com/company/cs-symposium">
                        <img className="social-links" src={Linkedin} />
                    </a>
                </div>
            </div>
            <div className="copyright-wrapper">
                <div className="copywrite-inner">
                    Copyright &#169; 2020 CS Symposium
                </div>
            </div>
        </div>
    );
}

export default Footer;