import React from 'react';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    loginBox: {
        marginTop: '20%'
    },
    loginForm: {
        flexDirection: 'column',
        display: 'flex'
    },
    field: {
        margin: '10px 0'
    }
}));

export default function Login() {
    const classes = useStyles();

    return (


        <Grid container className={classes.root} spacing={2}>

            <Grid item md={4} xs={0}></Grid>
            <Grid item md={4} xs={0}>

                <Card className={classes.loginBox}>
                    <CardContent>
                        <form noValidate autoComplete="off" className={classes.loginForm}>

                            <div className={classes.field}>
                                <TextField
                                    // error
                                    label="Email Address"
                                // defaultValue="Hello World"
                                // helperText="Incorrect entry."
                                />
                            </div>
                            <div className={classes.field}>
                                <TextField
                                    // error
                                    label="Password"
                                // defaultValue="Hello World"
                                // helperText="Incorrect entry."
                                />
                            </div>

                            <Button variant="contained" color="primary">
                                Login
                            </Button>

                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
