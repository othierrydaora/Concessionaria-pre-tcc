import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/home/index.js';
import Menu from './pages/menu/index.js';
import Gerenciamento from './pages/gerenciamento/index.js';
import Login from './pages/login/index.js';
import Cadastro from './pages/cadastro/index.js';
import NotFound from './pages/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <Home/> } />
        <Route path='/menu-admin' exact element={ <Menu/> }/>
        <Route path='/gerenciamento' exact element={ <Gerenciamento/> }/>
        <Route path='/cadastro' exact element={ <Cadastro/> } />
        <Route path='/admin' exact element={ <Login/>} />
        <Route path='*' element={ <NotFound/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
