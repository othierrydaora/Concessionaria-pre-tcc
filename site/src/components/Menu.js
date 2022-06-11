import storage from 'local-storage';
import { useNavigate, Link } from 'react-router-dom';
import sairClick from '../common/functions/sairClick.js';
import './Menu.scss';
import { useState, useEffect } from 'react';

export default function Index(props) {
    const [menuSelecionado, setMenuSelecionado] = useState(props.selecionado);

    function selecionarMenu(menu) {
        setMenuSelecionado(menu);
    }

    function verificarMenuSelecionado(menu) {
        if (menu === menuSelecionado) return 'selecionado';
        else return '';
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/')
        }
    });

    return (
        <nav className="menu">
            <div>
                <div className='logo'>
                    <div>Sigma</div>
                </div>

                <div className='menu-items'>
                    <Link to='/admin' onClick={() => selecionarMenu('Admin')} className={verificarMenuSelecionado('Admin')}>
                        
                        <div>Admin</div>
                    </Link>

                    <Link to='/admin/cadastrar' onClick={() => selecionarMenu('cadastrar')} className={verificarMenuSelecionado('cadastrar')}>
                        
                        <div>Cadastrar</div>
                    </Link>
                    <Link to='/admin/consultar' onClick={() => selecionarMenu('consultar')} className={verificarMenuSelecionado('consultar')}>
                        
                        <div>Consultar</div>
                    </Link>
                </div>
            </div>

            <div className='menu-items'>
                <a>
                    <div onClick={sairClick}>Sair</div>
                </a>
            </div>
        </nav>
    )
}