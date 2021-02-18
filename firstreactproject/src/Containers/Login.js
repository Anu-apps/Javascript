import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Titlebar from "../Components/Titlebar";


import React from 'react'
import '../assets/css/home.css'
import axios from "axios";

class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            errors: {
                email: "",
                password: "",

            },
            loginError: false,
            errorMessage: "",
            loginSuccess: false,
            submitLoader:  false
        }

    }

    checkValidation = () => {
        const { email, password } = this.state
        const errors = { ...this.state.errors }
        let validate = true


        if (email === "") {
            errors.email = "Email is required"
            validate = false
        }


        if (password === "") {
            errors.password = "Password is required"
            validate = false
        }





        this.setState({ errors })

        return validate

    }

    handleSubmit = async (e) => {
        e.preventDefault()

        //   query

        this.setState({submitLoader: true})

        //query

        if (this.checkValidation()) {

            const { email, password } = this.state

            let response = await axios.get("https://5fffdd12cb21e10017af8153.mockapi.io/users?email=" + email)

            if (response.data && response.data.length > 0) {

                let user = response.data[0]

                // match the useremail and password with the first array element
                if (user.email === email && user.password === password) {
                    //query
                    sessionStorage.setItem('user', JSON.stringify(response.data[0]))

                    this.props.history.push('/')

                } else {
                    this.setState({ loginError: true, errorMessage: "Sorry, Invalid Password!!" })
                }

            } else {
                this.setState({ loginError: true, errorMessage: "Sorry, Invalid Account!!" })
            }

        }

    }

    render() {
        return (
            <>
                <Header />
                <Titlebar title="Login" />

                <div class="container-fluid">
                    <div class="row mt-5 mb-5">
                        <div class="col-md-4 col-0">

                        </div>
                        <div class="col-md-4 col-12">

                            {this.state.loginError &&
                                <div class="mb-3">
                                    <div class="alert alert-danger" role="alert">
                                        {this.state.errorMessage}
                                    </div>
                                </div>
                            }

                            <form onSubmit={(e) => { this.handleSubmit(e) }}>
                                <h1>Login here</h1>





                                <div class="mb-3">
                                    <label for="Email" class="form-label">Email</label>
                                    <input value={this.state.email} type="text" name="email" onChange={(e) => 
                                    { this.setState({ email: e.target.value }) }} 
					class="form-control" id="email" aria-describedby="emailHelp" />
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
                                    <input value={this.state.password} type="password" name="password"
                                     onChange={(e) => { this.setState({ password: e.target.value }) }} 
					class="form-control" id="password" aria-describedby="emailHelp" />
                                    {this.state.errors.password &&
                                        <div class="mb-3">
                                            <div class="alert alert-danger" role="alert">
                                                {this.state.errors.password}
                                            </div>
                                        </div>
                                    }
                                </div>
                       <button type="submit" class="btn btn-primary" disabled={this.state.submitLoader}>{this.state.submitLoader ? "Submiting..." : "Login"}</button>
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

export default Login
