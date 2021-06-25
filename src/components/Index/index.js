import React from 'react';
import './style.css';

import Home from './../Home';
import About from './../About';
import Work from './../Work';
import SocialMedia from './../SocialMedia';
import Profile from './../Profile';
import Portfolio from '../Portfolio';

const Index = () => {
    return (
        <div>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <SocialMedia />
        </div>
    )
}

export default Index;