import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return ( 
        <ul className="navbar">
            {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li> */}

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
     );
}

export default Navbar;