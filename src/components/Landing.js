import React from 'react';
import logo from './../graphics/cs sym logo.png';
import './../styles/Landing.css';
import leftGraphic from './../graphics/left top1.png';
import rightGraphic from './../graphics/right top.png';

function Landing() {
    const[regLink, setRegLink] = React.useState("");

    React.useEffect(() => {
        function GetRegLink(){
            const xhr = new XMLHttpRequest();
            xhr.open('GET',"http://www.tucssym.com/api/nextevent",true);
            xhr.responseType = 'json';
            xhr.addEventListener('load',() => {
                if(xhr.response.result.length !== 0){
                    setRegLink(xhr.response.result[0].reg_link);
                }
            });
            xhr.send();
        }
    })

    return (
        <>
            <div className='landing_container'>
                <img className='landing_logo' src={logo}></img> 
                <a href={regLink} target="_blank" className="register_btn">
                    <button className='landing_button'>REGISTER YOURSELF</button>    
                </a>    
            </div>
            <div className='langing_graphics'>
                <img className='leftGraphic' src={leftGraphic} />
                <img className='rightGraphic' src={rightGraphic} />
            </div>
        </>
        
    )
}

export default Landing;
