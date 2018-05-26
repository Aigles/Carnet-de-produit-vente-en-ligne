<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Details produits</title>
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
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> -->
  </head>
<body>
	<!-- ================== Header ============================================ -->
	<div id="header">


</div>
<div id="mainBody">
	<div class="container">
		<div class="row">
	<!-- ======================= Sidebar -->
		
	<!-- ======================= Sidebar End -->
		</div>

		<div class="span6" id="detail_produit"></div><!-- ========== affichage des produits ================== -->	
<!-- ========================FIN DIV AJOUTER -->
	
	</div>
</div>
	</div>
</div>
</div> </div>
</div>
<!-- MainBody End ============================= -->

	<?php include 'footer.php'; ?><!-- =========== Footer ===================================================== -->


<!-- Placed at the end of the document so the pages load faster ============================================= -->
	<script src="themes/js/jquery.js" type="text/javascript"></script>
	<script src="themes/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="themes/js/google-code-prettify/prettify.js"></script>	
	<script src="themes/js/config.js"></script>
	<script src="themes/js/bootshop.js"></script>
	
    <script src="themes/js/jquery.lightbox-0.5.js"></script>
    <script src="themes/js/detail.js"></script>
    <script src="themes/js/rechCategorie.js"></script>


<?php include 'script.php'; ?>

<script>
function commander(nom,prenom,cp,email,commande,prix_total,message,livraison){
$.ajax({	
url : 'mail.php',
type : 'GET', 
data : 'nom=' + nom + '&prenom=' + prenom + '&cp=' + cp + '&email=' + email + '&commande=' + commande + '&prix_total=' + prix_total + '&message=' + message + '&livraison=' + livraison, 
dataType : 'html',
success : function(reponse){
document.getElementById('commande_report').innerHTML = reponse;},
});
}
$('#commander').click( function(){
var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var cp = document.getElementById("cp").value;
var email = document.getElementById("email").value;
var commande = document.getElementById("macommande").innerHTML;
var prix_total = document.getElementById("prix_total").innerHTML;
var message = document.getElementById("message").value;
var livraison = document.querySelector('input[name="livraison"]:checked').value;
commander(nom,prenom,cp,email,commande,prix_total,message,livraison);
});
</script>
	<script src="header.js"></script>
</body>
</html>