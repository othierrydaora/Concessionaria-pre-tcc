import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { useNavigate, useParams } from 'react-router-dom';
import './index.scss';
import { buscarImg, consultarVenda } from '../../api/vendaApi';


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
    const [compra, setCompra] = useState();
    const [id, setId] = useState(0);
    const [imagem, setImagem] = useState('');

    const { idParam } = useParams();
    const navigate = useNavigate();


    async function carregarPage() {
        const r = consultarVenda(idParam);
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
            setCompra(r.compra.substr(0, 10));
            setId(r.id);
            setImagem(r.imagem);
        }
    }

    function showImage() {
        return buscarImg(imagem);
    }

    useEffect(() => {
        carregarPage();
    });

    return (
        <div className='detalhada'>
            <Header user logo />
            <Menu selecionado='cards' />
            
            <main className='detalhada-content'>
                <section className='detalhada-infos'>
                    <img src={showImage()} alt='' />
                    
                    <div>
                        <div>Nome: {cliente}</div>

                    </div>
                </section>
            </main>
        </div>
    );
}
