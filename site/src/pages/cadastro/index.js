import {  useState } from 'react';
import storage from 'local-storage';
import Header from '../../components/Header';
import Menu from '../../components/Menu'
import './index.scss';
import { cadastrarVenda } from '../../api/vendaApi'

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf]= useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [preco, setPreco] = useState('');
    const [compra, setCompra] = useState('');


    useEffect(() => {
        if (!storage('usuario-logado')) navigate('/');
    });

    async function salvarVenda() {
        try {
            const usuario = storage('usuario-logado').id;
            const r = await cadastrarVenda(nome, cpf, endereco, email, telefone, nascimento, placa, modelo, preco, compra, usuario);
            alert('Venda Cadastrada Com Sucesso!');


        } catch (err) {
           alert(err.message)
        }
    }

    return (
        <div className='cadastro'>
            <Header user logo/>
            <Menu selecionado='cadastro' />

            <main className='cadastro-content'>
            <div className='forms-cont'>
                <div className='title'>Cadastro de Vendas</div>
                
                <div>
                    <input type='text' placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)}></input>
                    <input type='date' placeholder='Nascimento' value={nascimento} onChange={e => setNascimento(e.target.value)}></input>
                </div>
                <div>
                    <input type='text' placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)}></input>
                    <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <input type='text' placeholder='Endereço' value={endereco} onChange={e => setEndereco(e.target.value)}></input>
                    <input type='tel' placeholder='Telefone' value={telefone} onChange={e => setTelefone(e.target.value)}></input>
                </div>
                <div>
                    <input type='text' placeholder='Modelo Veículo' value={modelo} onChange={e => setModelo(e.target.value)}></input>
                    <input type="number" min="1" step="any" placeholder='Preço'value={preco} onChange={e => setPreco(e.target.value)}></input>
                </div>
                <div>
                    <input type='text' placeholder='Placa' value={placa} onChange={e => setPlaca(e.target.value)}></input>
                    <input type='date' placeholder='Data do registro' value={compra} onChange={e => setCompra(e.target.value)}></input>
                </div>
                
                <button className='sending-btn' onClick={salvarVenda} >Salvar</button>
            </div>
            </main>
        </div>
    );
}
