import React from 'react';
import owner from '../../assets/owner.png';
import linkedin from '../../assets/linkedin-fill.png';
import './about.css';

function About() {
    return (
        <div className='teamup__about'>
            <div className='teamup__about-content'>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in.</p>
            </div>
            <div className='teamup__about-container'>
                <img className='teamup__about-container-user-image' src={owner} alt='owner image' />
                <div className='teamup__about-container-user-info'>
                    <p>Purnima Rakholia</p>
                    <p>Founder</p>
                    <img src={linkedin} alt='linkedin logo' />
                </div>
            </div>
        </div>
    )
}

export default About