import './index.scss';
import Header from '../../common/components/Header';

export default function Cadastro() {
    return (
        <main className='main'>
            <Header back="show" />

            <div className='main-cont'>
                    <div>
                        <div className='title'>CADASTRO</div>
                        <div className='forms-cont'>
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
            </div>
        </main>
    );
}
