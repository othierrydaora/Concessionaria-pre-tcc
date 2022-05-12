import { Link } from 'react-router-dom';
import './index.scss';

export default function Menu() {
    return (
        <div className='main'>
            <header>
                <div>
                        <Link to='/' className='fonts-p1' id='header-logo' href="#">SIGMA</Link>
                </div>
                <nav className='menu-nav' id='header-item'>
                    <ul>
                        <li><Link to='/' className='fonts-p1'>Inicio</Link></li>
                    </ul>
                </nav>
            </header>

        <section className='cards-menu'>
                <div className='card'>
                    <img className='img-card' src='./images/Login-rafiki.svg' />
                    <h1 className='card-txt'>Cadastro</h1>
                    <p className='card-paragrafo'>Realize o cadastro de um novo cliente</p>
                    <Link to='/cadastro'><div className='btn-card'>Cadastrar</div></Link>
                </div>

                <div className='card'>
                    <img className='img-card' src='./images/Version control-bro.svg' alt='n'/>
                    <h1 className='card-txt'>Gerenciamento</h1>
                    <p className="card-paragrafo">Faça a consulta e o gerenciamento de dados de clientes</p>
                    <Link to='/gerenciamento'><div className='btn-card'>Gerenciar</div></Link>
                </div>
        </section>
      </div>
    );
}