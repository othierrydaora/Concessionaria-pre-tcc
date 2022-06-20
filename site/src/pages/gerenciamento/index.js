import React, { useEffect, useState } from 'react';
import { listarTodasVendas, filtrarCpf, removerVenda } from '../../api/vendaApi.js';
import Menu from '../../components/Menu.js';
import Header from '../../components/Header.js';
import './index.scss';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';

export default function Index() {
    const [vendas, setVendas] = useState([]);
    const [cpf, setCpf] = useState();
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!cpf) listarVendas();
    });

    useEffect(() => {
        filtrar();
    }, [cpf]);

    function alterarVendaClick(id) {
        navigate(`/admin/alterar/${id}`);
    }

    async function listarVendas() {
        const resp = await listarTodasVendas();
        setVendas(resp);
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
                            listarTodasVendas();
                            toast.success('Venda removida com sucesso!');
                        }
                        else toast.warn('Não foi possível remover a venda');
                    }
                },
                { label: 'Não' }
            ]
        });
    }

    async function filtrar() {
        const resp = await filtrarCpf(cpf);
        setVendas(resp);
    }

    function handleEnterPress(e) {
        if (e.keyCode === 13) filtrar();
    }

    function format(data) {
        let ano = data.substr(0, 4), mes = data.substr(5, 2), dia = data.substr(8, 2);
        return `${dia}/${mes}/${ano}`;
    }

    return (
        <div className="gerenciamento">
            <Header user logo/>
            <Menu selecionado='consulta'/>      
                
            <div className='gerenciamento-content'>
                <div className='adm-top-bar '>
                    <div className='adm-search-field'>
                        <input type='text' placeholder='Pesquisar por CPF' value={cpf} onChange={e => setCpf(e.target.value)} onKeyDown={handleEnterPress}/>
                        <img src="/assets/Icons/search-icon.svg" style={{width: "17px", cursor: "pointer"}} alt="Pesquisar" onClick={filtrar}/>
                    </div>
                </div>
                
                <table>
                    <thead>
                        <tr style={{userSelect: "none"}}>
                            <th  oncontextmenu="return false" ondragstart="return false" onselectstart="return false">ID</th>
                            <th>NOME</th>
                            <th>CPF</th>
                            <th>NASCIMENTO</th>
                            <th>EMAIL</th>
                            <th>TELEFONE</th>
                            <th>ENDEREÇO</th>
                            <th>PLACA</th>
                            <th>MODELO</th>
                            <th>DATA</th>
                            <th>VALOR</th>
                            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vendas.map(item => 
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{String(item.cliente).substr(0, 10)}</td>
                                    <td>{item.cpf}</td>
                                    <td>{format(item.nascimento)}</td>
                                    <td>{item.email.substr(0, 30)}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.endereco.substr(0, 30)}</td>
                                    <td>{item.placa}</td>
                                    <td>{item.modelo.substr(0, 15)}</td>
                                    <td>{format(item.compra)}</td>
                                    <td>{(item.preco)}</td>
                                    <td>
                                        <div>
                                            <img src="/assets/Icons/edit.png" alt='Editar' onClick={() => alterarVendaClick(item.id)}/>
                                            <img src="/assets/Icons/trash.png" alt='Excluir' onClick={() => removerVendaClick(item.id)}/>
                                        </div>
                                    </td>
                                </tr>                            
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
