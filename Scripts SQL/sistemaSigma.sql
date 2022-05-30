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

CREATE TABLE TB_Funcionario (
        ID_Funcionario  INT PRIMARY KEY,
        NM_Funcionario  VarChar(100) NOT NULL,
        DS_Email        VarChar(100) NOT NULL,
        NR_Senha        VarChar(20) NOT NULL,
        DS_Cpf          VARCHAR(14) NOT NULL
);

CREATE TABLE TB_Venda (
        ID_Venda        INT PRIMARY KEY auto_increment,
        ID_Cliente      int,
        ID_Funcionario  int,
        NM_Modelo       VarChar(100) NOT NULL,
        NR_Placa        VarChar(100) NOT NULL,
        DS_Email        VarChar(100) NOT NULL,
        VL_Preco        DECIMAL(10, 2) NOT NULL,
        DT_Compra       DATETIME NOT NULL,
        FOREIGN KEY (ID_Cliente)        REFERENCES TB_Cliente(ID_Cliente),
        FOREIGN KEY (ID_Funcionario)    REFERENCES TB_Funcionario(ID_Funcionario)
);
