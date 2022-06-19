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
                    <div><img src='/assets/Icons/admin.png' alt=''/><span>Admin</span></div>
                </Link>

                <hr/>

                <Link to='/admin/cadastrar' onClick={() => selecionarMenu('cadastro')} className={verificarMenuSelecionado('cadastro')}>    
                    <div><img src='/assets/Icons/cadastro.png' alt=''/><span>Cadastrar</span></div>
                </Link>

                <Link to='/admin/consultar' onClick={() => selecionarMenu('consulta')} className={verificarMenuSelecionado('consulta')}>
                    <div><img src='/assets/Icons/consulta.png' alt=''/><span>Consultar</span></div>
                </Link>

                <Link to='/admin/cards' onClick={() => selecionarMenu('consultarCards')} className={verificarMenuSelecionado('cards')}>
                    <div><img src='/assets/Icons/cards.png' alt=''/><span>Cards</span></div>
                </Link>
            </div>

            <div className='menu-items'>
                <a style={{marginTop: "30px"}} onClick={sairClick} href>
                    <div><img src='/assets/Icons/sair.png' alt=''/><span>Sair</span></div>
                </a>
            </div>
        </div>
    )
}