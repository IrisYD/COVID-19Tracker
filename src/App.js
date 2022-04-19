import React from 'react';
import './App.css';
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';
import { AppContext } from './context';

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

        window.location.replace("http://localhost:3000/profile");

        // const config = {
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     withCredentials: true
        // }

        // return axios.get(
        //     url + '/logout',
        //     config
        // )
        // .then((res) => {
        //     alert(res.data);
        //     console.log(res.data);
        // })
        // .catch((error) => {
        //     alert("Did not logged in");
        //     console.log(error);
        // })
    }

    return (
        <div className="App">
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>COVID-19 TRACKER</h1>
                <div>
                    <div className='nav-login'>
                        <AppContext.Consumer>
                            {({ username, setUsername }) => {
                                if (username) {
                                    return <input type="button" className="nav-logout" value={username} onClick={(evt) => {
                                        // handleClick(evt).then(() => { setUsername(null) })
                                        handleClick(evt)
                                    }} />;
                                }
                                return <CustomLink to='/login'>Sign in / Sign up</CustomLink>;
                            }}
                        </AppContext.Consumer>
                    </div>
                    <div>
                        <ul className='nav-menu'>
                            <li><CustomLink to='/'>Data</CustomLink></li>
                            <li><CustomLink to='/community'>Community</CustomLink></li>
                            <li><CustomLink to='/health'>Health</CustomLink></li>
                            <li><CustomLink to='/news'>News</CustomLink></li>
                            <li><CustomLink to='/profile'>Profile</CustomLink></li>

                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}


export default App;
