# *Análise de Endpoints*

<br/>

## (1) Post    /login 
### Body
```
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
```
<hr/>

## (2) Post    /venda      --cadastro
### Body
```
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
```

<hr/>

## (3) Put     /venda
### Body
```
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
```
<hr/>

## (4) Delete  /venda/:id 
```
response (204)
```
<hr/>

## (5) Get     /venda      --listagem
```
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
```

<hr/>

## (6) /GET      /venda/filtro/:cpf 
```
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
```
