import './Login.css';
import React, { useState } from 'react';
import axios from 'axios'

const url = "http://localhost:3001"

function Signup() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        const { fname, lname, email, uname, pass, rpass } = document.forms[0];

        if (pass.value !== rpass.value) {
            console.log(pass)
            console.log(rpass)
            alert("Passwords don't match!");
            document.forms[0].reset();
            return;
        }
        const requestBody = {
            "name": uname.value,
            "password": pass.value,
            "fname": fname.value,
            "email": email.value,
            "lname": lname.value,
        }

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true
        }

        function Render(res) {
            // Successfully logged in.
            window.location.replace("http://localhost:3000/login");
            alert("Sign up successfully as " + uname.value);
        }

        const { data } = axios.post(
            url + '/add_user',
            requestBody,
            config
        ).then(Render)
        .catch((error) => {
            alert(error.response.data);
            document.forms[0].reset();
        })
    };

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="title">Create Your Account</div>
                <div className="input-container">
                    <input className="text-box" type="text" name="fname" placeholder="Firstname" />\
                </div>
                <div className="input-container">
                    <input className="text-box" type="text" name="lname" placeholder="Lastname"  />
                </div>
                <div className="input-container">
                    <input className="text-box" type="text" name="email" placeholder="Email"  />
                </div>
                <div className="input-container">
                    <input className="text-box" type="text" name="uname" placeholder="Username" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <input className="text-box" type="password" name="pass" placeholder="Password" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="input-container">
                    <input className="text-box" type="password" name="rpass" placeholder="Retype Password" required />
                    {renderErrorMessage("pass")}
                </div>
                <div>
                    <input type="submit" className="button" value="Sign up"/>
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default Signup