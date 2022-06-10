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
                    <input type='date' placeholder='Nascimento'></input>
                </div>
                <div>
                    <input type='text' placeholder='CPF'></input>
                    <input type='email' placeholder='Email'></input>
                </div>
                <div>
                    <input type='text' placeholder='Endereço'></input>
                    <input type='tel' placeholder='Telefone'></input>
                </div>
                <div>
                    <input type='text' placeholder='Veículo'></input>
                    <input type="number" min="1" step="any" placeholder='Preço'></input>
                </div>
                <div>
                    <input type='text' placeholder='Placa'></input>
                    <input type='date' placeholder='Data do registro'></input>
                </div>
                
                <button className='sending-btn'>ENVIAR</button>
            </div>
        </div>
    );
}
