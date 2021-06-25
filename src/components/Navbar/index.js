import React from 'react';
import { NavLink , Link } from 'react-router-dom';

import { NavbarSection , NavFlex , List } from './style';


const Navbar = () => {
    return (
        <NavbarSection>
            <div className="container">
                <NavFlex>
                    <div className="logo">
                        <h2 className="logo-text">Ultra Profile</h2>
                    </div>
                    <ul className="list">
                        <List className="list-item">
                            <NavLink exact to="/ReactTemplate/">Home</NavLink>
                        </List>
                        <List className="list-item">
                            <Link exact to="/ReactTemplate/">Work</Link>
                        </List>
                        <List className="list-item">
                            <Link exact to="/ReactTemplate/">Portflio</Link>
                        </List>
                        <List className="list-item">
                            <Link exact to="/ReactTemplate/">Resume</Link>
                        </List>
                        <List className="list-item">
                            <Link exact to="/ReactTemplate/">About</Link>
                        </List>
                        <List className="list-item">
                            <NavLink to="/ReactTemplate/contact">Contact</NavLink>
                        </List>
                    </ul>
                </NavFlex>
                
            </div>
        </NavbarSection>
    )
}

export default Navbar;