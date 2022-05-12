import './Header.scss';

export default function Header(props) {
    return (
        <div className='cm-header'>
            <div className="header-logo">SIGMA</div>
            <div className="header-menu">
                <div className="header-menu-item">Contato</div>
                <div className="header-menu-item">Voltar</div>
            </div>
        </div>
    );
}
