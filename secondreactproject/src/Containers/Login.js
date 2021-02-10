import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Titlebar from "../Components/Titlebar";


import React from 'react'
import '../assets/css/home.css'

class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            errors: {
                email: "",
                password: "",
                
        }
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

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.checkValidation()) {

        }

    }

    render() {
        return (
            <>
                <Header />
                <Titlebar title="Login"/>

                <div class="container-fluid">
                    <div class="row mt-5 mb-5">
                        <div class="col-4 col-xs-0">

                        </div>
                        <div class="col-4">
                            <form onSubmit={(e) => { this.handleSubmit(e) }}>
                                <h1>Login here</h1>

                                



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
                                <button type="submit" class="btn btn-primary">Login</button>
                            </form>
                        </div>
                        <div class="col-4 col-xs-0">
                            
                        </div>
                    </div>
                </div>

                <Footer />
            </>



        )


    }


}

export default Login