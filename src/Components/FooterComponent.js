import React from 'react';
import logo from "../assets/logo.svg";

const FooterComponent = () => {
    return (
        <div>
            <a href="/#" className="footer-container">
                <img className="navbar-container-logo" src={logo} alt='logo'>

                </img>
                <div className="navbar-container-text">HELPCORD</div>
            </a>
        </div>
    );
};

export default FooterComponent;