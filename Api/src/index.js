import "dotenv/config";
import cors from "cors";
import express from "express";
import usuarioController from './controller/usuarioController.js';
import vendasController from './controller/vendasController.js';


const server = express();
server.use(cors());
server.use(express.json());
server.use(usuarioController);
server.use(vendasController);


server.listen(process.env.PORT, () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));
