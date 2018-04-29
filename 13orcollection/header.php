
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>13 Or Collection</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
<!--Less styles -->
   <!-- Other Less css file //different less files has different color scheam
	<link rel="stylesheet/less" type="text/css" href="themes/less/simplex.less">
	<link rel="stylesheet/less" type="text/css" href="themes/less/classified.less">
	<link rel="stylesheet/less" type="text/css" href="themes/less/amelia.less">  MOVE DOWN TO activate
	-->
	<!--<link rel="stylesheet/less" type="text/css" href="themes/less/bootshop.less">
	<script src="themes/js/less.js" type="text/javascript"></script> -->
	
<!-- Bootstrap style --> 
    <link id="callCss" rel="stylesheet" href="themes/bootshop/bootstrap.min.css" media="screen"/>
    <link href="themes/css/base.css" rel="stylesheet" media="screen"/>
<!-- Bootstrap style responsive -->	
	<link href="themes/css/bootstrap-responsive.min.css" rel="stylesheet"/>
	<link href="themes/css/font-awesome.css" rel="stylesheet" type="text/css">
<!-- Google-code-prettify -->	
	<link href="themes/js/google-code-prettify/prettify.css" rel="stylesheet"/>
<!-- fav and touch icons -->
    <link rel="shortcut icon" href="themes/images/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="themes/images/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="themes/images/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="themes/imagcarouselBlkes/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-72-precomposedple-touch-icon-precomposed" href="themes/images/ico/apple-touch-icon-57-precomposed.png">
	<style type="text/css" id="enject"></style>
  </head>

  <!-- Navbar ================================================== -->
<div id="logoArea" class="navbar">
<a id="smallScreen" data-target="#topMenu" data-toggle="collapse" class="btn btn-navbar">
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
</a>
  <div class="navbar-inner">
    <a class="brand" href="index.php">13 Or Collection<!-- <img src="themes/images/" alt=""/> --></a>
	<form class="form-inline navbar-search" method="post" action="index.php" >
		<input id="srchFld" class="srchTxt" type="text" />
	  	<select class="srchTxt">
			<option>TOUT</option>
			<option>ADOLESCENTE</option>
			<option>ENFANT</option>
			<option>ADULTE</option>
		</select>  
	  <button type="submit" id="submitButton" class="btn btn-warning">Recherche</button>
	</form>
    <ul id="topMenu" class="nav pull-right">
	 <li class=""><a href="index.php">Accueil</a></li>
	 <li class=""><a href="login.php">Inscrire</a></li>
	 <li><a href="cart.php"><span class="badge">0</span></span><span class="icon-shopping-cart"></span>Mon Panier</a></li>

	 <!-- <li class=""><a href="special_offer.html">Offres</a></li>
	 <li class=""><a href="normal.html">Livraison</a></li>
	 <li class=""><a href="contact.html">Contact</a></li> -->
	 <li class="">
	 <a href="#login" role="button" data-toggle="modal" style="padding-right:0"><span class="badge badge-warning">Connecter</span></a>
	<div id="login" class="modal hide fade in" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="false" >
		  <div class="modal-header">
			<!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> -->
			<div>
				<?php 
					if($_POST){

						//form validation
						if (empty($_POST['email']) || empty($_POST['password'])) {
						   $errors[] = 'You must provide Email and Password';
						}

						//validate email
						if (!filter_var($email,FILTER_VALIDATE_EMAIL)) {
							$errors[] = 'vous devez entrez un email valide';
						}

						//password is more than 6 characters
						if(strlen($password) < 6){
							$errors[] = 'password doit être supérieur à 6 caractères';
						}

						//check if the email exist
						$query = $db->query("SELECT * FROM users WHERE email = '$email'");
							$user = mysqli_fetch_assoc($query);
							$userCount = mysqli_num_rows($query);
							//echo $userCount;
							if ($userCount < 1) {
							  $errors[] = ' Cet email n\'existe pas dans notre base de donnée ';
							}

						//Check for errors
						if(!empty($errors)){
							echo display_errors($errors);
						}
					}
				 ?>
			</div>
			<h3 class="text-center textcolors">Connection</h3>
		  </div>
		  <div class="modal-body">
			<form action="index.php" method="post" class="form-horizontal loginFrm">
			  <div class="control-group">
			  	<label for="email">Email:</label>								
				<input type="email" name="email" id="inputEmail" placeholder="Email" value="<?=$email;?>">
			  </div>
			  <div class="control-group">
			  	<label for="password">Password:</label>	
				<input type="password" name="password" id="inputPassword" placeholder="Mot de passe" value="<?=$password;?>">
			  </div>
			  <div class="control-group">
				<label class="checkbox">
				<input type="checkbox"> Me rappeler
				</label>
			  </div>	
			<input type="submit" class="btn btn-warning " value="Connecter">
			<button class="btn btn-warning" data-dismiss="modal" aria-hidden="true">Fermer</button>
			</form>	
		  </div>
	</div>
	</li>
    </ul>
  </div>
</div>