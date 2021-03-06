import { Router } from "express";
import multer from 'multer'
import { alterarVenda, cadastrarVenda, listagemTotalVendas, filtrocpf, deletarVenda, consultarVenda, alterarImagem, filtroDatas } from "../repository/vendasRepository.js";

const server = Router();
const upload = multer({ dest: 'storage/fotosCarros' });

//cadastrar
server.post('/venda', async (req, resp) => {
    try {
        const adicionarVenda = req.body;
        if (!adicionarVenda.cliente || !adicionarVenda.cliente.trim()) throw new Error('O nome do cliente é obrigatório!');
        if (!adicionarVenda.cpf || !adicionarVenda.cpf.trim()) throw new Error('O CPF é obrigatório!');
        if (!adicionarVenda.nascimento) throw new Error('A data de nascimento é obrigatória!');
        if (!adicionarVenda.email || !adicionarVenda.email.trim()) throw new Error('O email é obrigatório!');
        if (!adicionarVenda.endereco || !adicionarVenda.endereco.trim()) throw new Error('O endereço é obrigatório!');
        if (!adicionarVenda.telefone || !adicionarVenda.telefone.trim()) throw new Error('O telefone é obrigatório!');
        if (!adicionarVenda.modelo || !adicionarVenda.modelo.trim()) throw new Error('O modelo é obrigatório!');
        if (!adicionarVenda.placa || !adicionarVenda.placa.trim()) throw new Error('A placa é obrigatória!');
        if (!adicionarVenda.preco) throw new Error('O preço é obrigatório!');
        if (!adicionarVenda.compra) throw new Error('A data da compra é obrigatória!');
        if (!adicionarVenda.usuario) throw new Error('O usuário não logado!');
        
        const vendaInserida = await cadastrarVenda(adicionarVenda);
        resp.send(vendaInserida);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

//alterar
server.put('/venda/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const alterar = req.body;
        if (!alterar.cliente || !adicionarVenda.cliente.trim()) throw new Error('O nome do cliente é obrigatório!');
        if (!alterar.cpf || !adicionarVenda.cpf.trim()) throw new Error('O CPF é obrigatorio!');
        if (!alterar.nascimento) throw new Error('A data de nascimento é obrigatória!');
        if (!alterar.email || !adicionarVenda.email.trim()) throw new Error('O email é obrigatório!');
        if (!alterar.endereco || !adicionarVenda.endereco.trim()) throw new Error('O endereço é obrigatório!');
        if (!alterar.telefone || !adicionarVenda.telefone.trim()) throw new Error('O telefone é obrigatório!');
        if (!alterar.modelo || !adicionarVenda.modelo.trim()) throw new Error('O modelo é obrigatório!');
        if (!alterar.placa || !adicionarVenda.placa.trim()) throw new Error('A placa é obrigatória!');
        if (!alterar.preco) throw new Error('O preco é obrigatório!');
        if (!alterar.compra) throw new Error('A data da compra é obrigatória!');
        if (!alterar.usuario) throw new Error('Usuario Não Logado!');
        
        const alterandoVenda = await alterarVenda(id, alterar);
        if (alterandoVenda != 1) throw new Error('Não foi possível alterar a venda');
        
        res.status(204).send();
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
});

//filtro por CPF
server.get('/venda/filtro', async (req, resp) => {
    try {
        const cpf= req.query.cpf;
        if (!cpf) throw new Error("CPF inválido");
        const snd = await filtrocpf(cpf);
        if (!snd) throw new Error("Não encontrado");
        resp.send(snd);
    } catch (err)
    {
        resp.status(404).send({
            error: err.message
        });
    }
});

// listagem
server.get('/venda', async (req, res) => {
    try {
        const listagem = await listagemTotalVendas();
        if (!listagem) throw new Error('Não encontrado');
        res.send(listagem);
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
});

//adicionar imagem
server.put('/venda/imagem', upload.single('imagem'), async (req, res) => {
    try {
        const { id, usuario } = req.query;
        if (!usuario) throw new Error('O usuário precisa estar logado');
        if (!req.file) throw new Error('Insira um arquivo');

        const imagem = req.file.path;
        const resposta = await alterarImagem(imagem, id);
        if (resposta != 1) throw new Error('A imagem não pôde ser salva');
        res.status(204).send();
    } catch (err) {
        res.status(400).send({
            erro: err.message
        })
    }
})

server.get('/venda/periodo', async (req, res) => {
    try {
        const { inicio, fim } = req.query;
        const answer = await filtroDatas(inicio, fim);

        res.status(200).send(answer);
    } catch (err) {
        res.status(400).send({
            Erro: err.message
        });
    }
}); 

//consulta
server.get('/venda/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const venda = await consultarVenda(id);
        if (!venda) throw new Error('Não encontrado');
        res.send(venda);
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
});

//deletar
server.delete('/venda/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const answer = await deletarVenda(id);
        if (answer !== 1) throw new Error('Não foi possível excluir a venda');

        res.status(204).send();
    } catch (err) {
        res.status(400).send({
            Erro: err.message
        });
    }
});

export default server;
