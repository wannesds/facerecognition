import React, { useState } from 'react';
import '../Signin/Signin.scss'; //bcs same styles


function Register({onRouteChange, loadUser}) {

    const [regPass, setRegPass] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regName, setRegName] = useState('');

    const onEmailChange = (event) => {
        setRegEmail(event.target.value);
    }

    const onPassChange = (event) => {
        setRegPass(event.target.value);
    }

    const onNameChange = (event) => {
        setRegName(event.target.value);
    }

    const onSubmitReg = () => {
        fetch('https://git.heroku.com/frozen-shore-44702.git/register', {
            method: 'post',
            //mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'mode': 'no-cors'
            },
            body: JSON.stringify({
                email: regEmail,
                password: regPass,
                name: regName
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
                <fieldset id="register">
                    <legend>Register</legend>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={onNameChange}></input>
                    <label htmlFor="email" >Email</label>
                    <input type="email" name="email" onChange={onEmailChange}></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={onPassChange}></input>
                    <input className="button" onClick={onSubmitReg} type="submit" value="Register"></input>
                </fieldset>
            </div>
        </div>
     );
 }

 export default Register;