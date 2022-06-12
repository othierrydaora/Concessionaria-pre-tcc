import axios from 'axios';
const api = axios.create({ baseURL: 'http://localhost:5050' });

export async function cadastrarVenda ( cliente, cpf, nascimento, email, endereco, telefone, modelo, placa, preco, compra, usuario) {
    const r = await api.post('/venda', {
        cliente: cliente,
        cpf: cpf,
        nascimento: nascimento,
        email: email,
        endereco: endereco,
        telefone: telefone,
        modelo: modelo,
        placa: placa,
        preco: preco,
        compra: compra,
        usuario: usuario
      })
    return r.data;
}

export async function listarTodasVendas() {
  const r = await api.get('/venda');
  return r.data;
}

export async function filtrarCpf(cpf) {
  const r = await api.get(`/venda?cpf=${cpf}`);
  return r.data;
}

export async function removerVenda(id) {
  const resposta = await api.delete(`/venda/${id}`);
  return resposta.status;
}
