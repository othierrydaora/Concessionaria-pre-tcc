CREATE DATABASE sistemaSigmaDB;
USE sistemaSigmaDB;

drop table tb_funcionario;

CREATE TABLE tb_funcionario (
        id_funcionario  INT PRIMARY KEY auto_increment,
        nm_funcionario         VarChar(100) NOT NULL,
        ds_email        VarChar(100) NOT NULL,
        ds_senha        VarChar(20) NOT NULL
);

CREATE TABLE TB_Venda (
        id_venda      INT PRIMARY KEY auto_increment,
        id_funcionario  int,
		nm_cliente      VARCHAR(100),
        ds_cpf         VARCHAR(14) ,
        dt_nascimento   DATE,
        ds_email        VARCHAR(100) ,
        ds_endereco     VARCHAR(100) ,
        ds_telefone     VARCHAR(14) ,
        nm_modelo     VarChar(100) ,
        ds_PLACA      VarChar(8) ,
        vl_preco      DECIMAL(10, 2) ,
        dt_compra     DATETIME ,
		FOREIGN KEY (id_funcionario)    REFERENCES tb_funcionario(id_funcionario)
);
