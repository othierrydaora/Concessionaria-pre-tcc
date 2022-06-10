import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/index.js';
import Menu from './pages/menu/index.js';
import Gerenciamento from './pages/gerenciamento/index.js';
import Login from './pages/login/index.js';
import Cadastro from './pages/cadastro/index.js';
import NotFound from './pages/NotFound';

export default function Index() {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/admin' exact element={<Menu />} />
            <Route path='/gerenciamento' exact element={<Gerenciamento />} />
            <Route path='/cadastro' exact element={<Cadastro />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}