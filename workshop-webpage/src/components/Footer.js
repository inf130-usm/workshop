import React from 'react';
import "../App.css";

const Footer = () => {
    return (
        <>
        <div className='prefooter-container'></div>
        <div className='body footer-container'>
            <img className="footer-logos" src={"/logos.png"} alt="Logos"/>
        </div>
        </>
    );
}

export default Footer;
