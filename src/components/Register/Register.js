import React from 'react';
import '../Signin/Signin.scss'; //bcs same styles


 const Register = ({onRouteChange}) => {
     return(
        <div className="signin-box">
            <div className="form">
                <fieldset id="register">
                    <legend>Register</legend>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"></input>
                    <label htmlFor="email" >Email</label>
                    <input type="email" name="email"></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"></input>
                    <input className="button" onClick={() => onRouteChange('home')} type="submit" value="Register"></input>
                </fieldset>
            </div>
        </div>
     );
 }

 export default Register;