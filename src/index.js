import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Data from './pages/Data';
import Community from './pages/Community';
import Health from './pages/Health';
import News from './pages/News';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Data />} />
        <Route path="community" element={<Community />} />
        <Route path="health" element={<Health />} />
        <Route path="news" element={<News />} />
        </Route>
    </Routes>
  </BrowserRouter>,document.getElementById('root'));

