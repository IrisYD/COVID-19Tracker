import React, { useState } from 'react';
import axios from 'axios'

const url = "http://localhost:3001"

function Signup() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];
    
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
    
        // // Find user login info
        // const userData = database.find((user) => user.username === uname.value);
    
        // // Compare user info
        // if (userData) {
        //     if (userData.password !== pass.value) {
        //         // Invalid password
        //         setErrorMessages({ name: "pass", message: errors.pass });
        //     } else {
        //         setIsSubmitted(true);
        //     }
        // } else {
        //     // Username not found
        //     setErrorMessages({ name: "uname", message: errors.uname });
        // }

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
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                    <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign Up</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default Signup