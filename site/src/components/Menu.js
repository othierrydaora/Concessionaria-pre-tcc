import storage from 'local-storage';
import { useNavigate, Link } from 'react-router-dom';
import './Menu.scss';
import { useState, useEffect } from 'react';

export default function Index(props) {
    const [menuSelecionado, setMenuSelecionado] = useState(props.selecionado);

    const navigate = useNavigate();

    function selecionarMenu(menu) {
        setMenuSelecionado(menu);
    }

    function verificarMenuSelecionado(menu) {
        if (menu === menuSelecionado) return 'selecionado';
        else return '';
    }

    function sairClick() {
        storage.remove('usuario-logado');
        navigate('/login');
    }

    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/')
        }
    });

    return (
        <div className="menu">
            <div className='menu-items'>
                <Link to='/admin' onClick={() => selecionarMenu('admin')} className={verificarMenuSelecionado('admin')}>
                    <div>Admin</div>
                </Link>

                <hr/>

                <Link to='/admin/cadastrar' onClick={() => selecionarMenu('cadastro')} className={verificarMenuSelecionado('cadastro')}>    
                    <div>Cadastrar</div>
                </Link>

                <Link to='/admin/consultar' onClick={() => selecionarMenu('consulta')} className={verificarMenuSelecionado('consulta')}>
                    <div>Consultar</div>
                </Link>
            </div>

            <div className='menu-items'>
                <a style={{marginTop: "30px"}} onClick={sairClick}>
                    <div>Sair</div>
                </a>
            </div>
        </div>
    )
}