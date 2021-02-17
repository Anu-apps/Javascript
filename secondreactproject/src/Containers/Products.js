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

function Products(props) {

    //hooks

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [products, setProducts] = useState([])
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

        if (!products.length && loader) {

            let response = await axios.get("https://5fffdd12cb21e10017af8153.mockapi.io/products")

            setProducts(response.data)

            setLoader(false)
        }

    }, [])


    const logOut = (e) => {
        e.preventDefault()
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('cartItems')
        setIsUserLoggedIn(false)
        props.history.push("/")
    }

    const addToCart = (e, id, type = false) => {

        e.preventDefault()

        if (id) {

            let localCart = [...cartItems]

            let quantity = 1

            localCart.forEach((item, index) => {
                if (item.id === id) {
                    if (type === 'decrement') {
                        quantity = item.quantity - 1
                    } else {
                        quantity = item.quantity + 1
                    }

                    localCart[index].quantity = quantity

                    if (type === 'remove' || quantity === 0) {
                        localCart.splice(index, 1)
                    }
                }
            })

            // it means product is not exist in the cartitems
            if (quantity === 1 && !type) {

                let filterProduct = products.filter(item => item.id === id)

                localCart.push({ ...filterProduct[0], quantity })

            }

            // to calculate totals
            let totalCount = 0
            let totalPrice = 0

            localCart.forEach(item => {
                totalCount = +totalCount + +item.quantity
                totalPrice = (+totalPrice + (+item.price * +item.quantity)).toFixed(2)
            })

            setCartItems(localCart)
            setTotals({
                totalCount,
                totalPrice
            })

            sessionStorage.setItem('cartItems', JSON.stringify(localCart))
            sessionStorage.setItem('totalCartItems', JSON.stringify({
                totalCount,
                totalPrice
            }))

        }

    }

    return (
        <>
            <Header isUserLoggedIn={isUserLoggedIn} logOut={logOut} totals={totals} />
            <Titlebar title="My Products" />

            <section>
                <div id="products">
                    <div class="container-fluid">

                        <div class="row">
                            <div className="col-md-8">

                                <div class="row">


                                    {loader ?

                                        <div className="text-center mt-5 mb-5">
                                            <img src={loaderImage} />
                                        </div>

                                        :

                                        products && products.length > 0 && products.map(item => {

                                            return <Card
                                                id={item.id}
                                                name={item.name}
                                                description={item.description}
                                                price={item.price}
                                                image={item.image}
                                                addToCart={addToCart}
                                                cartItems={cartItems} />


                                        })



                                    }
                                </div>


                            </div>
                            <div className="col-md-4">

                                <h3 className="mt-2 mb-3">Cart Items</h3>

                                <ul class="list-group">

                                    {cartItems && cartItems.map(item => {

                                        return <li class="list-group-item d-flex justify-content-between align-items-start" style={{ fontSize: 12, alignItems: "flex-start" }}>
                                            <img src={item.image} style={{ height: 30, width: 30 }} />
                                            {item.name} - {item.price} x {item.quantity} = {item.quantity * item.price}
                                            <button onClick={(e) => { addToCart(e, item.id, 'remove') }} class="badge bg-primary rounded-pill">x</button>

                                        </li>

                                    })}

                                    {cartItems.length > 0 ?

                                        <li class="list-group-item d-flex justify-content-between align-items-start">Sub Total: {totals.totalPrice}</li>
                                        :
                                        <li class="list-group-item d-flex justify-content-between align-items-start">Cart is Empty</li>
                                    }

                                    {cartItems.length > 0 &&
                                        <Link to="/cart" class="btn btn-primary">Proceed to Checkout</Link>
                                    }

                                </ul>



                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>



    )


}

export default Products
