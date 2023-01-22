<?php
	//Define los parametros de conexion a la gdb postgis
	define("PG_DB" , "geomarketing");
	define("PG_HOST" , "dbgsig3.c7hvyoepcyvf.us-east-1.rds.amazonaws.com");
	define("PG_USER" , "postgres");
	define("PG_PSWD" , "87654321");
	define("PG_PORT" , "5432");

	$dbcon = pg_connect("dbname=".PG_DB." host=".PG_HOST." user=".PG_USER ." password=".PG_PSWD." port=".PG_PORT."");

?>