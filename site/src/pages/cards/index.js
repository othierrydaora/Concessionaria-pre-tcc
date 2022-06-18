import React, { useState, useEffect } from 'react';
import { listarTodasVendas } from '../../api/vendaApi';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import './index.scss';


export default function Index() {
    const [vendas, setVendas] = useState([]);

    async function listarVendas() {
        const resp = await listarTodasVendas();
        setVendas(resp);
    }

    useEffect(() => {
        listarVendas()
    }, []);

    return (
        <div className='cards'>
            <Header user logo />
            <Menu selecionado='cards' /> 

            <main className='cards-content'>
                <div className='main-container'>
                        <div className='adm-top-bar-crd'>
                                <div className='adm-search-field-crd'>
                                    <input type='text' onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} placeholder='Data de Inicio'/>
                                        <img src="/assets/Icons/search-icon.svg" style={{width: "17px", cursor: "pointer"}} alt="Pesquisar"/>
                                </div>
                                <div className='adm-search-field-crd'>
                                    <input type='text' onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} placeholder='Data final'/>
                                    <img src="/assets/Icons/search-icon.svg" style={{width: "17px", cursor: "pointer"}} alt="Pesquisar"/>
                                </div>
                        </div>
                </div>
                <section className='cards-field'>
                    
                    {
                        vendas.map(item => 
                            <ul className='layout-card'>
                                <li className='card-image'><img src='\assets\images\car-test.png' alt='' /></li>
                                <div className='card-text'>
                                    <li>Cliente: {item.cliente}</li>
                                    <li>Nascimento: {String(item.nascimento).substr(0, 10)}</li>
                                    <li>Placa: {item.placa}</li>
                                    <li>Modelo: {item.modelo}</li>
                                    <li>Data: {String(item.compra).substr(0, 10)}</li>
                                </div>
                            </ul>
                        )
                    }
                </section>
            </main>
        </div>
    )
}