import "dotenv/config"
import cors from "cors"
import express from "express"

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => console.log(`API ONLINE NA PORTA :${process.env.PORT}:`));