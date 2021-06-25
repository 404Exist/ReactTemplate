import React from 'react';
import { FooterEl } from './style';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <FooterEl>
            Copytight &copy; 2020 - {currentYear} by 404Exist
        </FooterEl>
    )
}

export default Footer;