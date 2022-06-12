import {  useState } from 'react';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import Menu from '../../components/Menu'
import './index.scss';
import { alterarVenda, cadastrarVenda } from '../../api/vendaApi'

export default function Cadastro() {
    const [cliente, setCliente] = useState('');
    const [cpf, setCpf]= useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [preco, setPreco] = useState(0);
    const [compra, setCompra] = useState('');
    const [id, setId] = useState(0);



    async function salvarVenda() {
        try {
            const usuario = storage('usuario-logado').id;

            if(id === 0){
                const r = await cadastrarVenda(cliente, cpf, nascimento, email, endereco, telefone, modelo, placa, preco, compra, usuario);
                setId(r.id);
                console.log(id)
                toast.success('✨ Venda Cadastrada Com Sucesso!');
                
            } else{
                await alterarVenda(id, cliente, cpf, nascimento, email, endereco, telefone, modelo, placa, preco, compra, usuario);
                console.log(id)
                toast.success('✨ Venda Alterada Com Sucesso!');
            }


        } catch (err) {
            console.log(err);
           toast.error(err.response.data.erro);
           
        }
    }

    function refresh() {
        setId(0);
        setCliente('');
        setCompra('');
        setCpf('');
        setEmail('');
        setEndereco('');
        setModelo('');
        setNascimento('');
        setPlaca('');
        setPreco(0);
        setTelefone('');
    }

    return (
        <div className='cadastro'>
            <Header user logo/>
            <Menu selecionado='cadastro' />

            <main className='cadastro-content'>
            <div className='forms-cont'>
                <div className='title'>Cadastro de Vendas</div>
                    <ul style={{marginTop: "0.7em"}}>
                <li>
                    <input type='text' placeholder='Nome' value={cliente} onChange={e => setCliente(e.target.value)}></input>
                    <input type='date' placeholder='Nascimento' value={nascimento} onChange={e => setNascimento(e.target.value)}></input>
                </li>
                <li>
                    <input type='text' placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)}></input>
                    <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}></input>
                </li>
                <li>
                    <input type='text' placeholder='Endereço' value={endereco} onChange={e => setEndereco(e.target.value)}></input>
                    <input type='tel' placeholder='Telefone' value={telefone} onChange={e => setTelefone(e.target.value)}></input>
                </li>
                <li>
                    <input type='text' placeholder='Modelo Veículo' value={modelo} onChange={e => setModelo(e.target.value)}></input>
                    <input type="number" min="1" step="any" placeholder='Preço'value={preco} onChange={e => setPreco(e.target.value)}></input>
                </li>
                <li>
                    <input type='text' placeholder='Placa' value={placa} onChange={e => setPlaca(e.target.value)}></input>
                    <input type='date' placeholder='Data do registro' value={compra} onChange={e => setCompra(e.target.value)}></input>
                        </li>
                        </ul>

                <div className='btn-cadastro'>
                <button className='sending-btn' onClick={salvarVenda} >{ id === 0 ? 'Salvar' : 'alterar'}</button>
                <button className='sending-btn' onClick={refresh} >Atualizar</button>

                </div>
            </div>
            </main>
        </div>
    );
}
