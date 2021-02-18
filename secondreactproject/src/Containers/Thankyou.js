import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Titlebar from "../Components/Titlebar";


import React from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
//import sgMail from '@sendgrid/mail'

import '../assets/css/home.css'
init("user_s6TqMyVpTaN3pZIijEBi7");

//sgMail.setApiKey("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")

class Contact extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phone: "",
            query: "",
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

    logOut = (e) => {
        e.preventDefault()
        sessionStorage.removeItem('user')
        this.setState({ isUserLoggedIn: false })
        this.props.history.push("/")
    }


    handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_fuhauxy', 'template_t2crk5m', e.target, 'user_s6TqMyVpTaN3pZIijEBi7')

            .then((result) => {

                this.setState({
                    name: "",
                    email: "",
                    phone: "",
                    query: "",
                    successMessage: true
                })


                setTimeout(() => {
                    this.setState({ successMessage: false })
                }, 3000);

            }, (error) => {
                console.log(error.text);
            });

        // const {name, email, phone, query} = this.state

        // const msg = {
        //     to: 'anuvats1988@gmail.com', // Change to your recipient
        //     from: 'viv_sharma2002@yahoo.co.in', // Change to your verified sender
        //     subject: 'Abc - Contact Us Query',
        //     text: 'New Contact Us Query from Abc.',
        //     html: `<table>
        //         <tr>
        //             <th>Name:</th>
        //             <td>${name}</td>
        //         </tr>
        //         <tr>
        //             <th>Email:</th>
        //             <td>${email}</td>
        //         </tr>

        //         <tr>
        //             <th>Phone:</th>
        //             <td>${phone}</td>
        //         </tr>

        //         <tr>
        //             <th>Query:</th>
        //             <td>${query}</td>
        //         </tr>
        //         </table>`,
        // }

        // sgMail
        // .send(msg)
        // .then(() => {
        //     alert("Your Query is submitted, We will get back to you within 24 hours.")
        // })
        // .catch((error) => {
        //     console.error(error)
        // })

    }

    render() {
        return (
            <>
                <Header isUserLoggedIn={this.state.isUserLoggedIn} logOut={this.logOut} />
                <Titlebar title="Thank You" />

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                          
                                <h1>Order Confirmed!!</h1>

                                    <div class="mb-3">
                                        <div class="alert alert-success" role="alert">
                                            Thanks for your order!! We will get back to you within 24 hours.
                                    </div>
                                    </div>                        </div>
                     
                    </div>
                </div>

                <Footer />
            </>



        )


    }


}

export default Contact