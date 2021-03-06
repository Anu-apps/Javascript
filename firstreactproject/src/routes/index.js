import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Containers/Home'
import About from '../Containers/About'
import Services from '../Containers/Services'
import Contact from '../Containers/Contact'
import Login from '../Containers/Login'
import Register from '../Containers/Register'
import Products from '../Containers/Products'


function Routes(){

    return (
        <Router>
            <Switch>
                <Route path="/products" component={Products}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/contact-us" component={Contact}/>
                <Route path="/services" component={Services}/>
                <Route path="/about-us" component={About}/>
                <Route path="/" component={Home} />

                
            </Switch>
        </Router>
    )
}

export default Routes
