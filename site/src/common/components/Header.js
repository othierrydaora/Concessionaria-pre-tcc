import { Link } from 'react-router-dom';

import './Header.scss';


const Login = () => {
    return (
        <div className="header-menu-item">
            <Link to="/admin" ><i class="fa-light fa-user fa fb"></i></Link>
        </div>
    );
}

const BackToInitial = () => {
    return (
        <div className="header-menu-item">
            <Link to="/" ><div>Página inicial</div></Link>
        </div>
    );
}

const Back = () => {
    return (
        <div className="header-menu-item">
            <Link to="/menu"><div>Voltar</div></Link>
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
    const init = props.initial === 'show';
    const back = props.back === 'show';
    const info = props.info === 'show';
    const cnt = props.contact === 'show';

    return (
        <div className='cm-header'>
            <div className="header-logo">SIGMA</div>
            <div className="header-menu">
                {info && <Info/>}
                {cnt && <Contact/>}
                {init && <BackToInitial/>}
                {lgn && <Login/>}
                {back && <Back/>}
            </div>
        </div>
    );
}
