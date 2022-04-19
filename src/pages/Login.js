import './Login.css';
import React, { useState } from 'react';
import axios from 'axios'
import { Link ,Outlet, useMatch, useResolvedPath} from 'react-router-dom';
import { AppContext } from '../context';

const url = "http://localhost:3001"

const LoginForm = props => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        const { uname, pass } = document.forms[0];
        const requestBody = {
            "name": uname.value,
            "password": pass.value
        }
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true
        }

       function Render(res) {
            // Successfully Signed in.
            console.log('Username from login response', res.data);
            localStorage.setItem('username', res.data);
            window.location.replace("http://localhost:3000");
            alert("Logged in as " + uname.value);
            props.setUsername(res.data);
        }

        const { data } = axios.post(
            url + '/login',
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

const Login = () => {
    return <AppContext.Consumer>
        {({setUsername}) => {
            return <LoginForm setUsername={setUsername}/>
        }}
    </AppContext.Consumer>
}

export default Login