import React, {useState, useEffect} from 'react';
import "../App.css";

const Bar = () => {
    return (
        <div className='navbar' id='header'>
            <div className='navbar-logos'>
                <img className="navbar-cap4city" src={"/logo-cap4city.png"} alt="Logo Cap4city"/>
                <img className="navbar-erasmus" src={"/logo-erasmus.png"} alt="Logo Erasmus"/>
            </div>
            <div className='navbar-menu'>
                <a className='menu-link' href="/">Inicio</a>
                <a className='menu-link' href="#descripcion">Descripción</a>
                <a className='menu-link' href="#programa">Programa</a>
                <a className='menu-link' href="#expositores">Expositores</a>
                <a className='menu-link' href="#contacto">Contacto</a>
                <div className='button-container'>
                    <a className='button' href="https://forms.office.com/r/siNs6wpKYd" target="_blank" rel="noreferrer">INSCRÍBETE</a>  
                </div>
            </div>
        </div>
    );
}


export default Bar;