create database db_produto;

use db_produto;

create table fornecedor(
	id_funcionario int auto_increment primary key,
    nome varchar(150) not null,
    cnpj char(14) unique
);

create table produto (
	id_produto int auto_increment primary key,
    descricao text null,
    preco decimal(10, 2) not null,
    peso decimal(10, 2) not null,
    fk_id_fornecedor int null,
    foreign key(fk_id_fornecedor) references fornecedor(id_fornecedor),
    
    CONSTRAINT fk_produto_fornecedor
		foreign key (fk_id_fornecedor)
        references fornecedor (id_fornecedor)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);