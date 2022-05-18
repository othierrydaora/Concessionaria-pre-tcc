create DATABASE sistemaSigmaDB;

use sistemaSigmaDB;


create table TB_CLIENTE(
       ID_CLIENTE   INT PRIMARY KEY auto_increment,
        NM_CLIENTE varchar(100),
        DS_CPF     varchar(11),
        DT_NASC    DATETIME,
        DS_EMAIL   varchar(100),
        DS_END     varchar(100),
        DS_TEL     varchar(20)

);

select * from TB_CLIENTE;