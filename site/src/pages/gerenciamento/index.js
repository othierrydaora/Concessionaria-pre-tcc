import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import storage from 'local-storage';
import Menu from '../../components/Menu.js';
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
            <Menu selecionado="consultar"/>        
                
            <div className='content'>
                <div className='adm-top-bar '>
                    <div className='adm-search-field'>
                        <input type='text' placeholder='Pesquisar por CPF'/>
                        <img src="/assets/Icons/search-icon.svg" style={{width: "17px", cursor: "pointer"}} alt="Pesquisar" />
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
                            <th>DATA</th>
                            <th>VALOR</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nicholas</td>
                            <td>108.176.098-20</td>
                            <td>Av. Atlantica</td>
                            <td>nicholas@gmail.com</td>
                            <td>(11) 99999999</td>
                            <td>17/03/1990</td>
                            <td>GTE-2332</td>
                            <td>06/05/2022</td>
                            <td>72.300</td>
                            <td><div><img src="assets/Icons/edit.png" alt='' className='table-actions' /> <img src="/assets/Icons/trash.png" alt='' className='table-actions'/></div></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nicholas</td>
                            <td>108.176.098-20</td>
                            <td>Av. Atlantica</td>
                            <td>nicholas@gmail.com</td>
                            <td>(11) 99999999</td>
                            <td>17/03/1990</td>
                            <td>GTE-2332</td>
                            <td>06/05/2022</td>
                            <td>72.300</td>
                            <td><div><img src="assets/Icons/edit.png" alt='' className='table-actions' /> <img src="/assets/Icons/trash.png" alt='' className='table-actions'/></div></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nicholas</td>
                            <td>108.176.098-20</td>
                            <td>Av. Atlantica</td>
                            <td>nicholas@gmail.com</td>
                            <td>(11) 99999999</td>
                            <td>17/03/1990</td>
                            <td>GTE-2332</td>
                            <td>06/05/2022</td>
                            <td>72.300</td>
                            <td><div><img src="assets/Icons/edit.png" alt='' className='table-actions' /> <img src="/assets/Icons/trash.png" alt='' className='table-actions'/></div></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nicholas</td>
                            <td>108.176.098-20</td>
                            <td>Av. Atlantica</td>
                            <td>nicholas@gmail.com</td>
                            <td>(11) 99999999</td>
                            <td>17/03/1990</td>
                            <td>GTE-2332</td>
                            <td>06/05/2022</td>
                            <td>72.300</td>
                            <td><div><img src="assets/Icons/edit.png" alt='' className='table-actions' /> <img src="/assets/Icons/trash.png" alt='' className='table-actions'/></div></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nicholas</td>
                            <td>108.176.098-20</td>
                            <td>Av. Atlantica</td>
                            <td>nicholas@gmail.com</td>
                            <td>(11) 99999999</td>
                            <td>17/03/1990</td>
                            <td>GTE-2332</td>
                            <td>06/05/2022</td>
                            <td>72.300</td>
                            <td><div><img src="assets/Icons/edit.png" alt='' className='table-actions' /> <img src="/assets/Icons/trash.png" alt='' className='table-actions'/></div></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nicholas</td>
                            <td>108.176.098-20</td>
                            <td>Av. Atlantica</td>
                            <td>nicholas@gmail.com</td>
                            <td>(11) 99999999</td>
                            <td>17/03/1990</td>
                            <td>GTE-2332</td>
                            <td>06/05/2022</td>
                            <td>72.300</td>
                            <td><div><img src="assets/Icons/edit.png" alt='' className='table-actions' /> <img src="/assets/Icons/trash.png" alt='' className='table-actions'/></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
