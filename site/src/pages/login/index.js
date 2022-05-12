import Header from '../../common/components/Header';
import { Link } from 'react-router-dom';
import './index.scss';



export default function Login() {
    return (
        <div className='pagina-login'>
            <Header />
            <main className='tela-login'>
                <div className="login-box">
                    <div className="login-box-title"> Faça seu login </div>
                    <img className='img-tela' src='/images/agrred2.png' alt=''  />  
                    <form class="forms">
                        <div>
                            <input className="input-field" type="email" placeholder="Insira seu Email"/>
                            <img src= '/images/users-icons2.png' alt='' className="form-image"/>
                        </div>
                        <div>
                            <input className="input-field" type="password" placeholder="Insira sua senha"/>
                            <img src='/images/users-icons.png' alt='' className="form-image"/>
                        </div>
                    </form>
                    <Link to='/menu'><div className="login-button">Entrar</div></Link>
                </div>
            </main>
        </div>
    );
}