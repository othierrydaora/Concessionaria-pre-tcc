import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { useNavigate, useParams } from 'react-router-dom';
import './index.scss';
import { buscarImg, consultarVenda, removerVenda } from '../../api/vendaApi';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';


export default function Index() {
    const [cliente, setCliente] = useState('');
    const [cpf, setCpf]= useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [preco, setPreco] = useState('');
    const [data, setData] = useState();
    const [id, setId] = useState(0);
    const [imagem, setImagem] = useState('');

    const { idParam } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        carregarPage();
    });

    async function carregarPage() {
        const r = await consultarVenda(idParam);
        if (!r) {
            navigate('*');
        } else {
            setCliente(r.cliente);
            setCpf(r.cpf);
            setEndereco(r.endereco);
            setEmail(r.email);
            setTelefone(r.telefone);
            setNascimento(r.nascimento.substr(0, 10));
            setPlaca(r.placa);
            setModelo(r.modelo);
            setPreco(r.preco);
            setData(r.compra.substr(0, 10));
            setId(r.id);
            setImagem(r.imagem);
        }
    }

    function alterarVendaClick(id) {
        navigate(`/admin/alterar/${id}`);
    }

    async function removerVendaClick(id){
        confirmAlert({
            title: 'Remover venda',
            message: `Deseja remover a venda?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resposta = await removerVenda(id);
                        if (resposta === 204) {
                            carregarPage();
                            toast.success('Venda removida com sucesso!');
                        }
                        else toast.warn('Não foi possível remover a venda');
                    }
                },
                { label: 'Não' }
            ]
        });
    }

    function showImage() {
        return buscarImg(imagem);
    }

    return (
        <div className='detalhada'>
            <Header user logo />
            <Menu selecionado='cards' />
            
            <main className='detalhada-content'>
                <section className='detalhada-infos'>
                    <div>
                        <img style={{height: '16em', width: '100%', borderRadius: '.3em'}} src={showImage()} />
                    </div>
                    <ul className='info-list'>
                        <li>ID: #{id}</li>
                        <li>Cliente: {cliente}</li>
                        <li>Telefone: {telefone}</li>
                        <li>Email: {email}</li>
                        <li>Nascimento: {nascimento}</li>
                        <li>Endereço: {endereco}</li>
                        <li>Placa: {placa}</li>
                        <li>Modelo: {modelo}</li>
                        <li>Data: {data}</li>
                        <li>Preço: {preco}</li>
                    </ul>
                    <ul>
                        <li style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <img src="/assets/Icons/edit.png" alt='Editar' onClick={() => alterarVendaClick(id)}/>
                            <img src="/assets/Icons/trash.png" alt='Excluir' onClick={() => removerVendaClick(id)}/>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}