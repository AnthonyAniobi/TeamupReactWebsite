import React from 'react';
import './scard.css';
import icon from '../../assets/cryptocurrency_ncash.png';

const Scard = () => {
    return (
        <div className='teamup__scard'>
            <img src={icon} alt='icon image' />

            <h1>Outbond services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in.</p>
        </div>
    )
}

export default Scard