import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginRight: '1rem' }}>
                    <Link to="/termsandcondition" style={{ color: '#fff', textDecoration: 'none' }}>
                        Terms and Conditions
                    </Link>
                </li>
                <li style={{ marginRight: '1rem' }}>
                    <Link to="/privacypolicy" style={{ color: '#fff', textDecoration: 'none' }}>
                        Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link to="/form" style={{ color: '#fff', textDecoration: 'none' }}>
                        Form
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
