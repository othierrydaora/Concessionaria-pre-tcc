import React, { useEffect, useState } from 'react';
import { listarTodasVendas, filtrarCpf } from '../../api/vendaApi.js';
import Menu from '../../components/Menu.js';
import Header from '../../components/Header.js';
import './index.scss';

export default function Index() {
    const [vendas, setVendas] = useState([]);
    const [cpf, setCpf] = useState('');

    async function listarVendas() {
        const resp = await listarTodasVendas();
        setVendas(resp);
    }

    async function filtrar() {
        const resp = await filtrarCpf(cpf);
        console.log(resp)
        setVendas(resp);
    }

    useEffect(() => {
        listarVendas();
    })

    return (
        <div className="gerenciamento">
            <Header user logo />
            <Menu selecionado='consulta'/>      
                
            <div className='gerenciamento-content'>
                <div className='adm-top-bar '>
                    <div className='adm-search-field'>
                        <input type='text' placeholder='Pesquisar por CPF' value={cpf} onChange={e => setCpf(e.target.value)} />
                        <img src="/assets/Icons/search-icon.svg" style={{width: "17px", cursor: "pointer"}} alt="Pesquisar" onClick={filtrar}/>
                    </div>
                </div>


                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>CPF</th>
                            <th>ENDEREÇO</th>
                            <th>EMAIL</th>
                            <th>TELEFONE</th>
                            <th>NASCIMENTO</th>
                            <th>PLACA</th>
                            <th>MODELO</th>
                            <th>DATA</th>
                            <th>VALOR</th>
                            <th>&nbsp;&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vendas.map(item => 
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.cliente}</td>
                                    <td>{item.cpf}</td>
                                    <td>{item.endereco}</td>
                                    <td>{item.email}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.nascimento.substr(0, 10)}</td>
                                    <td>{item.placa}</td>
                                    <td>{item.modelo}</td>
                                    <td>{item.compra.substr(0, 10)}</td>
                                    <td>{item.preco}</td>
                                    <td>
                                        <div>
                                            <img src="/assets/Icons/edit.png" alt='Editar'/>
                                            <img src="/assets/Icons/trash.png" alt='Excluir'/>
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
