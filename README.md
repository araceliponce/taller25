# ...



abrir xampp (iniciar apache y mysql)

(en caso de reinstalar copiar en otro lugar los proyectos que tengas en xampp)

apache:
- start
- admin (se abre el dashboard de - apache)
    - ir a phpMyAdmin
    - en tab 'SQL' pegamos la base de datos y click en 'continuar' (comentarios inline -- abc, block comments: /* abc */). procedure abc_De(in _id int, _nom varchar(50)) (lleva in porque va a hacer input de datos, va a insertar datos, luego los demas parametros llevan su tipo tmb, como int o varchar con un limite de caracteres)

mysql:
- start




```
drop database if EXISTS certus;
create database certus;
use certus;
create table datos(
Id int AUTO_INCREMENT Primary key,
Nombre varchar(50) not null,
Apellido varchar(50) not null,
Correo varchar(50) not null
);

/*
METODOS CRUD POR CADA TABLA
Create -> insert
Read -> select .... where
Update -> update .... where
Delete -> delete .... where
*/
-- Crear nuevo registro
create procedure sp_Nuevo(in _id int, _nom varchar(50), _ape varchar(50), _correo varchar(50))
insert datos values (_id, _nom, _ape, _correo);
-- Buscar un registro por el Id
create procedure sp_Buscar(in _id int)
select * from datos where Id = _id;
-- Actualziar un registro segun el Id
create procedure sp_Actualizar(in _id int, _nom varchar(50), _ape varchar(50), _correo varchar(50))
update datos set Nombre = _nom, Apellido = _ape, Correo = _correo
where Id = _id;
-- Eliminar registro
create procedure sp_Eliminar(in _id int)
delete from datos where Id = _id;
-- Vista de todos los registros
create procedure sp_Vista()
select * from datos;

call sp_Nuevo('', 'Juan', 'Perez', 'jperez@certus.pe');
call sp_Nuevo('', 'Anita', 'Garcia', 'agarcia@certus.pe');

```


luego construir la api:

en xammp/htdocs
- crear carpeta j02apirest
- abrir con vscode
- crear .htaccess, conexion.php, servicio.php, datos.php (la tabla) e index.php (es la interfaz)

-editar .htaccess, conexion, data, servicio e index


<http://localhost/j02apirest/vista>