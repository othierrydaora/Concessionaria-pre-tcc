import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import './index.scss';
import Header from '../../common/components/Header';

export default function Cadastro() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/')
        }
    });

    return (
        <div className='cadastro'>
            <Header back="show" />

            <div className='forms-cont'>
                <div className='title'>Cadastro de Vendas</div>
                
                <div>
                    <input type='text' placeholder='Nome'></input>
                    <input type='text' placeholder='Nascimento'></input>
                </div>
                <div>
                    <input type='text' placeholder='CPF'></input>
                    <input type='text' placeholder='Email'></input>
                </div>
                <div>
                    <input type='text' placeholder='Endereço'></input>
                        <input type='text' placeholder='Telefone'></input>
                </div>
                <div>
                    <input type='text' placeholder='Veículo'></input>
                    <input type='text' placeholder='Preço'></input>
                </div>
                <div>
                    <input type='text' placeholder='Placa'></input>
                    <input type='text' placeholder='Data do registro'></input>
                </div>
                
                <button className='sending-btn'>ENVIAR</button>
            </div>
        </div>
    );
}
