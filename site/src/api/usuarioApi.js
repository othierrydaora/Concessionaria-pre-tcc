import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5050' });

export async function login(email, senha) {
    const r = await api.post('/login', {
        email: email,
        senha: senha
    });
    console.log(r.data)
    return r.data;
}
