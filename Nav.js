import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/abou">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>

            </ul>
        </nav>
    );
}

export default Navbar;



