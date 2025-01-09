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
import AboutUs from './features/landingPage/pages/aboutUs/AboutUs';
import OurTeam from './features/landingPage/pages/ourTeam/OurTeam';
import Causes from './features/landingPage/pages/causes/Causes';
import Gallery from './features/landingPage/pages/gallery/Gallery';
import Contact from './features/landingPage/pages/contact/Contact';
import Donate from './features/landingPage/pages/donate/Donate';
import MedicalMission from './features/landingPage/pages/medicalMission/MedicalMission';
import Programs from './features/landingPage/pages/programs/Programs';
import Volunteer from './features/landingPage/pages/volunteers/Volunteer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
        <BrowserRouter>
            <Routes>
                 <Route path='/' element={<LandingPage /> }>
                       <Route path='' element={<Home />} />
                       <Route path='/about_us' element={<AboutUs />} />
                       <Route path='/our_team' element={<OurTeam />} />
                       <Route path='/causes' element={<Causes />} />
                       <Route path='/gallery' element={<Gallery />} />
                       <Route path='/contact' element={<Contact />} />
                       <Route path='/donate' element={<Donate />} />
                       <Route path='/donate/:id' element={<Donate />} />
                       <Route path='/medical_outreach' element={<MedicalMission />} />
                       <Route path='/programs' element={<Programs />} />
                       <Route path='/programs/:id' element={<Programs />} />
                       <Route path='/volunteers' element={<Volunteer />} />
                 </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

