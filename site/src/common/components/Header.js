import './Header.sass';

export default function Header(props) {
    return (
        <div className='cm-header'>
            <div className='cm-header-logo'>
                <div> SIGMA </div>

            </div>
            <nav className='cm-header-menu'>
                <li> Informações </li>
                <li> Contato </li>
            </nav>
        </div>
    );
}