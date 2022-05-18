CREATE DATABASE sistemaSigmaDB;
USE sistemaSigmaDB;

CREATE TABLE TB_Cliente (
        ID_Cliente      INT PRIMARY KEY auto_increment,
        NM_Cliente      VARCHAR(100),
        DS_Cpf          VARCHAR(11),
        DT_Nascimento   DATE,
        DS_Email        VARCHAR(100),
        DS_Endereco     VARCHAR(100),
        DS_Telefone     VARCHAR(20) 
);
