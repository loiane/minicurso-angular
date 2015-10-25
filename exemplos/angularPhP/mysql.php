<?php
 
//nome do servidor (127.0.0.1)
$server = "127.0.0.1";
 
//usuário do banco de dados
$user = "root";
 
//senha do banco de dados
$pass = "";
 
//nome da base de dados
$db = "world";
 
//executa a conexão com o banco, caso contrário mostra o erro ocorrido
$connection = mysql_connect($server,$user,$pass) or die (mysql_error());
 
//seleciona a base de dados daquela conexão, caso contrário mostra o erro ocorrido
$dbConnection = mysql_select_db($db, $connection) or die(mysql_error());
 
?>