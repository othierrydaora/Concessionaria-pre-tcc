import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5050' });

export async function cadastrarVenda (nome, cpf, nascimneto, email, endereco, telefone, modelo, placa, preco, compra, usuario) {
    const r = await api.post('/venda', {
        nome: nome,
        cpf: cpf,
        endereco: endereco,
        email: email,
        telefone: telefone,
        nascimento: nascimneto,
        placa: placa,
        modelo: modelo,
        preco: preco,
        compra: compra,
        usuario: usuario
    })
    console.log(r.data)
    return r.data;
}