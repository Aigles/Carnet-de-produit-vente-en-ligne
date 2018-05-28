<?php

	if(isset($_GET['p']))
	{
		//si notre variable est defini on la met dans une autre
		$p = $_GET['p'];
	}
	else
	{
		//dans le cas contraire on initialise la page d'aceuille par defaut
		$p = 'home';
	}


	//ob_start pour executer la pages comme dans la variable
	ob_start();

	//un switch pour tout controle dans notre index.php
	switch ($p)
	{
		case 'log':
			# code...
			require('login.php');
			break;

		case 'home':
			# code...
			require('home.php');
			break;

		case 'panier':
			# code...
			require('cart.php');
			break;

		case 'inscription':
			require('inscription.php');
			break;

		case 'commande':
			require('commande.php');
			break;

		case 'detail':
			require('product_details.php');
			break;

	default:
			# code...
			require('404.php');
			break;
	}


	//ob_clean pour terminer le processus dans la variable
	$content = ob_get_clean();

	//defini le template pour executer la page courrante
	require('template.php');