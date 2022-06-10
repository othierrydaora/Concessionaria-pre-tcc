import storage from 'local-storage';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../common/components/Header';
import './index.scss';

export default function Menu() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/')
        }
    });

    return (
        <div className='main'>
            <Header initial="show" exit="show"/>

        <section className='cards-menu'>
                <div className='card'>
                    <img className='img-card' src='/assets/images/Login-rafiki.svg' alt=''/>
                    <h1 className='card-txt'>Cadastro</h1>
                    <p className='card-paragrafo'>Realize o cadastro de uma nova venda</p>
                    <Link to='/cadastro'><div className='btn-card'>Cadastrar</div></Link>
                </div>

                <div className='card'>
                    <img className='img-card' src='/assets/images/Version control-bro.svg' alt=''/>
                    <h1 className='card-txt'>Gerenciamento</h1>
                    <p className="card-paragrafo">Faça a consulta e o gerenciamento de dados de vendas passadas</p>
                    <Link to='/gerenciamento'><div className='btn-card'>Gerenciar</div></Link>
                </div>
        </section>
      </div>
    );
}
