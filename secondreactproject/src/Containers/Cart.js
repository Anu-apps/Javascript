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

function Cart(props) {

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
			<Titlebar title="Cart" />

			<section>
				<div id="products">
					<div class="container-fluid">

						<div class="row">
							<div className="col-md-12">

								<h3 className="mt-2 mb-3">Cart Items</h3>

								<ul class="list-group">

									<li class="list-group-item row d-flex justify-content-between align-items-start" style={{ fontSize: 12, alignItems: "flex-start" }}>

										<div class="col-md-2">
											<strong>Image</strong>
										</div>
										<div class="col-md-3">
											<strong>Name</strong>
										</div>
										<div class="col-md-2">
											<strong>Price</strong>
										</div>
										<div class="col-md-2">
											<strong>Quantity</strong>
										</div>
										<div class="col-md-2 text-center">
											<strong>Total</strong>
										</div>
										<div class="col-md-1 text-center">
											<strong>Remove</strong>
										</div>

									</li>

									{cartItems && cartItems.map(item => {

										return <li class="list-group-item row d-flex justify-content-between align-items-start" style={{ fontSize: 12, alignItems: "flex-start" }}>

											<div class="col-md-2">
												<img src={item.image} style={{ height: 100, width: 100 }} />
											</div>
											<div class="col-md-3">
												{item.name}
											</div>
											<div class="col-md-2">
												{item.price}
											</div>
											<div class="col-md-2">
												<div class="input-group mb-3">
													<button class="btn btn-outline-secondary" type="button" onClick={(e) => { addToCart(e, item.id, 'decrement') }}>-</button>

													<input disabled={true} type="text" class="form-control" value={item.quantity}></input>
													<button class="btn btn-outline-secondary" type="button" onClick={(e) => { addToCart(e, item.id) }}>+</button>
												</div>
											</div>
											<div class="col-md-2 text-center">
												{(+item.price * +item.quantity).toFixed(2)}
											</div>
											<div class="col-md-1 text-center">
												<button onClick={(e) => { addToCart(e, item.id, 'remove') }} class="badge bg-primary rounded-pill">x</button>
											</div>

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

export default Cart
