import './Login.css';
import React, { useState } from 'react';
import axios from 'axios'
import { Link ,Outlet, useMatch, useResolvedPath} from 'react-router-dom';

const url = "http://localhost:3001"

const Login = props => {
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
            withCredentials: true
        }

       function Render(res) {
        
            if (!res.data) {
                alert("Cannot find user!")
                // Reset the form to empty.
                document.forms[0].reset();
            } else {
                // Successfully Signed in.
                console.log("jump");
                window.location.replace("http://localhost:3000");
            }
            console.log(res.data);
        }

        const { data } = axios.post(
            url + '/login',
            requestBody,
            config
        ).then(Render)
        .catch((error) => {
            alert(error.response.data);
            console.log(error);
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
                    <div className="div1">
                        <input type="submit" className="button" value="Login"/>
                    </div>
                    <div className="div2">
                    <Link to="/signup">
                        <input type="submit" className="button" value="Sign up"/>
                    </Link>
                    </div>
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