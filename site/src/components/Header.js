import { Link, useNavigate } from 'react-router-dom';
import sairClick from '../common/functions/sairClick.js';
import './Header.scss';


const Login = () => {
    return (
        <div>
            <Link to="/login" ><i class="fa-light fa-user fa user"></i></Link>
        </div>
    );
}

const Back = () => {
    return (
        <div className="header-menu-item">
            <Link to="/admin"><div>Voltar</div></Link>
        </div>
    );
}

const Info = () => {
    return (
        <div className="header-menu-item">
            <a href="#info"><div>Informações</div></a>
        </div>
    );
}

const Contact = () => {
    return (
        <div className="header-menu-item">
            <a href="#contato"><div>Contato</div></a>
        </div>
    );
}


export default function Header(props) {
    
    const lgn = props.login === 'show';
    const back = props.back === 'show';
    const info = props.info === 'show';
    const cnt = props.contact === 'show';
    const exit = props.exit === 'show';

    return (
        <div className='cm-header'>
            <div className="header-logo">
                <div className="header-logo-txt">SIGMA</div>
                <img src="/assets/images/logo.png" className="header-logo-img" alt="Logo" />
            </div>
            <div className="header-menu">
                {info && <Info/>}
                {cnt && <Contact/>}
                {lgn && <Login/>}
                {back && <Back />}
                {exit && 
                    <div className='header-menu-item' onClick={sairClick}>
                        Sair
                    </div>
                }
            </div>
        </div>
    );
}
