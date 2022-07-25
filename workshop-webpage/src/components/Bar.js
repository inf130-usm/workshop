import React from 'react';
import "../App.css";

const Bar = (props) => {

    return (
        <div className='navbar'>
            <div className='navbar-logos'>
                <img className="navbar-cap4city" src={"/logo-cap4city.png"} alt="Logo Cap4city"/>
                <img className="navbar-erasmus" src={"/logo-erasmus.png"} alt="Logo Erasmus"/>
            </div>
            <div className='navbar-menu'>
                <label className='menu-link'>Inicio</label>
                <label className='menu-link'>Descripción</label>
                <label className='menu-link'>Programa</label>
                <label className='menu-link'>Expositores</label>
                <label className='menu-link'>Contacto</label>  
            </div>
        </div>
    );
}


export default Bar;