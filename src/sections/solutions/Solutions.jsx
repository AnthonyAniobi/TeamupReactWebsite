import React from 'react'
import linkedin from '../../assets/linkedin-fill.png';
import instagram from '../../assets/Instagram-filled.png';
import facebook from '../../assets/facebook-filled.png';
import mail from '../../assets/Vector.png';
import phone from '../../assets/Vector-1.png';
import './solutions.css';

const Solutions = () => {
    return (
        <div className='teamup__solutions' id='contact'>
            <div className="teamup__solutions-content">
                <h1>TeamUp Solutions</h1>
                <p>Customers in 11 Countries are using CloudYogi CRM to manage their business.
                    Join those successful ventures now.</p>
                <div className="teamup__solutions-content-icons">
                    <img src={linkedin} alt='linkedin logo' />
                    <img src={instagram} alt='instagram logo' />
                    <img src={facebook} alt='facebook logo' />
                </div>
                <div>
                    <h2>Contact</h2>
                    <div>
                        <img src={mail} alt='mail image' />
                        <p>corporate@teamupsolutions.in</p>
                    </div>
                    <div>
                        <img src={phone} alt='phone image' />
                        <p>8194019679</p>
                    </div>
                </div>
            </div>
            <div className="teamup__solutions-map" />
        </div>
    )
}

export default Solutions