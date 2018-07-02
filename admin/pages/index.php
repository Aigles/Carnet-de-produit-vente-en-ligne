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
			require('loging.php');
			break;

		case 'home':
			# code...
			require('home.php');
			break;

		case 'creerVetement':
			# code...
			require('vetement/create.php');
			break;

		case 'editerVetement':
			require('vetement/edit.php');
			break;
		
		case 'detailsVetement':
			require('vetement/details.php');
			break;

		case 'listerVetement':
			require('vetement/liste.php');
			break;

		case 'creerCommande':
			# code...
			require('commande/create.php');
			break;

		case 'editerCommande':
			require('commande/edit.php');
			break;

		case 'listerCommande':
			require('commande/liste.php');
			break;

		case 'creerCategorie':
			# code...
			require('categorie/create.php');
			break;

		case 'editerCategorie':
			require('categorie/edit.php');
			break;

		case 'listerCategorie':
			require('categorie/liste.php');
			break;

		case 'creerUser':
			# code...
			require('user/create.php');
			break;

		case 'editerUser':
			require('user/edit.php');
			break;

		case 'listerUser':
			require('user/liste.php');
			break;
		
		case 'creerPaiement':
			# code...
			require('paiement/create.php');
			break;
		case 'editerPaiement':
			require('paiement/edit.php');
			break;

		case 'listerPaiement':
			require('paiement/liste.php');
			break;

		case 'creerLivraison':
			# code...
			require('livraison/create.php');
			break;

		case 'editerLivraison':
			require('livraison/edit.php');
			break;

		case 'listerLivraison':
			require('livraison/liste.php');
			break;

		case 'creerPermission':
			# code...
			require('permission/create.php');
			break;

		case 'editerPermission':
			require('permission/edit.php');
			break;

		case 'listerPermission':
			require('permission/liste.php');
			break;

		case 'creerRole':
			# code...
			require('role/create.php');
			break;

		case 'editerRole':
			require('role/edit.php');
			break;

		case 'listerRole':
			require('role/liste.php');
			break;
        case 'kendy':
			require('coeur/coeur.php');
			break;
		case 'tabie':
			require('coeur/love.php');
			break;
		
			case 'creerPersonnel':
			# code...
			require('personnel/create.php');
			break;

		case 'editerPersonnel':
			require('personnel/edit.php');
			break;

		case 'listerPersonnel':
			require('personnel/liste.php');
			break;

			case 'creerClient':
			# code...
			require('client/create.php');
			break;

		case 'editerClient':
			require('client/edit.php');
			break;

		case 'listerClient'   :
			require('client/liste.php');
			break;

		case 'historic'   :
			require('historic/liste.php');
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