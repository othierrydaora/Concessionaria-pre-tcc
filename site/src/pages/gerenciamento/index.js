import Header from '../../common/components/Header';
import './/index.scss';

export default function gerenciamento() {
    return (
        <div className="gerenciamento">
        <Header back="show" />
        <div className='adm-top-bar '>
            <div className='adm-top-bar-title'>Controle de vendas</div>
            <div className='adm-search-field'>
                <input type='text' placeholder='Pesquisar por CPF'/>
                <img src="/assets/Icons/search-icon.svg" style={{width: "17px", cursor: "pointer"}} alt="Pesquisar" />
            </div>
        </div>


        <table className='adm-table'>
            <thead>
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
            </thead>
            <tbody>
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
                    <td><div><img src="assets/Icons/edit.png" alt='' /> <img src="/assets/Icons/trash.png" alt='' /></div></td>
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
                    <td><div><img src="assets/Icons/edit.png" alt='' /> <img src="/assets/Icons/trash.png" alt='' /></div></td>
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
                    <td><div><img src="assets/Icons/edit.png" alt='' /> <img src="/assets/Icons/trash.png" alt='' /></div></td>
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
                    <td><div><img src="assets/Icons/edit.png" alt='' /> <img src="/assets/Icons/trash.png" alt='' /></div></td>
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
                    <td><div><img src="assets/Icons/edit.png" alt='' /> <img src="/assets/Icons/trash.png" alt='' /></div></td>
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
                    <td><div><img src="assets/Icons/edit.png" alt='' /> <img src="/assets/Icons/trash.png" alt='' /></div></td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}
