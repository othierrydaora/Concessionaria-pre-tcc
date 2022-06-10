import { Router } from 'express';
import { logar } from '../repository/usuarioRepository.js';

const server = Router();

//login
server.post('/login', async (req, res) => {
    try {
        const { email, senha } = req.body;
        const answer = await logar(email, senha);
        if (!answer) throw new Error('Não autorizado');

        res.status(200).send(answer);
    } catch (err) {
        res.status(401).send({
            Erro: err.message
        });
    }
});

export default server;
