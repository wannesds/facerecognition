import React from 'react';
import './Navigation.scss';
import Logo from '../Logo/Logo';

const Navigation = ({route, onRouteChange}) => {
    return(
        <nav>
            <Logo/>
            {
                route === 'signin' ?
                 false 
                    :
                 <a onClick={() => onRouteChange('signin')}>Sign Out</a>
            }
        </nav>
    );
}

export default Navigation;