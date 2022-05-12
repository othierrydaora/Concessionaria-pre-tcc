import './/index.scss';
import { Link } from 'react-router-dom';

export default function() {
    return (
            <main className='main'>
                <div className='main-cont'>
                        <div>
                            <h1 className='tittle'>CADASTRO</h1>
                            <div className='forms-cont'>
                                <div>
                                    <input type='text' placeholder='NOME'></input>
                                    <input type='text' placeholder='NASCIMENTO'></input>
                                </div>
                            <div>
                                <input type='text' placeholder='CPF'></input>
                                <input type='text' placeholder='EMAIL'></input>
                            </div>
                            <div>
                                <input type='text' placeholder='ENDEREÇO'></input>
                                    <input type='text' placeholder='TELEFONE'></input>
                            </div>
                            <div>
                                <input type='text' placeholder='VEÍCULO'></input>
                                <input type='text' placeholder='PRECO'></input>
                            </div>
                            <div>
                                <input type='text' placeholder='PLACA'></input>
                                <input type='text' placeholder='DATA'></input>
                            </div>
                            <a className='sending-btn' href=''>ENVIAR</a>
                        </div>
                    </div>
                </div>
            </main>
    );
}