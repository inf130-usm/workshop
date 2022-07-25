import React from 'react';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import "../App.css";

const DatePlace = () => {
    return (
        <div className='dateplace-container'>
            <div className='body dateplace-content'>
                <div className='dateplace'>
                    <EventIcon/>
                    &nbsp;
                    <label>
                        Fecha del evento: 
                    </label>
                    &nbsp;&nbsp;
                    <label>
                        4 y 5 de agosto de 2022
                    </label>
                </div>
                <div className='dateplace'>
                    <a href="https://goo.gl/maps/QtyRSHNTgaGS5oEr9" target="_blank" rel="noreferrer">
                        <PlaceIcon/>&nbsp;UTFSM Campus San Joaquín
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DatePlace;
