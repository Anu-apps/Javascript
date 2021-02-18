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

function Home(props) {

    //hooks

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
            <Titlebar title="Welcome to Webz Academy" />

            <section>
                <div id="homeSlider" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slider1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={slider2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={slider3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#homeSlider" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#homeSlider" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </a>
                    <ol class="carousel-indicators">
                        <li data-bs-target="#homeSlider" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#homeSlider" data-bs-slide-to="1"></li>
                        <li data-bs-target="#homeSlider" data-bs-slide-to="2"></li>
                    </ol>
                </div>

                <div id="products">
                    <div class="container-fluid">
                        <h1 align="center">Products</h1>

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

export default Home
