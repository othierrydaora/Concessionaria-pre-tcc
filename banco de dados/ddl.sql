CREATE DATABASE sistemaSigmaDB;
USE sistemaSigmaDB;

CREATE TABLE TB_Cliente (
        ID_Cliente      INT PRIMARY KEY auto_increment,
        NM_Cliente      VARCHAR(100) NOT NULL,
        DS_Cpf          VARCHAR(14) NOT NULL,
        DT_Nascimento   DATE NOT NULL,
        DS_Email        VARCHAR(100) NOT NULL,
        DS_Endereco     VARCHAR(100) NOT NULL,
        DS_Telefone     VARCHAR(14) NOT NULL
);

CREATE TABLE TB_Venda (
        ID_Venda      INT PRIMARY KEY auto_increment,
        NM_MODELO     VarChar(100) NOT NULL,
        ds_PLACA      VarChar(8) NOT NULL,
        DS_EMAIL      VarChar(100) NOT NULL,
        VL_PRECO      DECIMAL(10, 2) NOT NULL,
        DT_COMPRA     DATETIME NOT NULL,
        CONSTRAINT    FK_ClienteVenda        FOREIGN KEY (ID_Cliente)        REFERENCES TB_Cliente(ID_Cliente),
        CONSTRAINT    FK_FuncionarioVenda    FOREIGN KEY (ID_Funcionario)    REFERENCES TB_Funcionario(ID_Funcionario)
);

CREATE TABLE tb_funcionario (
        id_funcionario       INT PRIMARY KEY,
        nm_funcionario       VarChar(100) NOT NULL,
        ds_email             VarChar(100) NOT NULL,
        ds_senha             VarChar(20) NOT NULL
);

