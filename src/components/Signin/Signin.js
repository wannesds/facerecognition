import React from 'react';
import './Signin.scss';


 const Signin = () => {
     return(
        <div className="signin-box">
            <form>
                <legend>Sign In</legend>
                <label>Email</label>
                <input></input>

                <label>Password</label>
                <input></input>
            </form>
        </div>
     );
 }

 export default Signin;