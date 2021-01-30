import React, { useState, } from 'react';
import './Signin.scss';


function Signin({onRouteChange, loadUser}) {

    const [signInPass, setSignInPass] = useState('');
    const [signInEmail, setSignInEmail] = useState('');

    const onEmailChange = (event) => {
        setSignInEmail(event.target.value);
    }

    const onPassChange = (event) => {
        setSignInPass(event.target.value);
    }

    const onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: signInEmail,
                password: signInPass
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                loadUser(user);
                onRouteChange('home'); 
            }          
        })   
    }

     return(
        <div className="signin-box">
            <div className="form">
                <fieldset id="sign_in">
                    <legend>Sign In</legend>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={onEmailChange}></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={onPassChange}></input>
                    <input className="button" onClick={onSubmitSignIn} type="submit" value="Sign in"></input>
                    <p onClick={() => onRouteChange('register')}>Register</p>
                </fieldset>
            </div>
        </div>
     );
 }

 export default Signin;