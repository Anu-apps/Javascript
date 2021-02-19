import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Titlebar from "../Components/Titlebar";


import React from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
//import sgMail from '@sendgrid/mail'

import {logOut } from '../helpers'

import '../assets/css/home.css'
init("user_s6TqMyVpTaN3pZIijEBi7");

//sgMail.setApiKey("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")

class Checkout extends React.Component {

    constructor() {
        super()
        this.state = {
            firstNameBilling: "",
            lastNameBilling: "",
            emailBilling: "",
            phoneBilling: "",
            addressBilling: "",
            cityBilling: "",
            stateBilling: "",
            firstNameShipping: "",
            lastNameShipping: "",
            emailShipping: "",
            phoneShipping: "",
            addressShipping: "",
            cityShipping: "",
            stateShipping: "",
            successMessage: false,
            isUserLoggedIn: false
        }
    }

    componentDidMount = async () => {

        let user = await sessionStorage.getItem('user')

        if (user) {
            this.setState({ isUserLoggedIn: true })

        } else {
            this.setState({ isUserLoggedIn: false })
        }
    }

    handleShipping = e => {

        if(e.target.checked){
            this.setState({
                firstNameShipping: this.state.firstNameBilling,
                lastNameShipping: this.state.lastNameBilling,
                emailShipping: this.state.emailBilling,
                phoneShipping: this.state.phoneBilling,
                addressShipping: this.state.addressBilling,
                cityShipping: this.state.cityBilling,
                stateShipping: this.state.stateBilling
            })
        }else{
            
            this.setState({
                firstNameShipping: "",
                lastNameShipping: "",
                emailShipping: "",
                phoneShipping: "",
                addressShipping: "",
                cityShipping: "",
                stateShipping: ""
            })
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_fuhauxy', 'template_t2crk5m', e.target, 'user_s6TqMyVpTaN3pZIijEBi7')

            .then((result) => {


                
        sessionStorage.removeItem('cartItems')
        
        sessionStorage.removeItem('totalCartItems')

                this.props.history.push('/thank-you')

            }, (error) => {
                console.log(error.text);
            });

    }

    setIsUserLoggedIn = (state) => {
        this.setState({isUserLoggedIn: state})
    }

    render() {
        return (
            <>
                <Header isUserLoggedIn={this.state.isUserLoggedIn}  logOut={()=>{ logOut(this.setIsUserLoggedIn, this.props.history) }}  />
                <Titlebar title="Checkout" />

                <div class="container-fluid">
                <form onSubmit={(e) => { this.handleSubmit(e) }}>
                    <div class="row mt-5">
                        <div class="col-6">
                          
                                <h1>Billing Address</h1>

                                {this.state.successMessage &&
                                    <div class="mb-3">
                                        <div class="alert alert-success" role="alert">
                                            Thanks for your query!! We will get back to you within 24 hours.
                                    </div>
                                    </div>
                                }



                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                                    <input value={this.state.firstNameBilling} type="text" name="name" onChange={(e) => { this.setState({ firstNameBilling: e.target.value }) }} class="form-control" id="firstNameBilling" aria-describedby="emailHelp" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                    <input value={this.state.lastNameBilling} type="text" name="name" onChange={(e) => { this.setState({ lastNameBilling: e.target.value }) }} class="form-control" id="lastNameBilling" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Contact Number</label>
                                    <input value={this.state.phoneBilling} type="text" name="phoneBilling" onChange={(e) => { this.setState({ phoneBilling: e.target.value }) }} class="form-control" id="contactNo" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input value={this.state.emailBilling} type="text" name="emailBilling" onChange={(e) => { this.setState({ emailBilling: e.target.value }) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Address</label>
                                    <textarea value={this.state.addressBilling} class="form-control" onChange={(e) => { this.setState({ addressBilling: e.target.value }) }} name="addressBilling" id="exampleInputPassword1"></textarea>
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">City</label>
                                    <input value={this.state.cityBilling} type="text" name="name" onChange={(e) => { this.setState({ cityBilling: e.target.value }) }} class="form-control" id="cityBilling" aria-describedby="emailHelp" />
                                </div>


                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">State</label>
                                    <input value={this.state.stateBilling} type="text" name="stateBilling" onChange={(e) => { this.setState({ stateBilling: e.target.value }) }} class="form-control" id="state" aria-describedby="emailHelp" />
                                </div>

                        </div>
                        <div class="col-6">

                            <h1>Shipping Address</h1>

                            <div class="form-group form-check">
                                <input value={true} type="checkbox" class="form-check-input" id="exampleCheck1" onChange={(e)=>{ this.handleShipping(e) }} />
                                <label class="form-check-label" for="exampleCheck1">Same as Billing?</label>
                            </div>


                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">First Name</label>
                                <input value={this.state.firstNameShipping} type="text" name="name" onChange={(e) => { this.setState({ firstNameShipping: e.target.value }) }} class="form-control" id="firstNameShipping" aria-describedby="emailHelp" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                <input value={this.state.lastNameShipping} type="text" name="name" onChange={(e) => { this.setState({ lastNameShipping: e.target.value }) }} class="form-control" id="lastNameShipping" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Contact Number</label>
                                <input value={this.state.phoneShipping} type="text" name="phoneShipping" onChange={(e) => { this.setState({ phoneShipping: e.target.value }) }} class="form-control" id="contactNo" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input value={this.state.emailShipping} type="text" name="emailShipping" onChange={(e) => { this.setState({ emailShipping: e.target.value }) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Address</label>
                                <textarea value={this.state.addressShipping} class="form-control" onChange={(e) => { this.setState({ addressShipping: e.target.value }) }} name="addressShipping" id="exampleInputPassword1"></textarea>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">City</label>
                                <input value={this.state.cityShipping} type="text" name="cityShipping" onChange={(e) => { this.setState({ cityShipping: e.target.value }) }} class="form-control" id="cityShipping" aria-describedby="emailHelp" />
                            </div>


                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">State</label>
                                <input value={this.state.stateShipping} type="text" name="stateShipping" onChange={(e) => { this.setState({ stateShipping: e.target.value }) }} class="form-control" id="state" aria-describedby="emailHelp" />
                            </div>

                            <button type="submit" class="btn btn-primary">Place Order</button>

                        </div>
                    </div>
                    
                    </form>
                </div>

                <Footer />
            </>



        )


    }


}

export default Checkout