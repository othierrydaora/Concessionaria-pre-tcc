import { buscarImg } from '../api/vendaApi';
import './Card.scss'

export default function Index(props) {

    function format(data) {
        let ano = data.substr(0, 4), mes = data.substr(5, 2), dia = data.substr(8, 2);
        return `${dia}/${mes}/${ano}`;
    }


    return (
        <div className='layout-card'>
            <li style={{font: "15px 'Roboto', sans serif", color: "#5E5E5E"}}>ID: {props.item.id}</li>
            <div className='card-image'><img style={{ borderRadius: '.2em' }} src={props.item.imagem ? buscarImg(props.item.imagem) : '/assets/images/car-test.png'}  alt=''/></div>
            <div className='card-text'>
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