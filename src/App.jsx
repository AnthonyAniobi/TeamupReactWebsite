import React from 'react'
import { Header, Team, About, Solutions, Services } from './sections/sections';
import { Navbar } from './components/components';
import './app.css';

const App = () => {
    return (
        <div>
            <div className='teamup__top'>
                <Navbar />
                <Header />
            </div>
            <Services />
            <Team />
            <About />
            <Solutions />
        </div>
    )
}

export default App