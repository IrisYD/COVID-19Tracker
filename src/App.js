import React from 'react';
import './App.css';
import "leaflet/dist/leaflet.css";
import { Link ,Outlet, useMatch, useResolvedPath} from 'react-router-dom';

function App() {

    const CustomLink = (props) => {
        let resolved = useResolvedPath(props.to);
        let match = useMatch({ path: resolved.pathname, end: true });
        return <Link to={props.to} className='nav-link'>
            {match? <span className='nav-link__focus'>{props.children}</span>: props.children}
        </Link>
    }
    return (

        <div className="App">
        <nav className='NavbarItems'>
        <h1 className='navbar-logo'>COVID-19 TRACKER</h1>
          <ul className='nav-menu'>
            <li><CustomLink to='/'>Data</CustomLink></li>
            <li><CustomLink to='/community'>Community</CustomLink></li>
            <li><CustomLink to='/health'>Health</CustomLink></li>
            <li><CustomLink to='/news'>News</CustomLink></li>
          </ul>
          </nav>
          <Outlet />
       
      </div>


    );
}





export default App;
