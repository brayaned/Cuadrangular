create database if not exists liga;
use liga;

create table equipo(
	id int not null primary key auto_increment,
    nombre varchar(50) ,
	partidos_jugados int  not null,
	partidos_ganados int  not null,
    partidos_empatados int  not null,
    partidos_perdidos int  not null,
    goles_favor int  not null,
    goles_contra int  not null, 
    puntos int  not null
);

/* Ejemplo de insertar un equipo*/
insert into equipo (nombre, partidos_jugados, partidos_ganados, partidos_empatados, partidos_perdidos, goles_favor, goles_contra, puntos) values ('Millonarios', 0, 0, 0, 0, 0, 0, 0 );

/*drop table equipo;
select * from equipo;*/
