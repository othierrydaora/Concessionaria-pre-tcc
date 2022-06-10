import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import storage from 'local-storage';
import Header from '../../common/components/Header';
import './index.scss';

export default function Index() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/')
        }
    });

    return (
        <div className="gerenciamento">
        <Header back="show" />
        <div className='adm-top-bar '>
            <div className='adm-top-bar-title'>Controle de vendas</div>
            <div className='adm-search-field'>
                <input type='text' placeholder='Pesquisar por CPF'/>
                <img src="/Icons/search-icon.svg" style={{width: "17px", cursor: "pointer"}} alt="Pesquisar" />
            </div>
        </div>


        <div className='adm-table'>
            <table>
                <tr className='adm-table-header'>
                    <th>NOME</th>
                    <th>CPF</th>
                    <th>ENDEREÇO</th>
                    <th>EMAIL</th>
                    <th>TELEFONE</th>
                    <th>NASCIMENTO</th>
                    <th>PLACA</th>
                    <th>DATA</th>
                    <th>VALOR</th>
                    <th>AÇÃO</th>
                </tr>
                <tr>
                    <td>Nicholas</td>
                    <td>108.176.098-20</td>
                    <td>Av. Atlantica</td>
                    <td>nicholas@gmail.com</td>
                    <td>(11) 99999999</td>
                    <td>17/03/1990</td>
                    <td>GTE-2332</td>
                    <td>06/05/2022</td>
                    <td>72.300</td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><div><img src="/Icons/edit.png" alt='' /> <img src="/Icons/trash.png" alt='' /></div></td>
                </tr>
            </table>
        </div>
    </div>
    );
}
