import React from 'react';
import { AboutSection , AboutWrapper , AboutTitle , AboutDesc } from './style';

const About = () => {
    return (
        <AboutSection>
            <div className="container">
                <AboutWrapper>
                    <AboutTitle>Creative Developer</AboutTitle>
                    <AboutDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi eligendi sunt inventore similique cum magnam explicabo nam architecto molestias, sint ullam dolor perferendis fuga atque! Mollitia harum dignissimos amet.</AboutDesc>
                    <AboutDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi eligendi sunt inventore similique cum magnam explicabo nam architecto molestias, sint ullam dolor perferendis fuga atque! Mollitia harum dignissimos amet.</AboutDesc>
                </AboutWrapper>
            </div>
        </AboutSection>
    )
}

export default About;