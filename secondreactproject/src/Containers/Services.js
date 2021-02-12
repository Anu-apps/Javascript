import Sidebar from "../Components/Sidebar"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Titlebar from "../Components/Titlebar";


import slider1 from '../assets/images/slider1.jpg'
import slider2 from '../assets/images/slider2.jpg'
import slider3 from '../assets/images/slider3.jpg'

import p1 from '../assets/images/p1.jfif'
import p2 from '../assets/images/p2.jfif'
import p3 from '../assets/images/p3.jfif'
import p4 from '../assets/images/p4.jpg'

import '../assets/css/home.css'
import { useEffect, useState } from "react";

function Services(props) {

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
         props.history.push("/")
     }

    return (
        <>
            <Header isUserLoggedIn={isUserLoggedIn} logOut={logOut} />
            <Titlebar title="Our Services" />

            <section>
                <div id="products">
                    <div class="container-fluid">
                        <h1>Services</h1>

                        <div class="row">
                            <div class="card col-3">
                                <img src={p1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card col-3">
                                <img src={p2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card col-3">
                                <img src={p3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card col-3">
                                <img src={p4} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>



    )


}

export default Services