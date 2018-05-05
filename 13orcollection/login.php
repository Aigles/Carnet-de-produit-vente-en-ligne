<?php 
	include 'log.php';
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
    
	<h3><p class="textcolors text-center"> Connection</p></h3>	
	<hr class="soft"/>
	
	<div class="container" style=" margin-left: 80px;">
	<div class="row" >
		
		<div class="span3"></div>
		<div class="span4">
			<div class="well">
			<h5><p class="textcolors text-center">DÉJÀ ENREGISTRÉ ?</p></h5><hr><br/>
			<form method="post" class="form-vertical loginFrm">

				<?php 
					if(!empty($errors)){
						echo display_errors($errors);
					}
					// else{
					// 	echo '<div class="alert alert-success" role="alert"><p><span class="icon-exclamation-sign" aria-hidden="true"></span>utilisateur connecté</p></div>';
					// }
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