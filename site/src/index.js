import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import Home from './pages/home/index.js'
import Menu from './pages/menu/index.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/menu' element={ <Menu/> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
