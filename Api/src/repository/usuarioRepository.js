import { connection } from "./connection.js"

export async function login(email, senha) {
    const comando =
        `SELECT  id_funcionario    id,
                 nm_funcionario	   nome,
                 ds_email	       email
           FROM  tb_funcionario
          WHERE  ds_email 		   = ?
            AND  ds_senha		   = ?`;

    const read = await connection.query(comando, [email, senha]);
    return read[0];
}