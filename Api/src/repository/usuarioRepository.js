import { connection } from "./connection.js"

export async function logar(email, passwd) {
    const comando = `
        SELECT  id_funcionario  id,
                nm_funcionario  nome,
                ds_email        email
        FROM    tb_funcionario
        WHERE   ds_email 		   = ?
        AND     ds_senha		   = ? `;

    const read = await connection.query(comando, [email, passwd]);
    return read[0];
}
