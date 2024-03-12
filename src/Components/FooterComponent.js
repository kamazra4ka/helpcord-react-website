import React from 'react';
import logo from "../assets/logo.svg";

const FooterComponent = () => {
    return (
        <>
            <a href="/#" className="footer-container">
                <img className="navbar-container-logo" src={logo} alt="logo"/>
                <div className="navbar-container-text">HELPCORD</div>
            </a>
        </>
    );
};

export default FooterComponent;