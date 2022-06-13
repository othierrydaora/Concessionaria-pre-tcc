import React, { useState, useEffect } from 'react';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { alterarVenda, cadastrarVenda, consultarVenda } from '../../api/vendaApi';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import './index.scss';

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
    
    const { idParam } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (idParam) carregarVenda();
    }, []);

    async function carregarVenda() {
        const r = await consultarVenda(idParam);
        setCliente(r.cliente);
        setCpf(r.cpf);
        setEndereco(r.endereco);
        setEmail(r.email);
        setTelefone(r.telefone);
        setNascimento(r.nascimento.substr(0, 10));
        setPlaca(r.placa);
        setModelo(r.modelo);
        setPreco(r.preco);
        setCompra(r.compra.substr(0, 10));
        setId(r.id);
    }

    async function salvarVenda() {
        try {
            const usuario = storage('usuario-logado').id;

            if(id === 0){
                const r = await cadastrarVenda(cliente, cpf, nascimento, email, endereco, telefone, modelo, placa, preco, compra, usuario);
                setId(r.id);
                toast.success('✨ Venda Cadastrada Com Sucesso!');
                
            } else {
                await alterarVenda(id, cliente, cpf, nascimento, email, endereco, telefone, modelo, placa, preco, compra, usuario);
                toast.success('✨ Venda Alterada Com Sucesso!');
            }


        } catch (err) {
            console.log(err);
           toast.error(err.response.data.erro);
           
        }
    }

    function refresh() {
        if (location.pathname !== '/admin/cadastrar') navigate('/admin/cadastrar');

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
                    <div className='title'> Cadastrar Vendas </div>
                    
                    <ul style={{ marginTop: "0.7em" }}>
                        <li>
                            <input type='text' placeholder='Nome' value={cliente} onChange={e => setCliente(e.target.value)}></input>
                            <input type='date' title='Nascimento'  value={nascimento} onChange={e => setNascimento(e.target.value)}></input>
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
                            <input type="number" title='preco carro' min="1" step="any" placeholder='Preço'value={preco} onChange={e => setPreco(e.target.value)}></input>
                        </li>
                        <li>
                            <input type='text' placeholder='Placa' value={placa} onChange={e => setPlaca(e.target.value)}></input>
                            <input type='date' title='Data do registro' value={compra} onChange={e => setCompra(e.target.value)}></input>
                        </li>
                    </ul>
                    <div className='btn-cadastro'>
                        <button className='sending-btn' onClick={salvarVenda} >{ id === 0 ? 'Salvar' : 'Alterar'}</button>
                        <button className='sending-btn' onClick={refresh}>Limpar</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
