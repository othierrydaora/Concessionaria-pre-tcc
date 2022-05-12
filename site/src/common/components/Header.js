import './Header.sass';

export default function Header(props) {
    return (
        <div classNameName='cm-header'>
            <header>
                <div className="header-fonts header-logo">SIGMA</div>
            </header>
            <nav className="menu-nav header-item">
                <ul>
                    <li><div className="header-fonts">Voltar</div></li>
                </ul>
            </nav>
        </div>
    );
}