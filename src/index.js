import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './app/store';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import LandingPage from './features/landingPage/LandingPage';
import Home from './features/landingPage/pages/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
        <BrowserRouter>
            <Routes>
                 <Route path='/' element={<LandingPage /> }>
                       <Route path='' element={<Home />} />
                 </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

