import React from 'react';
import './Navigation.scss';
import Logo from '../Logo/Logo';

const Navigation = () => {
    return(
        <nav>
            <Logo/>
            <p>Sign Out</p>
        </nav>
    );
}

export default Navigation;