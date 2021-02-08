import Footer from "../Components/Footer"
import Header from "../Components/Header"

import React from 'react'
import sgMail from '@sendgrid/mail'

import '../assets/css/home.css'
        
sgMail.setApiKey("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")

class Contact extends React.Component {

    constructor(){
        super()
        this.state = {
            name: "",
            email:"",
            phone:"",
            query:""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {name, email, phone, query} = this.state

        const msg = {
            to: 'anuvats1988@gmail.com', // Change to your recipient
            from: 'viv_sharma2002@yahoo.co.in', // Change to your verified sender
            subject: 'Abc - Contact Us Query',
            text: 'New Contact Us Query from Abc.',
            html: `<table>
                <tr>
                    <th>Name:</th>
                    <td>${name}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>${email}</td>
                </tr>
                
                <tr>
                    <th>Phone:</th>
                    <td>${phone}</td>
                </tr>
                
                <tr>
                    <th>Query:</th>
                    <td>${query}</td>
                </tr>
                </table>`,
        }

        sgMail
        .send(msg)
        .then(() => {
            alert("Your Query is submitted, We will get back to you within 24 hours.")
        })
        .catch((error) => {
            console.error(error)
        })

    }

    render() {
        return (
            <>
                <Header />

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-6">
                            <form onSubmit={(e)=>{ this.handleSubmit(e) }}>
                                <h1>Contact Us</h1>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Name</label>
                                    <input type="text" name="name" onChange={(e)=>{ this.setState({name: e.target.value}) }} class="form-control" id="name" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Contact Number</label>
                                    <input type="text" name="phone" onChange={(e)=>{ this.setState({phone: e.target.value}) }} class="form-control" id="contactNo" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="text" name="email" onChange={(e)=>{ this.setState({email: e.target.value}) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Query</label>
                                    <textarea class="form-control" onChange={(e)=>{ this.setState({query: e.target.value}) }}  name="query" id="exampleInputPassword1"></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div class="col-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.7275511917314!2d76.67293731461127!3d30.75415359165209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef174ccb00e3%3A0x4c6c21107d78390e!2sWebz%20Academy!5e0!3m2!1sen!2sin!4v1612507923704!5m2!1sen!2sin"
                                width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>

                <Footer />
            </>



        )


    }


}

export default Contact