import React from 'react';
import './Signin.scss';


 const Signin = ({onRouteChange}) => {
     return(
        <div className="signin-box">
            <div className="form">
                <fieldset id="sign_in">
                    <legend>Sign In</legend>
                    <label htmlfor="email">Email</label>
                    <input type="email" name="email"></input>
                    <label htmlfor="password">Password</label>
                    <input type="password" name="password"></input>
                    <input className="button" onClick={() => onRouteChange('home')} type="submit" value="Sign in"></input>
                    <p onClick={() => onRouteChange('register')}>Register</p>
                </fieldset>
            </div>
        </div>
     );
 }

 export default Signin;