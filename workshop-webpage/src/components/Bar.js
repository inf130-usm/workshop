import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "../App.css";

const Bar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div className='navbar' id='header'>
            <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    className='menubutton'
            >
            <MenuIcon
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='buttonmenu'/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                className='menumobile'
            >
                <MenuItem onClick={handleClose}><a className='button' href="/">Inicio</a></MenuItem>
                <MenuItem onClick={handleClose}><a className='button' href="#descripcion">Descripción</a></MenuItem>
                <MenuItem onClick={handleClose}><a className='button' href="#programa">Programa</a></MenuItem>
                <MenuItem onClick={handleClose}><a className='button' href="#expositores">Expositores</a></MenuItem>
                <MenuItem onClick={handleClose}><a className='button' href="#contacto">Contacto</a></MenuItem>
                <MenuItem onClick={handleClose}><a className='button' href="https://forms.office.com/r/siNs6wpKYd" target="_blank" rel="noreferrer">INSCRÍBETE</a></MenuItem>
            </Menu>
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