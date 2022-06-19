import React, { useState, useEffect } from 'react';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { alterarVenda, cadastrarVenda, consultarVenda, enviarImagem } from '../../api/vendaApi';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './index.scss';

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
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (idParam) carregarVenda();
    });

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

            if (!imagem) {
                throw new Error('Escolha uma foto de seu veículo');
            }

            if(id === 0){
                const r = await cadastrarVenda(cliente, cpf, nascimento, email, endereco, telefone, modelo, placa, preco, compra, usuario, imagem);
                await enviarImagem(imagem, r.id, usuario);
                setId(r.id);      
                toast.success('✨ Venda cadastrada com sucesso!');
            } else {
                try {
                    const s = await alterarVenda(id, cliente, cpf, nascimento, email, endereco, telefone, modelo, placa, preco, compra, usuario);
                    console.log(s);
                    toast.success('✨ Venda alterada com sucesso!');
                } catch (err) {
                    toast.error('Não foi possível alterar a venda');
                }
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
        setPreco('');
        setTelefone('');
    }

    function setarImagem() {
        document.getElementById('car-image-input').click();
    }

    function showImage() {
        return URL.createObjectURL(imagem);
    }
    
    return (
        <div className='cadastro'>
            <Header user logo/>
            <Menu selecionado='cadastro' />

            <main className='cadastro-content'>
                <div className='forms-cont'>
                    <div className='title'> { location.pathname !== '/admin/cadastrar' ? 'Editar venda' : 'Cadastrar Vendas' } </div>
                    
                    <div className='cad-forms-columns'>
                        <div>
                            <input
                                type='text'
                                placeholder='Nome'
                                value={cliente}
                                onChange={e => setCliente(e.target.value)} 
                                required="required"
                                maxLength='100'
                            />
                            
                            <input
                                placeholder='Data de nascimento'
                                title='Data de nascimento'
                                value={nascimento}
                                onChange={e => setNascimento(e.target.value)}
                                onFocus={(e) => (e.target.type = "date")} 
                                required="required"
                            />
                        
                            <input
                                type='text'
                                placeholder='CPF'
                                value={cpf} onChange={e => setCpf(e.target.value)} 
                                required="required"
                                maxLength='14'
                            />
                            
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={e => setEmail(e.target.value)} 
                                required="required"
                                maxLength='50'
                            />
                        
                            <input
                                type='text'
                                placeholder='Endereço'
                                value={endereco}
                                onChange={e => setEndereco(e.target.value)}
                                required="required"
                                maxLength='100'
                            />
                            
                        
                            <input
                                type='tel'
                                placeholder='(xx)xxxxx-xxxx'
                                title='Telefone'
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)} 
                                required="required"
                                pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
                                maxLength='14'
                            />

                            <input
                                placeholder='Data do registro'
                                title='Data do registro'
                                value={compra}
                                onChange={e => setCompra(e.target.value)}
                                onFocus={(e) => (e.target.type = "date")} 
                                required="required"
                            />
                        </div>

                        <div>
                            <div className='car-image-box' onClick={setarImagem} title='Enviar imagem'>
                                {
                                    !imagem ? <img src='/assets/Icons/upload.svg' alt='' className='car-image-box-icon'/>
                                    : <img src={showImage()} alt=''/>
                                }

                                <input type='file' id='car-image-input' onChange={e => setImagem(e.target.files[0])}/>
                            </div>
                        
                            <input
                                type='text'
                                placeholder='Modelo Veículo'
                                value={modelo}
                                onChange={e => setModelo(e.target.value)} 
                                required="required"
                                maxLength='25'
                            />
                            
                            <input
                                title='Valor da venda'
                                placeholder='Valor da venda'
                                value={preco}
                                onChange={e => setPreco(e.target.value)}
                                onFocus={(e) => (e.target.type = "number")} 
                                required="required"
                            />
                        
                            <input
                                type='text'
                                placeholder='Placa'
                                title='placa'
                                value={placa}
                                onChange={e => setPlaca(e.target.value)} 
                                required="required"
                                maxLength='8'
                            />
                            
                        </div>
                    </div>
                
                        
                    <div className='btn-cadastro'>
                        <button className='sending-btn' onClick={salvarVenda} >{ id === 0 ? 'Salvar' : 'Alterar'}</button>
                        <button className='sending-btn' onClick={refresh}>Limpar</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
