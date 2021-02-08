import { Link } from 'react-router-dom'

function Header() {

    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Webz Academy</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link class="nav-link" to="/about-us">About Us</Link>
                            <Link class="nav-link" to="/services">Services</Link>
                            <Link class="nav-link" to="/contact-us">Contact US</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header