import Sidebar from "../Components/Sidebar"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Titlebar from "../Components/Titlebar";

import { useEffect, useState } from "react";

import slider1 from '../assets/images/slider1.jpg'
import slider2 from '../assets/images/slider2.jpg'
import slider3 from '../assets/images/slider3.jpg'

import p1 from '../assets/images/p1.jfif'
import p2 from '../assets/images/p2.jfif'
import p3 from '../assets/images/p3.jfif'
import p4 from '../assets/images/p4.jpg'

import '../assets/css/home.css'

function About() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    
    useEffect( async ()=>{

        let user = await sessionStorage.getItem('user')
 
        if(user){
            setIsUserLoggedIn(true)
        }else{
            setIsUserLoggedIn(false)
        }
     })

     const logOut = (e) => {
         e.preventDefault()
         sessionStorage.removeItem('user')
         setIsUserLoggedIn(false)
     }

    return (
        <>
             <Header isUserLoggedIn={isUserLoggedIn} logOut={logOut} />
            <Titlebar title="About Us"/>

            <div class="container">
                <div class="row">
                    <div class='col-6 mt-5'>
                        <h3>WEBZ ACADEMY</h3>
                        <p>Webz Academy is a web designing and development training institute. We are a broad-minded institute with liberated minded professionals growing for uniqueness in every project through modernization.</p>

                        <p>We work with you and understand your needs and goals, then provide solutions that will achieve your needs and goals. Our brand-oriented approach influences the build-up of multiple successful derivative students. Our intitute is superior to training students for the mobile application and responsive web development and novelty for every mobile application platform, including iPhone, Android as well as web platforms.</p>
                    </div>
                    <div class='col-6'>
                        <img src={p4} />
                    </div>
                </div>
            </div>

            <Footer />
        </>



    )


}

export default About