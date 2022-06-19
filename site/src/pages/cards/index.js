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
            <Menu selecionado='cards'/> 

            <main className='cards-content'>
                <section className='card-top-bar'>
                    <div>
                        <span>
                            <input placeholder='Data inicial' onFocus={(e) => (e.target.type = "date")}/>
                        </span>

                        <span>
                            <input placeholder='Data final' onFocus={(e) => (e.target.type = "date")}/>
                        </span>

                        <img src='/assets/Icons/search-icon.png' alt=''/>
                    </div>

                    <span>
                        <div>Ganhos totais: { }</div>
                    </span>
                </section>
                
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