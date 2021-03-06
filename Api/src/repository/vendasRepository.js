import { con } from "./connection.js"

// cadastrar nova venda
export async function cadastrarVenda(venda) {
    const comando = `
       INSERT INTO tb_venda (id_funcionario, nm_cliente,ds_cpf, dt_nascimento,ds_email, ds_endereco,ds_telefone ,nm_modelo, ds_placa, vl_preco, dt_compra)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) `;

    const [resposta] = await con.query(comando, [venda.usuario, venda.cliente, venda.cpf, venda.nascimento, venda.email, venda.endereco, venda.telefone, venda.modelo, venda.placa, venda.preco, venda.compra]);
    venda.id = resposta.insertId;
    return venda;
}

// Alterar imagem
export async function alterarImagem(imagem, id) {
    const comando =
        `UPDATE     tb_venda 
            SET     ds_imagem   = ?
            WHERE   id_venda    = ?`;
    
    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}

// consultar vendas
export async function listagemTotalVendas () {
    const comando = `
    SELECT 
        id_venda        id,
	    nm_cliente      cliente,
        ds_cpf          cpf,
        ds_endereco     endereco,
        ds_email        email,
        ds_telefone     telefone,
        dt_nascimento   nascimento,
        ds_placa        placa,
	    nm_modelo		modelo,
        vl_preco		preco,
        dt_compra	    compra,
        id_funcionario  funcionario,
        ds_imagem       imagem
    FROM tb_venda`;

    const [resposta] = await con.query(comando);
    return resposta;
}

// Consultar uma venda
export async function consultarVenda(id) {
    const comando = `
    SELECT 
        id_venda        id,
	    nm_cliente      cliente,
        ds_cpf          cpf,
        ds_endereco     endereco,
        ds_email        email,
        ds_telefone     telefone,
        dt_nascimento   nascimento,
        ds_placa        placa,
	    nm_modelo		modelo,
        vl_preco		preco,
        dt_compra	    compra,
        id_funcionario  funcionario,
        ds_imagem       imagem
    FROM tb_venda
    WHERE id_venda = ? `;

    const [resposta] = await con.query(comando, [id]);
    return resposta[0];
}

// alterar venda
export async function alterarVenda (id, venda) {
    const comando = `
    UPDATE tb_venda 
    SET nm_cliente    = ?,
        ds_cpf        = ?,
        ds_endereco   = ?,
        ds_email      = ?,
        ds_telefone   = ?,
        dt_nascimento = ?,
        ds_placa      = ?,
        nm_modelo	  = ?,
        vl_preco	  = ?,
        dt_compra	  = ?
    WHERE id_venda = ?`;

    const [resposta] = await con.query(comando, [venda.cliente, venda.cpf, venda.endereco, venda.email, venda.telefone, venda.nascimento, venda.placa, venda.modelo, venda.preco, venda.compra, id]);
    return resposta.affectedRows;
} 

// deletar venda
export async function deletarVenda(id) {
    const command = `
    DELETE FROM     tb_venda 
       WHERE        id_venda = ? `;
    const [answer] = await con.query(command, [id]);
    return answer.affectedRows;
}

// filtrar por cpf
export async function filtrocpf(cpf) {
    const comando = `SELECT id_venda   id,
                            nm_cliente        cliente,
                            ds_cpf            cpf,
                            ds_endereco       endereco,
                            ds_email          email,
                            ds_telefone       telefone,
                            dt_nascimento     nascimento,
                            ds_placa          placa,
                            nm_modelo	      nome,
                            vl_preco	      preco,
                            dt_compra	      compra,
                            ds_imagem         imagem
                     FROM   tb_venda
                    WHERE   ds_cpf			  like '%${cpf}%' `;
    const [resposta] = await con.query(comando);
    return resposta;
}

// filtrar por datas
export async function filtroDatas(inicio, fim) {
    const command = `SELECT id_venda          id,
                            id_funcionario    funcionario,
                            nm_cliente        cliente,
                            ds_cpf            cpf,
                            ds_endereco       endereco,
                            ds_email          email,
                            ds_telefone       telefone,
                            dt_nascimento     nascimento,
                            ds_placa          placa,
                            nm_modelo	      nome,
                            vl_preco	      preco,
                            dt_compra	      compra,
                            ds_imagem         imagem
                            FROM tb_venda
                            WHERE dt_compra BETWEEN ? and ?`;
    const [answer] = await con.query(command, [inicio, fim]);
    return answer;
}
