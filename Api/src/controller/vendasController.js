import { Router } from "express";
import { alterarVenda, cadastrarVenda, listagemTotalVendas, filtrocpf } from "../repository/vendasRepository.js";


const server = Router();

//cadastrar
server.post('/venda', async (req, resp) => {
    try {
        const adicionarVenda = req.body;
        if (!adicionarVenda.cliente) throw new Error('O nome do cliente é obrigatório!');
        if (!adicionarVenda.cpf) throw new Error('O CPF é obrigatorio!');
        if (!adicionarVenda.nascimento) throw new Error('A data de nascimento é obrigatória!');
        if (!adicionarVenda.email) throw new Error('O email é obrigatório!');
        if (!adicionarVenda.endereco) throw new Error('O endereço é obrigatório!');
        if (!adicionarVenda.telefone) throw new Error('O telefone é obrigatório!');
        if (!adicionarVenda.modelo) throw new Error('O modelo é obrigatório!');
        if (!adicionarVenda.placa) throw new Error('A placa é obrigatória!');
        if (!adicionarVenda.preco) throw new Error('O preco é obrigatório!');
        if (!adicionarVenda.compra) throw new Error('A data da compra é obrigatória!');
        if  (!adicionarVenda.usuario) throw new Error('Usuario Não Logado!');

        const vendaInserida = await cadastrarVenda(adicionarVenda);
        resp.send(vendaInserida);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
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

//alterar
server.put('/venda/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const alterar = req.body;
        const alterandoVenda = await alterarVenda(id, alterar);
        
        if (alterandoVenda != 1) throw new Error('Não foi possível alterar a venda');
        
        res.status(204).send();
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
});

//deletar
server.delete('/venda/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { idFuncionario } = req.body;
        const answer = await deletarVenda(idFuncionario, id);
        if (answer != 1) throw new Error('Não foi possível excluir a venda');

        res.status(204).send();
    } catch (err) {
        res.status(400).send({
            Erro: err.message
        });
    }
});

//filtro por CPF
server.post('/venda', async (req, resp) => {
    try {
        const { cpf } = Number(req.query);
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

//Deletar um campo
server.delete('/vendas/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const snd = await deletar(id);
        if (snd != 1) throw new Error('Não foi possível deletar o campo');
        else {
            resp.status(204).send();
        }
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
}); 

export default server;