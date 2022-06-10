import { con } from "./connection.js"

//logar administrador
export async function logar(email, passwd) {
    const comando = `
        SELECT  id_funcionario  id,
                nm_funcionario  nome,
                ds_email        email
        FROM    tb_funcionario
        WHERE   ds_email 		   = ?
        AND     ds_senha		   = ? `;

    const [resposta] = await con.query(comando, [email, passwd]);
    return resposta;
}
