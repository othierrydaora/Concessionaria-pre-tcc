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

export async function consultarVenda(id) {
  const r = await api.get(`/venda/${id}`);
  return r.data;
}

export async function filtrarCpf(cpf) {
  const r = await api.get(`/venda/filtro?cpf=${cpf}`);
  return r.data;
}

export async function removerVenda(id) {
  const resposta = await api.delete(`/venda/${id}`);
  return resposta.status;
}

export async function alterarVenda(id, cliente, cpf, nascimento, email, endereco, telefone, modelo, placa, preco, compra, usuario) {
  const r = await api.put(`/venda/${id}`, {
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
  });
  return r.status;
}

export async function enviarImagem(imagem, id, usuario) {
  const formData = new FormData();
  formData.append('imagem', imagem);

  const r = await api.put(`/venda/imagem?id=${id}&usuario=${usuario}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return r.status;
}

export function buscarImg(imagem) {
  return `${api.getUri()}/${imagem}`;
}

export async function filtrarDatas(inicio, fim) {
  const r = await api.get('/venda/periodo', {
    inicio: inicio,
    fim: fim
  });
  return r.data;
}
