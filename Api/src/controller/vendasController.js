import { Router } from "express";
import { alterarVenda, cadastrarVenda, listagemTotalVendas } from "../repository/vendasRepository.js";


const server = Router();

//cadastrar
server.post('/venda', async (req, resp) => {
    try {
        const adicionarVenda = req.body;
        if (!adicionarVenda.funcionario) throw new Error('O id funcionário é obrigatório!');
        else if (!adicionarVenda.cliente) throw new Error('O nome do cliente é obrigatório!');
        else if (!adicionarVenda.cpf) throw new Error('O CPF é obrigatorio!');
        else if (!adicionarVenda.nascimento) throw new Error('A data de nascimento é obrigatória!');
        else if (!adicionarVenda.email) throw new Error('O email é obrigatório!');
        else if (!adicionarVenda.endereco) throw new Error('O endereço é obrigatório!');
        else if (!adicionarVenda.telefone) throw new Error('O telefone é obrigatório!');
        else if (!adicionarVenda.modelo) throw new Error('O modelo é obrigatório!');
        else if (!adicionarVenda.placa) throw new Error('A placa é obrigatória!');
        else if (!adicionarVenda.preco) throw new Error('O preco é obrigatório!');
        else if (!adicionarVenda.data) throw new Error('A data da compra é obrigatória!');
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
server.post('/venda/filtro', async (req, resp) => {
    try {
        const filtro = req.body;
        const snd = await filtrocpf(filtro);
        if (!snd || !filtro) throw new Error("O item não existe em nosso banco de dados");
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