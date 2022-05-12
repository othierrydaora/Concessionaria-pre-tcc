import Header from '../../common/components/Header'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
        <div className="hm-home">
            <Header />
        </div>
        <Link to='/menu'>MENU AQUI THIERRY</Link>
        </div>
    );
}