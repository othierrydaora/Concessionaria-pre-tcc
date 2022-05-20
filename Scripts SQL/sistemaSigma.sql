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



CREATE TABLE TB_Venda (

        ID_Venda      INT PRIMARY KEY auto_increment,
        NM_MODELO     VarChar(100),
        NR_PLACA      VarChar(100),
        DS_EMAIL      VarChar(100),
        VL_PRECO      DECIMAL(10, 2),
        DT_COMPRA     DATETIME,
        ID_CLIENTE    VARCHAR(100)

);

CREATE TABLE TB_Fyncionario (
        
        ID_FUNCIONARIO    INT PRIMARY KEY,
        NM_NOME           VarChar(100),
        DS_EMAIL          VarChar(100),
        NR_SENHA          VarChar(20),
        ID_CPF            
        ID_VALOR

)
