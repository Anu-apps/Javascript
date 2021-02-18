import { Link } from 'react-router-dom'

function Footer(){

    return (
        
        <footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">Copyright &copy; 2021</div>
                    <div class="col-6 text-end footer-link">
                        <a href="/">Home</a>
                        <a href="/about-us">About us</a>
                        <a href="/services">Services</a>
                        <a href="/contact-us">Contact us</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
