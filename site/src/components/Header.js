import { Link } from 'react-router-dom';
import storage from 'local-storage';
import './Header.scss';


const Login = () => {
    return (
        <div>
            <Link to="/login" ><i class="fa-light fa-user fa login"></i></Link>
        </div>
    );
}

const Home = () => {
    return (
        <div className="header-menu-item">
            <Link to="/"><div>Página inicial</div></Link>
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

const Logo = () => {
    return (
        <div className="header-logo">
            <div className="header-logo-txt">SIGMA</div>
            <img src="/assets/Icons/icon-white.png" className="header-logo-img" alt="Logo" />
        </div>
    )
}

const User = () => {
    return (
        <div className='header-user' title={storage('usuario-logado').nome}>
            {storage('usuario-logado').nome[0]}
        </div>
    )
}


export default function Header(props) {    
    const lgn = props.login;
    const info = props.info;
    const cnt = props.contact;
    const logo = props.logo;
    const home = props.home;
    const user = props.user;

    return (
        <div className='cm-header'>
            {logo ? <Logo/> : <div>&nbsp;</div>}

            <div className="header-menu">
                {info && <Info/>}
                {cnt && <Contact/>}
                {lgn && <Login/>}
                {home && <Home />}
                {user && <User />}
            </div>
        </div>
    );
}
