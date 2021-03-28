import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import TextSection from '../sections/TextSection';
import NextEvent from '../sections/NextEvent';
import PastEvent from '../sections/PastEvent';
import Team from '../sections/Team';
import ContactUs from '../sections/ContactUs';
import Footer from '../sections/Footer';
import {requests} from '../components/requests';
import axios from 'axios';
function HomePage(){

    const[regLink, setRegLink] = React.useState([]);
    const[nextEvent, setNextEvent] = React.useState([]);

    React.useEffect(() => {
        // function GetNextEventsAndParse(){
        //     const xhr = new XMLHttpRequest();
        //     xhr.open('GET',`${requests.fetchNextEvents}`,true);
        //     xhr.responseType = 'json';
        //     xhr.addEventListener('load',() => {
        //         if(xhr.response.result.length !== 0){
        //             setRegLink(xhr.response.result[0].reg_link);
        //             setNextEvent(xhr.response.result);
        //         }
        //     });
        //     xhr.send();
        // }
        // GetNextEventsAndParse();
        axios.get(`${requests.fetchNextEvents}`)
        .then(response => {
            setRegLink(response.data.result[0].reg_link);
            setNextEvent(response.data.result);
        })
        .catch(error => console.log(error));
    },[])

    return(
        <>
            <Navbar />
            <Landing regLink = {regLink}/>
            <TextSection />
            <NextEvent nextEvent={nextEvent}/>
            <PastEvent/>
            <Team />
            <ContactUs />
            <Footer />
        </>
    );
}

export default HomePage;