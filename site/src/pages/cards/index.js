import React, { useState, useEffect } from 'react';
import { filtrarDatas, listarTodasVendas, removerVenda } from '../../api/vendaApi';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import './index.scss';


export default function Index() {
    const [vendas, setVendas] = useState([]);
    const [inicio, setInicio] = useState('');
    const [fim, setFim] = useState('');
    const [ganhos, setGanhos] = useState(0);
    
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

    async function listarFiltrados() {
        try {
            if (!inicio || !fim) return;

            const resp = await filtrarDatas(inicio, fim);
            console.log(resp)
            setVendas(resp);
        } catch (err) {
            toast.error(err.message)
        }
    }

    function refresh() {
        setInicio('');
        setFim('');
        listarVendas();
    }

    function calcularGanhos() {
        let r = 0;
        vendas.forEach(item => r += Number(item.preco));
        setGanhos(r);
    }

    
    useEffect(() => {
        listarVendas()
    }, []);

    useEffect(() => {
        calcularGanhos();
    }, [vendas]);
    
    useEffect(() => {
        listarFiltrados();
    }, [inicio, fim])

    return (
        <div className='cards'>
            <Header user logo/>
            <Menu selecionado='cards'/> 

            <main className='cards-content'>
                <section className='card-top-bar'>
                    <div>
                        <div className='card-top-bar-inputs'>
                        <p>Filtrar</p>
                            <span> 
                                <input
                                    placeholder='Data inicial'
                                    value={inicio}
                                    onChange={e => setInicio(e.target.value)}
                                    onFocus={(e) => (e.target.type = "date")}
                                />
                            </span>

                            <span>
                                <input
                                    placeholder='Data final'
                                    value={fim}
                                    onChange={e => setFim(e.target.value)}
                                    onFocus={(e) => (e.target.type = "date")}
                                />
                            </span>

                            <img src='/assets/Icons/limpar-filtro.png' alt='' onClick={refresh}/>
                        </div>
                    </div>

                    <span>
                        <div>Ganhos totais: {ganhos }</div>
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
