import Sidebar from "../Components/Sidebar"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Titlebar from "../Components/Titlebar";

import Card from '../Components/Card'

import '../assets/css/home.css'
import { useEffect, useState } from "react";

import loaderImage from '../assets/images/loader.svg'

import axios from 'axios'

import { Link } from 'react-router-dom'

import { logOut } from '../helpers'

function ProductDetails(props) {

    //hooks

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [productDetails, setproductDetails] = useState(false)
    const [loader, setLoader] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [totals, setTotals] = useState({ totalCount: 0, totalPrice: 0 })

    useEffect(async () => {

        let user = await sessionStorage.getItem('user')

        if (user) {
            setIsUserLoggedIn(true)
        } else {
            setIsUserLoggedIn(false)
        }


        let sessionCartitems = await sessionStorage.getItem('cartItems')

        if (sessionCartitems) {
            setCartItems(JSON.parse(sessionCartitems))
        }

        let sessionTotalCartItems = await sessionStorage.getItem('totalCartItems')

        if (sessionTotalCartItems) {
            setTotals(JSON.parse(sessionTotalCartItems))
        }

    }, [])


    useEffect(async () => {

        let id = props?.match?.params?.id || false

        if (!productDetails && loader && id) {

            let response = await axios.get("https://5fffdd12cb21e10017af8153.mockapi.io/products/" + id)

            setproductDetails(response.data)

            setLoader(false)
        }

    }, [])


    // const addToCart = (e, id, type = false) => {

    //     e.preventDefault()

    //     if (id) {

    //         let localCart = [...cartItems]

    //         let quantity = 1

    //         localCart.forEach((item, index) => {
    //             if (item.id === id) {
    //                 if (type === 'decrement') {
    //                     quantity = item.quantity - 1
    //                 } else {
    //                     quantity = item.quantity + 1
    //                 }

    //                 localCart[index].quantity = quantity

    //                 if (type === 'remove' || quantity === 0) {
    //                     localCart.splice(index, 1)
    //                 }
    //             }
    //         })

    //         // it means product is not exist in the cartitems
    //         if (quantity === 1 && !type) {

    //             let filterProduct = products.filter(item => item.id === id)

    //             localCart.push({ ...filterProduct[0], quantity })

    //         }

    //         // to calculate totals
    //         let totalCount = 0
    //         let totalPrice = 0

    //         localCart.forEach(item => {
    //             totalCount = +totalCount + +item.quantity
    //             totalPrice = (+totalPrice + (+item.price * +item.quantity)).toFixed(2)
    //         })

    //         setCartItems(localCart)
    //         setTotals({
    //             totalCount,
    //             totalPrice
    //         })

    //         sessionStorage.setItem('cartItems', JSON.stringify(localCart))
    //         sessionStorage.setItem('totalCartItems', JSON.stringify({
    //             totalCount,
    //             totalPrice
    //         }))

    //     }

    // }

    return (
        <>
            <Header isUserLoggedIn={isUserLoggedIn} logOut={() => { logOut(setIsUserLoggedIn, props.history) }} totals={totals} />
            <Titlebar title="Product Detail" />
            <div className="container">


                {loader ?
                    <div class="row">
                        <div className="text-center mt-5 mb-5">
                            <img src={loaderImage} />
                        </div>
                    </div>

                    :
                    <>


                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                                <img src={productDetails.image} className="w-100" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">

                                <ul class="list-group">

                                    <li class="list-group-item">

                                        <h3>{productDetails.name}</h3>
                                    </li>
                                    <li class="list-group-item">
                                        <strong>${productDetails.price}</strong>
                                    </li>
                                    <li class="list-group-item">
                                        <strong>1</strong>
                                    </li>

                                    <li class="list-group-item">
                                        <button class="btn btn-outline-secondary" type="button">Add to Cart</button>

                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <h1>Description</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                    </>
                }

            </div>
            <Footer />
        </>



    )


}

export default ProductDetails
