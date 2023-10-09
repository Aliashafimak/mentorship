import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const navigate = useNavigate()
    return (<>
        <nav className="HeaderItems">
            <Link to="/"><img className="LogoImage" src="/LOGO.png" alt="Mentorship" /></Link>
            <ul>
                <li>
                    <Link to="/register"  >Get Started</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
    );
}

export default Header;
