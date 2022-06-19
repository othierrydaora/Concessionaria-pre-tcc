import React, { useState, useEffect } from 'react';
import { listarTodasVendas, removerVenda } from '../../api/vendaApi';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import './index.scss';


export default function Index() {
    const [vendas, setVendas] = useState([]);
    
    const navigate = useNavigate();


    async function listarVendas() {
        const resp = await listarTodasVendas();
        setVendas(resp);
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
                            listarVendas();
                            toast.success('Venda removida com sucesso!');
                        }
                        else toast.warn('Não foi possível remover a venda');
                    }
                },
                { label: 'Não' }
            ]
        });
    }

    useEffect(() => {
        listarVendas()
    }, []);



    return (
        <div className='cards'>
            <Header user logo/>
            <Menu selecionado='cards' /> 

            <main className='cards-content'>
                <div className='main-container'>
                    <div className='adm-top-bar-crd'>
                                <div style={{display: 'flex', width: '26em', justifyContent: 'space-between'}}>
                                    <div className='adm-search-field-crd'>
                                        <input type='text' onFocus={(e) => (e.target.type = "date")} placeholder='Data de Inicio'/>
                                            <img src="/assets/Icons/search-icon.svg" style={{width: "17px", cursor: "pointer"}} alt="Pesquisar"/>
                                    </div>
                                    <div className='adm-search-field-crd'>
                                        <input type='text' onFocus={(e) => (e.target.type = "date")} placeholder='Data final'/>
                                        <img src="/assets/Icons/search-icon.svg" style={{width: "17px", cursor: "pointer"}} alt="Pesquisar"/>
                                    </div>
                                </div>
                                <div className='adm-search-field-crd'>
                                    <p type='text' style={{width: '15em', fontFamily: 'sans-serif' , fontSize: '15px', color: '#535353'}}>Lucro total: </p>
                                </div>
                        </div>
                </div>
                <section className='cards-field'>
                    {
                        vendas.map(item => 
                            <Card item={item} alterarVendaClick={alterarVendaClick} removerVendaClick={removerVendaClick} />
                        )
                    }
                </section>
            </main>
        </div>
    )
}