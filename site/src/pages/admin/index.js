import Header from '../../components/Header.js';
import Menu from '../../components/Menu.js'
import './index.scss'


export default function Index() {
    return (
        <div className='admin'>
            <Header user/>
            <Menu selecionado='admin'/>
            <main className='conteudo'>
                <img className='logo-estilizado' src="/assets/Icons/icon-gray.png" alt='logo estilizado' />
            </main>
        </div>
    );
}
