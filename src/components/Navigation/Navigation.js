import React from 'react';
import './Navigation.scss';
import Logo from '../Logo/Logo';

const Navigation = ({route}) => {
    return(
        <nav>
            <Logo/>
            {
                route === 'signin' ?
                 false 
                    :
                 <p>Sign Out</p>
            }
        </nav>
    );
}

export default Navigation;