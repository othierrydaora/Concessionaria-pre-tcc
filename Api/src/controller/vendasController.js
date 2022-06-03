import { Router } from "express";
import { alterarVenda, cadastrarVenda, listagemTotalVendas } from "../repository/vendasRepository.js";

const server = Router();

//cadastrar

server.post('/venda', async (req, resp) => {
    try {
        const adicionarVenda = req.body;

        if (!adicionarVenda.funcionario) throw new Error('O funcionário é obrigatorio');
        else if (!adicionarVenda.cliente) throw new Error('O cliente é obrigatorio');
        else if (!adicionarVenda.cpf) throw new Error('O cpf é obrigatorio');
        else if (!adicionarVenda.nascimento) throw new Error('A data de nascimento é obrigatoria');
        else if (!adicionarVenda.email) throw new Error('O email é obrigatorio');
        else if (!adicionarVenda.endereco) throw new Error('O endereco é obrigatorio');
        else if (!adicionarVenda.telefone) throw new Error('O telefone é obrigatorio');
        else if (!adicionarVenda.modelo) throw new Error('O modelo é obrigatorio');
        else if (!adicionarVenda.placa) throw new Error('A placa é obrigatoria');
        else if (!adicionarVenda.preco) throw new Error('O preco é obrigatorio');
        else if (!adicionarVenda.compra) throw new Error('A compra é obrigatoria');

        const vendaInserida = await cadastrarVenda(adicionarVenda);
        resp.send(vendaInserida);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});


// listagem
server.get('/vendas', async (req, res) => {
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
        const alterandoVenda = alterarVenda(id, alterar);
        
        if (alterandoVenda != 1) throw new Error('Não foi possível alterar a venda');
        
        res.status(204).send();
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
});

export default server;
