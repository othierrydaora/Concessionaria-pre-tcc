import { useNavigate } from 'react-router-dom';
import { buscarImg } from '../api/vendaApi';
import './Card.scss'

export default function Index(props) {
    const navigate = useNavigate();

    function format(data) {
        let ano = data.substr(0, 4), mes = data.substr(5, 2), dia = data.substr(8, 2);
        return `${dia}/${mes}/${ano}`;
    }

    function goToDetalhada() {
        navigate(`/card/${props.item.id}`);
    }

    return (
        <div className='layout-card' onClick={goToDetalhada}>
            <div className='card-image'><img src={buscarImg(props.item.imagem)}  alt=''/></div>
            <div className='card-text'>
                <li>ID: {props.item.id}</li>
                <li>Cliente: {props.item.cliente}</li>
                <li>Placa: {props.item.placa}</li>
                <li>Modelo: {props.item.modelo}</li>
                <li>Preço: {props.item.preco}</li>
                <li>Data: {format(props.item.compra)}</li>
                
                <div className='card-actions'>
                    <img src="/assets/Icons/edit.png" alt='Editar' onClick={() => props.alterarVendaClick(props.item.id)}/>
                    <img src="/assets/Icons/trash.png" alt='Excluir' onClick={() => props.removerVendaClick(props.item.id)}/>
                </div>
            </div>
        </div>
    )
}