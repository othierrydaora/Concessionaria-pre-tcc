import { Router } from "express";
import { alterarVenda, cadastrarVenda, deletar, filtrocpf, listagemTotalVendas } from "../repository/vendasRepository.js";

const server = Router();

//cadastrar

server.post('/cadastrar/venda', async (req, resp) => {
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

server.get('/vendas', async (req, resp) => {
    try {
        const listagem = await listagemTotalVendas();
        resp.send(listagem);
    } catch (error) {
        resp.status(400).send({
            error: error.message
        });
    }
});

//alterar

server.put('/venda/alterar/:id', async (req, resp) => {

    try {
        const { id } = req.params;
        const alterar = req.body;
        const alterandoVenda = await alterarVenda(id, alterar);
        
        if (alterandoVenda != 1) throw new Error('não pode ser alterado');
        
        resp.status(204).send();
    } catch (error) {
        resp.status(400).send({
            error: error.message
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