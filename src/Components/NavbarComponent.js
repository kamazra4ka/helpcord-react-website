import React from 'react';
import logo from '../assets/logo.svg';

const NavbarComponent = () => {
    return (
        <div>
            <div className="navbar-container">
                <img className="navbar-container-logo" src={logo} alt='logo'>

                </img>
                <div className="navbar-container-text">HELPCORD</div>
            </div>
        </div>
    );
};

export default NavbarComponent;