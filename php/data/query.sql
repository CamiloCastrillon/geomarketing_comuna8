--tranforma el src de una entidad
alter table barrios alter column geom type geometry(multipolygon, 4326) using st_transform (geom, 4326);

--borra la funcion geocompetencia
drop function buffers(id_cu int, id_sm double precision);

--funcion para obtener el radio del buffer
create function buffers(id_cu int, id_sm double precision) returns geometry as
$$
declare 
	corredores_urbanos geometry;
	super_mercados geometry;
	buffers geometry;
begin
	corredores_urbanos := st_transform((select st_buffer( st_transform((select geom from corredores_urbanos where gid=id_cu),3115),((select area from corredores_urbanos where gid=id_cu)*(0.03125)))),4326);
	super_mercados := st_transform((select st_buffer( st_transform((select geom from supermercados where id=id_sm),3115),((select area from supermercados where id=id_sm)*(0.03125)))),4326);
	buffers := st_union(corredores_urbanos, super_mercados);
	return buffers;
end;
$$
language 'plpgsql';

--drop view geocompetencia
drop view geocompetencia;

--llama la funcion y crea la vista de geocompetencia
create view geocompetencia as
select (select st_union(buffers(cu.gid, sm.id)) from corredores_urbanos as cu, supermercados as sm) as geom;
					   
--selecciona view de geocompetencia
select * from geocompetencia;

----------------------------------------
--drop view zonas
drop view zonas;

--crea la vista que calcula las zonas potenciales para nuevos mercados
create view zonas as
select st_difference((select st_union(geom) from manzanas),(select geom from geocompetencia)) as geom;

select * from zonas