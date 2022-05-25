import React from 'react';
import image from '../../assets/teamupsolution.svg';
import './header.css';

const Header = () => {
    return (
        <div className='teamup__header'>
            <div className="teamup__header-image">
                <img src={image} alt='solution image' />
            </div>
            <div className="teamup__header-text">
                <div>
                    <h1 className="title">TeamUp Solutions</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in.</p>
                </div>
            </div>
        </div>
    )
}

export default Header