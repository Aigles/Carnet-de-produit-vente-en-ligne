<?php


	if(isset($_GET['p']))
	{
		//si notre variable est defini on la met dans une autre
		$p = $_GET['p'];
	}
	else
	{
		//dans le cas contraire on initialise la page d'aceuille par defaut
		$p = '';
	}


	//ob_start pour executer la pages comme dans la variable
	ob_start();

	//un switch pour tout controle dans notre index.php
	switch ($p)
	{
		case 'log':
			# code...
			require('loging.php');
			break;

		case 'creerVetement':
			# code...
			require('vetement/create.php');
			break;

		case 'editerVetement':
			require('vetement/edit.php');
			break;

		case 'listerVetement':
			require('vetement/liste.php');
			break;
		case 'creercommande':
			# code...
			require('commande/crate.php');
			break;

		case 'editercommande':
			require('commande/edit.php');
			break;

		case 'listercommande':
			require('commande/liste.php');
			break;
		

	default:
			# code...
			//require('404.php');
			break;
	}


	//ob_clean pour terminer le processus dans la variable
	$content = ob_get_clean();

	//defini le template pour executer la page courrante
	require('template.php');