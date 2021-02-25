import React, { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';

import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: "url('/assets/images/bg.jpg')",
        height: "100%",
        padding: "15% 0",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    loginBox: {
    },
    loginForm: {
        flexDirection: 'column',
        display: 'flex'
    },
    field: {
        margin: '10px 0'
    },
    TextField: {
        display: 'flex'
    }
}));

export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [submitLoader, setSubmitLoader] = useState(false)
    const [errors, setErrors] = useState({
        email: "",
        password: "",

    })

    const checkValidation = () => {

        const errorsLocal = { ...errors }
        let validate = true


        if (email === "") {
            errorsLocal.email = "Email is required"
            validate = false
        }


        if (password === "") {
            errorsLocal.password = "Password is required"
            validate = false
        }

        console.log(errorsLocal)

        setErrors(errorsLocal)

        return validate

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setSubmitLoader(true)


        if (checkValidation()) {



            let response = await axios.get("https://5fffdd12cb21e10017af8153.mockapi.io/users?email=" + email)

            if (response.data && response.data.length > 0) {

                let user = response.data[0]

                // match the useremail and password with the first array element
                if (user.email === email && user.password === password && user.role === "admin") {

                    sessionStorage.setItem('adminUser', JSON.stringify(response.data[0]))

                    this.props.history.push('/')

                } else {
                    setLoginError(true)
                    setErrorMessage("Sorry, invalid email")
                }

            } else {
                setLoginError(true)
                setErrorMessage("Sorry, invalid account")

            }

        }

    }

    return (


        <Grid container className={classes.container} spacing={2}>

            <Grid item md={4} xs={0}></Grid>
            <Grid item md={4} xs={0}>

                <Card className={classes.loginBox}>
                    <CardContent>
                        <form onSubmit={(e) => { handleSubmit(e) }}
                            noValidate autoComplete="off" className={classes.loginForm}>

                            <div className={classes.field}>
                                <h1>Admin Login</h1>
                            </div>

                            <div className={classes.field}>
                                <TextField
                                    // error
                                    label="Email Address"
                                    // defaultValue="Hello World"
                                    // helperText="Incorrect entry."
                                    className={classes.TextField}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                {errors.email &&
                                    <Alert severity="error">{errors.email}</Alert>

                                }
                            </div>
                            <div className={classes.field}>
                                <TextField
                                    // error
                                    label="Password"
                                    // defaultValue="Hello World"
                                    // helperText="Incorrect entry."
                                    className={classes.TextField}
                                    type="password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                                {errors.password &&
                                    <Alert severity="error">{errors.password}</Alert>

                                }

                            </div>

                            <div className={classes.field}>
                                <Button type="submit" variant="contained" color="primary">
                                    Login
                            </Button>
                            </div>

                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
