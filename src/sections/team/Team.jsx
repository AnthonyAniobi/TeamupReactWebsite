import React from 'react';
import './team.css';
import teamImage from '../../assets/teamImage.png';

const Team = () => {
    return (
        <div className='teamup__team'>
            <h1>Team</h1>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in.
                </p>
                <img src={teamImage} alt='team image' />
            </div>
        </div>
    )
}

export default Team