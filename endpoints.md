### (1)/POST /LOGIN 

#### REQUEST BODY
{ 
"email": " ",
 "senha": " "
}

RESPONSE
{ 
"id": 0, 
"email": " ",
 "nome": " "
}

////////////////////////////////////////////

#### (2) /POST       /venda          --cadastro

#### request body
{
    "nome": "",
    "cpf": 0.0,
    "endereco": "",
    "email": "",
    "telefone": "",
    "nascimento": "",
    "placa": "",
    "modelo": "",
    "preco": "",
    "compra": "",
    "usuario": ""
}

response (200)
{
    "id": "",
    "nome": "",
    "cpf": 0.0,
    "endereco": "",
    "email": "",
    "telefone": "",
    "nascimento": "",
    "placa": "",
    "modelo": "",
    "preco": "",
    "compra": ""

}

////////////////////////////////////////////

### (3) /PUT        /venda

request body
{
    "id": "",
    "nome": "",
    "cpf": 0.0,
    "endereco": "",
    "email": "",
    "telefone": "",
    "nascimento": "",
    "placa": "",
    "modelo": "",
    "preco": "",
    "compra": ""
}

response (204)
-- sem conteúdo


////////////////////////////////////////////


### (4) /DELETE     /venda/:id 

response (204)


////////////////////////////////////////////



### (5) /GET        /vendas  ---listagem

response (200)
[
    {
        "id": "",
        "nome": "",
        "cpf": 0.0,
        "endereco": "",
        "email": "",
        "telefone": "",
        "nascimento": "",
        "placa": "",
        "modelo": "",
        "preco": "",
        "compra": ""
    }
]



////////////////////////////////////////////


### (6) /GET      /venda/filtro/:cpf 

response (200)
{
        "id": "",
        "nome": "",
        "cpf": 0.0,
        "endereco": "",
        "email": "",
        "telefone": "",
        "nascimento": "",
        "placa": "",
        "modelo": "",
        "preco": "",
        "compra": ""
}