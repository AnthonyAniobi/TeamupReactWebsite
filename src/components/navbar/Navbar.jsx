import React from 'react';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='teamup__navbar'>
            <div className='teamup__navbar-logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='teamup__navbar-links'>
                <p><a href='#services'>Services</a></p>
                <p><a href='#about'>About</a></p>
                <p><a href='#team'>Our Team</a></p>
                <p><a href='#contact'>Contact@</a></p>
            </div>
        </div>
    )
}

export default Navbar