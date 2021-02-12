import { Link } from 'react-router-dom'

function Header(props) {



    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Webz Academy</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link class="nav-link" to="/about-us">About Us</Link>
                            <Link class="nav-link" to="/services">Services</Link>
                            <Link class="nav-link" to="/contact-us">Contact Us</Link>
                            {props.isUserLoggedIn &&
                            <Link class="nav-link" to="/products">Products</Link>}
                        </div>

                        {props.isUserLoggedIn ?
                            <div class="navbar-nav">
                                <Link class="nav-link" to="/my-account">My Account</Link>
                                <a class="nav-link" href="#" onClick={(e) => { props.logOut(e) }}>Logout</a>
                            </div>
                            :
                            <div class="navbar-nav">
                                <Link class="nav-link" to="/login">Login</Link>
                                <Link class="nav-link" to="/register">Register</Link>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header