import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Data from './pages/Data';
import Community from './pages/Community';
import Health from './pages/Health';
import News from './pages/News';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import {ContextRoot} from './context';


ReactDOM.render(
    <ContextRoot>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Data/>}/>
                    <Route path="community" element={<Community/>}/>
                    <Route path="health" element={<Health/>}/>
                    <Route path="news" element={<News/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="signup" element={<Signup/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </ContextRoot>, document.getElementById('root'));

