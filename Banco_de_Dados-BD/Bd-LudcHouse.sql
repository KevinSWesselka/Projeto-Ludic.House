create database db_ludichouse;
use db_ludichouse;

create table usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
estilo varchar(45)
)auto_increment = 10;
select * from usuario;

create table musica (
id int primary key auto_increment,
nome varchar(45),
altor varchar(45),
genero varchar(45)
)auto_increment = 20;
select * from musica;

create table curtida (
fk_musica int,
fk_usuario int,
primary key (fk_musica, fk_usuario),
foreign key (fk_usuario) references usuario(id),
foreign key (fk_musica) references musica(id)
);
select * from curtida;

insert into musica values 
(20,'Unravel Tokyo Ghoul', 'Toru Kitajima', 'Rock Alternativo'),
(21, 'Noragami Aragoto - Kyouran Hey Kids!!', 'Takuya Yamanaka', 'Rock'),
(22,'Sword Art Online CROSSING FIELD', 'Lisa-Sho Watanabe', 'Rock Alternativo');

insert into usuario values
(10, 'Braian', 'Braian@gmail.com', '12345', 'FinStyle');

-- update favorito set curtiu = '${var}' where fk_usuario = '${var_u}' and fk_musica = '${var_m}';