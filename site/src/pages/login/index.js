import Header from '../../common/components/Header';
import { useState, useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/usuarioApi.js';
import './index.scss';


export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState();
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState('');
    const ref = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        if (storage('usuario-logado')) navigate('/admin');
    }, []);

    async function logarClick() {
        setCarregando(true);
        ref.current.continuousStart();

        try {
            const r = await login(email, senha);
            storage('usuario-logado', r);        
            setTimeout(() => {
                navigate('/admin');
            }, 2000);
            
        } catch (err) {
            console.log(err)
            ref.current.complete();
            setCarregando(false);
            if (err.response.status === 401) setErro(err.response.data.Erro);
        }
    }

    return (
        <div className='pagina-login'>
            <LoadingBar color='#2397c0' ref={ref}/>
            <Header initial="show" />
            <main className='tela-login'>
                <div className="login-box">
                    <div className="login-box-title"> Faça seu login </div>
                    <img className='img-tela' src='/assets/images/agrred2.png' alt=''  />  
                    <form class="forms">
                        <div>
                            <input className="input-field" type="email" placeholder="Insira seu Email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <img src= '/images/users-icons2.png' alt='' className="form-image"/>
                        </div>
                        <div>
                            <input className="input-field" type="password" placeholder="Insira sua senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                            <img src='/images/users-icons.png' alt='' className="form-image"/>
                        </div>
                    </form>
                    <div className="login-button" onClick={logarClick} disabled={carregando}>Entrar</div>
                    
                    <div className='login-invalido'>
                        {erro}
                    </div>
                </div>
            </main>
        </div>
    );
}
