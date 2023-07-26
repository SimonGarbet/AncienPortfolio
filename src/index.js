import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/';
import SelectAchievement from './Pages/selectAchievement'
import Achievement from './Pages/Achievement';
import Error from './Pages/Error/';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/achievement' element={<SelectAchievement/>}/>
      <Route path='/achievement/:id' element={<Achievement/>} />
      <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
