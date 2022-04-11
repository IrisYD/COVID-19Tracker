import React from 'react';
import './App.css';
import axios from 'axios';
import {Link, Outlet, useMatch, useResolvedPath} from 'react-router-dom';

const url = "http://localhost:3001";

function App() {

    const CustomLink = (props) => {
        let resolved = useResolvedPath(props.to);
        let match = useMatch({path: resolved.pathname, end: true});
        return <Link to={props.to} className='nav-link'>
            {match ? <span className='nav-link__focus'>{props.children}</span> : props.children}
        </Link>
    }

    const handleClick = (event) => {
        event.preventDefault();

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true
        }

        axios.get(
            url + '/logout',
            config
        )
        .then((res) => {
            alert(res.data);
            console.log(res.data);
        })
        .catch((error) => {
            alert("Did not logged in");
            console.log(error);
        })
    }


    return (

        <div className="App">
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>COVID-19 TRACKER</h1>
                <div>
                    <div className='nav-login'>
                        <input type="button" className="nav-logout" value="Logout" onClick={handleClick}/>
                        <CustomLink to='/login'>Sign in / Sign up</CustomLink>
                    </div>
                    <div>
                        <ul className='nav-menu'>
                            <li><CustomLink to='/'>Data</CustomLink></li>
                            <li><CustomLink to='/community'>Community</CustomLink></li>
                            <li><CustomLink to='/health'>Health</CustomLink></li>
                            <li><CustomLink to='/news'>News</CustomLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}


export default App;
