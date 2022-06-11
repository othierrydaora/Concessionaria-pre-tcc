import Menu from '../../components/Menu.js'
import './index.scss'


export default function Index() {
    return (
        <main className='page-home'>
            <Menu selecionado='admin' />
            <div className='conteudo'>
                <img className='logo-estilizado' src="/assets/Icons/icon-black.png" alt='logo estilizado' />
            </div>
        </main>
    );
}