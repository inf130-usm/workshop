import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "../App.css";

const Contacto = () => {
    return (
        <>
            <div className='dateplace-container' id='contacto'>
                <div className='body dateplace-content'>
                    <div className='contact'>
                        <div className='contact-title'>
                            <label>¡CONTÁCTANOS!</label>
                        </div>
                        <div>
                            <div className='contact-element'>
                                <PersonIcon/>
                                <label>&nbsp;Marisol Jara</label>
                            </div>
                            <div className='contact-element'>
                                <AlternateEmailIcon/>
                                <label>&nbsp;marisol.jara@usm.cl</label>
                            </div>
                            <div className='contact-element'>
                                <LocalPhoneIcon/>
                                <label>&nbsp;+56 22 3037200</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='postcontacto'></div>
        </>
    );
}

export default Contacto;
