import { Router } from "express";
import { alterarVenda, cadastrarVenda, listagemTotalVendas } from "../repository/carroRepository.js";

const server = Router();

//cadastrar







// listagem


server.get('/venda', async (req, resp) => {
    try {
        const listagem = listagemTotalVendas();
        resp.send(listagem)
    } catch (error) {
        resp.status(400).send({
            error: error.message
        })
    }
})

//alterar

server.put('/venda/alterar/:id', async (req, resp) => {

    try {
        const {id} = req.params
        const alterar = req.body
        const alterandoVenda = alterarVenda(id, alterar)
        if(alterandoVenda != 1){
            throw new Error('não pode ser alterado')
        } else{
            resp.status(204).send();
        }
    } catch (error) {
        resp.status(400).send({
            error: error.message
        })
    }


} )









export default server;