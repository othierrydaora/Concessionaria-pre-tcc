import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/index.js';
import Gerenciamento from './pages/gerenciamento/index.js';
import Login from './pages/login/index.js';
import Cadastro from './pages/cadastro/index.js';
import Admin from './pages/admin/index.js';
import Cards from './pages/cards/index.js';
import Detalhada from './pages/detalhada/index.js';
import NotFound from './pages/NotFound/index.js';

export default function Index() {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/admin/consultar' exact element={<Gerenciamento />} />
            <Route path='/admin/cadastrar' exact element={<Cadastro />} />
            <Route path='/admin/cards' exact element={<Cards />} />
            <Route path='/card/:idParam' exact element={<Detalhada />} />
            <Route path='/admin/alterar/:idParam' exact element={<Cadastro />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/admin' exact element={<Admin />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}