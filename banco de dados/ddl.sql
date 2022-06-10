CREATE DATABASE sistemaSigmaDB;

CREATE TABLE tb_funcionario (
        id_funcionario  INT PRIMARY KEY auto_increment,
        nm_funcionario  VARCHAR(100) NOT NULL,
        ds_email        VARCHAR(100) NOT NULL,
        ds_senha        VARCHAR(20) NOT NULL
);

CREATE TABLE tb_venda (
        id_venda      INT PRIMARY KEY auto_increment,
        id_funcionario  INT,
		nm_cliente      VARCHAR(100),
        ds_cpf         VARCHAR(14) ,
        dt_nascimento   DATE,
        ds_email        VARCHAR(100) ,
        ds_endereco     VARCHAR(100) ,
        ds_telefone     VARCHAR(14) ,
        nm_modelo     VARCHAR(100) ,
        ds_placa      VARCHAR(8) ,
        vl_preco      DECIMAL(10, 2) ,
        dt_compra     DATETIME ,
		FOREIGN KEY (id_funcionario)    REFERENCES tb_funcionario(id_funcionario)

);

