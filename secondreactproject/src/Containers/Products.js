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
    const [cartItems, setCartItems] = useState([])

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

    const addToCart = (e, id, type=false) => {

        e.preventDefault()

        if (id) {

            let localCart = [...cartItems]

            let quantity = 1

            localCart.forEach((item, index)=>{
                if(item.id===id){
                    if(type==='decrement'){
                        quantity = item.quantity - 1
                    }else{
                        quantity = item.quantity + 1
                    }

                    localCart[index].quantity = quantity
                  
                    if(type==='remove' || quantity===0){
                        localCart.splice(index, 1)
                    }
                }
            })

            // it means product is not exist in the cartitems
            if(quantity===1 && !type){
                
                let filterProduct = products.filter(item => item.id === id)
                
                localCart.push({...filterProduct[0], quantity})

            }


            
            setCartItems(localCart)


        }

    }

    return (
        <>
            <Header isUserLoggedIn={isUserLoggedIn} logOut={logOut} />
            <Titlebar title="My Products" />

            <section>
                <div id="products">
                    <div class="container-fluid">

                        <div class="row">
                            <div className="col-md-9">

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
                            <div className="col-md-3">

                                <h3 className="mt-2 mb-3">Cart Items</h3>

                                <ul class="list-group">

                                    {cartItems && cartItems.map(item => {

                                       return <li class="list-group-item d-flex justify-content-between align-items-center">
                                           <img src={item.image} style={{height:30, width:30}}/>
                                            {item.name} - {item.quantity}
<button onClick={(e)=>{addToCart(e, item.id, 'remove')}} class="badge bg-primary rounded-pill">x</button>

                                        </li>

                                    })}


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