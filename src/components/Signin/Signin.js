import React from 'react';
import './Signin.scss';


 const Signin = ({onRouteChange}) => {
     return(
        <div className="signin-box">
            <form>
                <fieldset id="sign_up">
                    <legend>Sign In</legend>
                    <label for="email">Email</label>
                    <input type="email" name="email"></input>
                    <label for="password">Password</label>
                    <input type="password" name="password"></input>
                    <input className="button" onClick={onRouteChange} type="submit" value="Sign in"></input>
                </fieldset>
                <a href="#0">Sign up</a>
            </form>
        </div>
     );
 }

 export default Signin;