import React from 'react'
import './services.css';
import { Scard } from '../../components/components';

const Services = () => {
    return (
        <div className='teamup__services' id='services'>
            <div className="teamup__services-title">
                <h1>
                    Services
                </h1>
            </div>
            <div className='teamup__services-card'>
                <Scard />
                <Scard />
                <Scard />
            </div>
        </div>
    )
}

export default Services