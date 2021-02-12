import Sidebar from "../Components/Sidebar"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Titlebar from "../Components/Titlebar";

import Card from '../Components/Card'

import '../assets/css/home.css'
import { useEffect, useState } from "react";

import loaderImage from '../assets/images/loader.svg'

import axios from 'axios'

function Products(props) {

    //hooks

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(async () => {

        let user = await sessionStorage.getItem('user')

        if (user) {
            setIsUserLoggedIn(true)
        } else {
            setIsUserLoggedIn(false)
        }
    })


    useEffect(async () => {

        if (!products.length && loader) {

            let response = await axios.get("https://5fffdd12cb21e10017af8153.mockapi.io/products")

            setProducts(response.data)

            setLoader(false)
        }

    }, [])

    const logOut = (e) => {
        e.preventDefault()
        sessionStorage.removeItem('user')
        setIsUserLoggedIn(false)
        props.history.push("/")
    }

    return (
        <>
            <Header isUserLoggedIn={isUserLoggedIn} logOut={logOut} />
            <Titlebar title="My Products" />

            <section>
                <div id="products">
                    <div class="container-fluid">


                        <div class="row">


                            {loader ?

                                <div className="text-center mt-5 mb-5">
                                    <img src={loaderImage} />
                                </div>

                                :

                                products && products.length > 0 && products.map(item => {

                                    return <Card name={item.name} description={item.description} price={item.price} image={item.image}/>


                                })



                            }
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>



    )


}

export default Products