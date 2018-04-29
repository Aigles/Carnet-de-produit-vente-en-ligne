<?php 
//require_once $_SERVER['DOCUMENT_ROOT'].'/13orcollection/core/init.php';
require_once 'core/init.php'; 
    $nom =((isset($_POST['nom']))?sanitize($_POST['nom']):'');
    $nom =trim($nom);
    $prenom =((isset($_POST['prenom']))?sanitize($_POST['prenom']):'');
    $prenom =trim($prenom);
    $email =((isset($_POST['email']))?sanitize($_POST['email']):'');
    $email =trim($email);
    $password =((isset($_POST['password']))?sanitize($_POST['password']):'');
    $password =trim($password);
    $password1 =((isset($_POST['password1']))?sanitize($_POST['password1']):'');
    $password1 =trim($password1);
    $password2 =((isset($_POST['password2']))?sanitize($_POST['password2']):'');
    $password2 =trim($password2);
    $errors = array(); 

    ?>

    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Inscription | Connection</title>
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
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="themes/images/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="themes/images/ico/apple-touch-icon-57-precomposed.png">
	<style type="text/css" id="enject"></style>
  </head>
<body>
<!-- =========== Header =============================================-->
<div id="header">
<?php 
	include ('header.php'); 
?>

</div>
<!--=========== Header End=========================================== -->
<div id="mainBody">
	<div class="container">
	<div class="row">
<!-- Sidebar ================================================== -->

<!-- Sidebar End ================================================== -->
	<div class="span12">
    <ul class="breadcrumb">
		<li><a href="index.php">Acceuil</a> <span class="divider">/</span></li>
		<li class="active">Connection</li>
    </ul>
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
						//password is more than 6 characters
						if(isset($_POST['password1']) != isset($_POST['password2'])){
							$errors[] = 'Mot de passe différents!!!';
						}
					}
	?>
	<h3><p class="textcolors text-center"> Devenir Membre</p></h3>	
	<hr class="soft"/>
	
	<div class="container" style=" margin-left: 80px;">
	<div class="row" >
		<div class="span5">
			<div class="well">
			<h5><p class="textcolors text-center">CREATION DE COMPTE</p></h5><hr><br/>
			<form class="form">
				<?php 
					if(!empty($errors)){
								echo display_errors($errors);
							} 
				?>
			  <div class="control-group">
				<label class="control-label" for="inputNom">Nom</label>
				<div class="controls">
				  <input required class="span3"  type="text" name="nom" id="inputNom" placeholder="Nom" value="<?=$nom;?>">
				</div>
			  </div>
			  <div class="control-group">
				<label class="control-label" for="inputPrenom">Prénom</label>
				<div class="controls">
				  <input required class="span3"  type="text" name="prenom" id="inputPrenom" placeholder="Prénom" value="<?=$prenom;?>">
				</div>
			  </div>
			  <div class="control-group">
				<label class="control-label" for="inputEmail1">Email</label>
				<div class="controls">
				  <input required class="span3"  type="email" name="email" id="inputEmail1" placeholder="Email" value="<?=$email;?>">
				</div>
			  </div>
			  <div class="control-group">
				<label class="control-label" for="inputPassword1">Mot de passe</label>
				<div class="controls">
				  <input required type="password" class="span3"  name="password1" id="inputPassword1" placeholder="Password" value="<?=$password1;?>">
				</div>
			  <div class="control-group">
				<label class="control-label" for="inputPassword1">Retaper le Mot de passe</label>
				<div class="controls">
				  <input required type="password" class="span3"  name="password2" id="inputPassword1" placeholder="Verifier Password" value="<?=$password2;?>">
				</div>
			  </div>
			  <div class="controls">
			  <button type="submit" class="btn btn-warning block">Enregistrer</button>
			  </div>
			</form>
		</div>
		</div>
	</div>
		<div class="span1"> &nbsp;</div>
		<div class="span4">
			<div class="well">
			<h5><p class="textcolors text-center">DÉJÀ ENREGISTRÉ ?</p></h5><hr><br/>
			<form method="post" class="form-vertical loginFrm">

				<?php 
					if(!empty($errors)){
								echo display_errors($errors);
							} 
				?>
			  <div class="control-group">
				<label class="control-label" for="inputEmail1">Email</label>
				<div class="controls">
				  <input required class="span3"  type="email" name="email" id="inputEmail1" placeholder="Email" value="<?=$email;?>">
				</div>
			  </div>
			  <div class="control-group">
				<label class="control-label" for="inputPassword1">Password</label>
				<div class="controls">
				  <input required type="password" class="span3"  name="password" id="inputPassword1" placeholder="Password" value="<?=$password;?>">
				</div>
			  </div>
			  <div class="control-group">
				<div class="controls">
				  <button type="submit" class="btn btn-warning block">Connecter </button> <a href="forgetpass.html">Forget password?</a>
				</div>
			  </div>
			</form>
		</div>
		</div>
	</div>
</div>
</div></div>
</div>
<!-- MainBody End ============================= -->

<!--  ========================== Footer ==================================== -->
<?php include 'footer.php'; ?>
<!-- =================== END Footer ========================================= -->


</body>
</html>