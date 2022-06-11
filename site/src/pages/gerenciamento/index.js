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
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vendas.map(item => 
                                <tr>
                                    <th>{item.id}</th>
                                    <th>{item.cliente}</th>
                                    <th>{item.cpf}</th>
                                    <th>{item.endereco}</th>
                                    <th>{item.email}</th>
                                    <th>{item.telefone}</th>
                                    <th>{item.nascimento.substr(0, 10)}</th>
                                    <th>{item.placa}</th>
                                    <th>{item.modelo}</th>
                                    <th>{item.compra}</th>
                                    <th>{item.preco}</th>
                                    <td><div><img src="assets/Icons/edit.png" alt='' className='table-actions' /> <img src="/assets/Icons/trash.png" alt='' className='table-actions'/></div></td>
                                </tr>                            
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
