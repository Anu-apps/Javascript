import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Titlebar from "../Components/Titlebar";

import axios from 'axios'


import React from 'react'
import '../assets/css/home.css'

class Register extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            phone: "",
            email: "",
            password: "",
            password2: "",
            errors: {
                name: "",
                phone: "",
                email: "",
                password: "",
                password2: ""
            },
            registerSuccess: false
        }
    }

    checkValidation = () => {
        const { name, phone, email, password, password2 } = this.state
        const errors = { ...this.state.errors }
        let validate = true

        if (name === "") {
            errors.name = "Name is required"
            validate = false
        }


        if (phone === "") {
            errors.phone = "Phone is required"
            validate = false
        }


        if (email === "") {
            errors.email = "Email is required"
            validate = false
        }


        if (password === "") {
            errors.password = "Password is required"
            validate = false
        }


        if (password2 === "") {
            errors.password2 = "Confirm Password is required"
            validate = false
        }


        if (password2 !== password) {
            errors.password2 = "Confirm Password is not matched"
            validate = false
        }

        this.setState({ errors })

        return validate

    }

    handleSubmit = async (e) => {
        e.preventDefault()

        if (this.checkValidation()) {

            const { name, phone, email, password } = this.state

        let response = await axios.post( 
                "https://5fffdd12cb21e10017af8153.mockapi.io/users",
                {
                    name, 
                    phone,
                    email,
                    password
                }
            )
                
        if(response.data){
            this.setState({
                name: "",
                email: "",
                phone: "",
                password:"",
                password2: "",
                registerSuccess: true
            })
        }    

        }


    }

    render() {
        return (
            <>
                <Header />
                <Titlebar title="Register" />

                <div class="container-fluid">
                    <div class="row mt-5 mb-5">
                        
                        <div class="col-md-4 col-0">

                        </div>
                        <div class="col-md-4 col-12">


                        {this.state.registerSuccess && 
                                <div class="mb-3">
                                    <div class="alert alert-success" role="alert">
                                        Thanks for the Registration!!
                                    </div>
                                </div>
                                }



                            <form onSubmit={(e) => { this.handleSubmit(e) }}>
                                <h1>Register here</h1>

                                {this.state.successMessage &&
                                    <div class="mb-3">
                                        <div class="alert alert-success" role="alert">
                                            Thanks for your query!! We will get back to you within 24 hours.
                                    </div>
                                    </div>
                                }


                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input value={this.state.name} type="text" name="name" onChange={(e) => { this.setState({ name: e.target.value }) }} class="form-control" id="name" aria-describedby="emailHelp" />
                                    {this.state.errors.name &&
                                        <div class="mb-3">
                                            <div class="alert alert-danger" role="alert">
                                                {this.state.errors.name}
                                            </div>
                                        </div>
                                    }

                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input value={this.state.phone} type="number" name="phone" onChange={(e) => { this.setState({ phone: e.target.value }) }} class="form-control" id="phone" aria-describedby="emailHelp" />
                                    {this.state.errors.phone &&
                                        <div class="mb-3">
                                            <div class="alert alert-danger" role="alert">
                                                {this.state.errors.phone}
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div class="mb-3">
                                    <label for="Email" class="form-label">Email</label>
                                    <input value={this.state.email} type="text" name="email" onChange={(e) => { this.setState({ email: e.target.value }) }} class="form-control" id="email" aria-describedby="emailHelp" />
                                    {this.state.errors.email &&
                                        <div class="mb-3">
                                            <div class="alert alert-danger" role="alert">
                                                {this.state.errors.email}
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input value={this.state.password} type="password" name="password" onChange={(e) => { this.setState({ password: e.target.value }) }} class="form-control" id="password" aria-describedby="emailHelp" />
                                    {this.state.errors.password &&
                                        <div class="mb-3">
                                            <div class="alert alert-danger" role="alert">
                                                {this.state.errors.password}
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div class="mb-3">
                                    <label for="password2" class="form-label">Confirm Password</label>
                                    <input value={this.state.password2} type="password2" name="password2" onChange={(e) => { this.setState({ password2: e.target.value }) }} class="form-control" id="password" aria-describedby="emailHelp" />
                                    {this.state.errors.password2 &&
                                        <div class="mb-3">
                                            <div class="alert alert-danger" role="alert">
                                                {this.state.errors.password2}
                                            </div>
                                        </div>
                                    }
                                </div>
                                <button type="submit" class="btn btn-primary">Registration</button>
                            </form>
                        </div>
                        <div class="col-md-4 col-0">

                        </div>
                    </div>
                </div>

                <Footer />
            </>



        )


    }


}

export default Register