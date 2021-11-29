create database tb_LudicHouse;
use tb_LudicHouse;

create table tb_usuario (
id_usuario int primary key auto_increment,
nome_usuario varchar(45),
email_usuario varchar(45),
senha_usuario varchar(45),
estilo_musical varchar(45)
)auto_increment = 10;
select * from tb_usuario;

create table tb_musica (
id_usuario int primary key auto_increment,
nome_musica varchar(45),
altor varchar(45),
genero_musica varchar(45)
)auto_increment = 20;
select * from tb_musica;

create table tb_curtida (
id_curtida int,
fk_musica int,
fk_usuario int,
primary key (id_curtida, fk_musica, fk_usuario),
foreign key (fk_usuario) references tb_usuario(id_usuario),
foreign key (fk_musica) references tb_musica(id_usuario)
);
select * from tb_curtida;