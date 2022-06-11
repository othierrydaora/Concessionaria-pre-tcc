import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';

export default function Index() {
    const navigate = useNavigate();
    storage.remove('usuario-logado');
    navigate('/login');
}
