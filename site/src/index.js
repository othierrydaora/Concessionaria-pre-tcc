import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import Home from './pages/home/index.js'
import Menu from './pages/menu/index.js'
import Gerenciamento from './pages/gerenciamento/index.js'
import Cadastro from './pages/cadastro/index.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/menu' element={ <Menu/> }/>
        <Route path='/gerenciamento' element={ <Gerenciamento/> }/>
        <Route path='/cadastro' element={ <Cadastro/> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
