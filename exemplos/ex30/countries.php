<?php
	//chama o arquivo de conexão com o bd
	include("mysql.php");

	$queryString = "SELECT Code, Name, Population, GNP, Code2 FROM Country";

	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$countries = array();
	while($country = mysql_fetch_assoc($query)) {
		$countryAux = array();
		$countryAux["code"] = $country["Code"];
		$countryAux["name"] = $country["Name"];
		$countryAux["population"] = $country["Population"];
		$countryAux["gnp"] = $country["GNP"];
		$countryAux["code2"] = $country["Code2"];
        $countries[] = $countryAux;
	}

	//encoda para formato JSON
	echo json_encode($countries);