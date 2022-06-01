USE sistemaSigmaDB;



-- carga inicial ADM
INSERT INTO tb_funcionario (nm_funcionario, ds_email, ds_senha)
     VALUES ('admin', 'sigma@contato.com.br', '1234');




--> efetuar login
select id_funcionario 		id,
       nm_funcionario		nome,
       ds_email			    email
  from tb_funcionario
 where ds_email 		= 'sigma@contato.com.br'
   and ds_senha			= '1234';




--> cadastrar nova venda

INSERT INTO tb_venda (id_funcionario, nm_cliente,ds_cpf, dt_nascimento,ds_email, ds_endereco,ds_telefone ,nm_modelo, ds_placa, vl_preco, dt_compra)
     VALUES (1, 'pedro', '915.302.009-01','2000-02-04', 'emial@gmail.com','av brasil','11900206111','civic si', 'abc-1234', '70.000', '2012-02-11');







--> alterar venda

UPDATE tb_venda 
   SET nm_cliente   =   'cholas',
      ds_cpf        =  '515.302.009-01',
      ds_endereco   =  'av ibira',
      ds_email      = 'nich@gmail.com',
      ds_telefone   = '11900206111',
      dt_nascimento = '2000-02-04',
      ds_placa      = 'abc-1234',
	  nm_modelo		= 'bmw x6',
      vl_preco		= '70.000',
      dt_compra	    =  '2022-06-01'
       WHERE id_funcionario = 1;




--> consultar todos as vendas  

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
       
  FROM tb_venda;






-->  consultar vendas por cpf

SELECT id_funcionario			cpf,
	  nm_cliente        cliente,
      ds_cpf            cpf,
      ds_endereco       endereco,
      ds_email          email,
      ds_telefone       telefone,
      dt_nascimento     nascimento,
      ds_placa          placa,
	  nm_modelo			nome,
       vl_preco		    preco,
       dt_compra	    compra
  FROM tb_venda
 WHERE ds_cpf			like '%%';

--> remover venda
DELETE FROM tb_venda 
      WHERE id_funcionario = 1;
