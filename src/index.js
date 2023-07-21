import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/';
import ProjectPage from './Pages/projectPage/';
import Error from './Pages/Error/';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projet' element={<Home/>}/>
      <Route path='/projet/:id' element={<ProjectPage/>} />
      <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
