import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/';
import SelectAchievement from './Pages/selectAchievement'
import Achievement from './Pages/Achievement';
import Resume from './Pages/Resume/';
import Error from './Pages/Error/';

import Header from './Components/Header';
import Footer from './Components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/achievement' element={<SelectAchievement/>}/>
      <Route path='/achievement/:id' element={<Achievement/>} />
      <Route path='/curriculumvitae' element={<Resume/>} />
      <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
