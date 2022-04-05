import './Login.css';
import React, { useState } from 'react';
import axios from 'axios'

const url = "http://localhost:3001"

function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        const { uname, pass } = document.forms[0];
        const requestBody = {
            "username": uname.value,
            "password": pass.value
        }
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
        }

        const { data } = axios.post(
            url + '/login',
            requestBody,
            config
        ).then((res) => {
            console.log(res.data)
        })
    };

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="title">Sign In</div>
                <div className="input-container">
                    <input type="text" name="uname" placeholder="Username" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <input type="password" name="pass" placeholder="Password" required />
                    {renderErrorMessage("pass")}
                </div>
                <div>
                    <input type="submit" className="button" value="Login"/>
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

export default Login