import { con } from "./connection.js"



// --> cadastrar nova venda

export async function cadastrarVenda(venda) {
    const comando = `
       INSERT INTO tb_venda (id_funcionario, nm_cliente,ds_cpf, dt_nascimento,ds_email, ds_endereco,ds_telefone ,nm_modelo, ds_placa, vl_preco, dt_compra)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) `;

    const [resposta] = await con.query(comando, [venda.funcionario, venda.cliente, venda.cpf, venda.nascimento, venda.email, venda.endereco, venda.telefone, venda.modelo, venda.placa, venda.preco, venda.compra]);
    venda.id = resposta.insertId;
    return venda;
}


// -> consultar vendas

export async function listagemTotalVendas () {
    const comando = `
    SELECT id_funcionario	id,
	  nm_cliente        cliente,
      ds_cpf            cpf,
      ds_endereco       endereco,
      ds_email          email,
      ds_telefone       telefone,
      dt_nascimento     nascimento,
      ds_placa          placa,
	  nm_modelo			modelo,
      vl_preco		    preco,
      dt_compra	        compra
      FROM tb_venda`

    const [resposta] = await con.query(comando);
    return resposta;
}


// -> parte de alterar venda

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
    WHERE id_funcionario = ?`

    const [resposta] = await con.query(comando, [venda.cliente, venda.cpf, venda.endereco, venda.email, venda.telefone, venda.nascimento, venda.placa, venda.modelo, venda.preco, venda.compra, id]);
    return resposta.affectedRows;
}

// -> parte de filtrar por cpf

export async function filtrocpf(filtro) {
    const comando = `SELECT id_funcionario    id,
                            nm_cliente        cliente,
                            ds_cpf            cpf,
                            ds_endereco       endereco,
                            ds_email          email,
                            ds_telefone       telefone,
                            dt_nascimento     nascimento,
                            ds_placa          placa,
                            nm_modelo	     nome,
                            vl_preco	     preco,
                            dt_compra	     compra
                     FROM   tb_venda
                    WHERE   ds_cpf			= ?`;
    const [resposta] = await con.query(comando, [filtro.cpf]);
    return resposta;
}
