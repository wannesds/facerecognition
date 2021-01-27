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
                 <p onClick={() => onRouteChange('signin')}>Sign Out</p>
            }
        </nav>
    );
}

export default Navigation;