import React from 'react';
import './Navigation.scss';
import Logo from '../Logo/Logo';

const Navigation = ({isSignedIn, onRouteChange}) => {
    return(
        <header>
            <Logo/>
            { isSignedIn === true
                ? <nav className="nav-Loggedin">
                    <p onClick={() => onRouteChange('signout')}>Sign Out</p>
                  </nav>
                : <nav className="nav-loggedout">
                    <p onClick={() => onRouteChange('signin')}>Sign In</p>
                    <p onClick={() => onRouteChange('register')}>Register</p>
                  </nav>
            }
        </header>
    );
}

export default Navigation;