import React from 'react';
import logo from '../assets/logo.svg';

const NavbarComponent = () => {
    return (
        <div>
            <a href="/#" className="navbar-container">
                <img className="navbar-container-logo" src={logo} alt="logo"/>
                <div className="navbar-container-text">HELPCORD</div>
            </a>
        </div>
    );
};

export default NavbarComponent;