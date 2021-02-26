import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Login from '../containers/Login'
import Dashboard from '../containers/Dashboard'
import Users from '../containers/Users'
import Products from '../containers/Products'
import Queries from '../containers/Queries'

import Wrapper from '../containers/Wrapper'

function Routes() {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    useEffect(async () => {

        let user = await sessionStorage.getItem('adminUser')

        if (user) {
            setIsUserLoggedIn(true)
        } else {
            setIsUserLoggedIn(false)
        }


    }, [])


    return (
        <Router>
            <Switch>
                <Route path="/queries" render={(props) => {
                    return isUserLoggedIn ?
                        <Wrapper title="Queries" {...props} setIsUserLoggedIn={setIsUserLoggedIn}>
                            <Queries {...props} />
                        </Wrapper>
                        : <Login setIsUserLoggedIn={setIsUserLoggedIn} />
                }}></Route>

                <Route path="/products" render={(props) => {
                    return isUserLoggedIn ?
                        <Wrapper title="Products" {...props} setIsUserLoggedIn={setIsUserLoggedIn}>
                            <Products {...props} />
                        </Wrapper>
                        : <Login setIsUserLoggedIn={setIsUserLoggedIn} />
                }}></Route>
                <Route path="/users" render={(props) => {
                    return isUserLoggedIn ?
                        <Wrapper title="Users" {...props} setIsUserLoggedIn={setIsUserLoggedIn}>
                            <Users {...props} />
                        </Wrapper>
                        : <Login setIsUserLoggedIn={setIsUserLoggedIn} />
                }}></Route>
                <Route path="/" render={(props) => {
                    return isUserLoggedIn ?

                        <Wrapper title="Dashboard" {...props} setIsUserLoggedIn={setIsUserLoggedIn}>
                            <Dashboard {...props} setIsUserLoggedIn={setIsUserLoggedIn} />
                        </Wrapper>


                        : <Login setIsUserLoggedIn={setIsUserLoggedIn} />
                }}></Route>
            </Switch>
        </Router>


    )

}

export default Routes
