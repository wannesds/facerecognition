import React from 'react';
import './Logo.scss';
import Tilt from 'react-tilt';
import {ReactComponent as LogoSVG} from './LogoSVG.svg';


 const Logo = () => {
     return(
        <div className="logo-box">
            <Tilt className="tilt" options={{ max : 25 }} >
                <div className="tilt-inner">
                    <LogoSVG className="logo-svg"/>
                </div>
            </Tilt>
        </div>
     );
 }

 export default Logo;