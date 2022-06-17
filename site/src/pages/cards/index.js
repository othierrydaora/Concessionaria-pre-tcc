import React, { useState, useEffect } from 'react';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './index.scss';


export default function cards() {
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
                    
                    <div className='layout-card'>
                        <img src='' alt='' style={{ height: '8em', width: '100%' }} />
                        <ul className='card-text'>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}