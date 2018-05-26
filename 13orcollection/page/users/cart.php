
<?php
	define('ROOT', __DIR__); 
	require_once '../../core/init.php'; 
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Acceuil | 13 Or Collection</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
	
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
        <script src="themes/js/login/checkConnection.js"></script> 
  </head>
<body>
<!-- =========== Header =============================================-->
<div id="header">
<?php 
	include ('headeruser.php'); 
	
?>
</div>
<!-- =========== END Header =========================================-->
    <h3 class="textcolors text-center">Votre Panier</h3><hr>
<!-- Nombre de produit(s) dans votre panier : <span class="total-count"></span> -->


<!-- <table class="show-panier" id="macommande"></table> -->
<!-- <br />
<div>Prix total: <span class="total-panier" id="prix_total"></span> euros</div>
<br /> -->


<div class="container" id="zerocommande_panier">
<div class='alert alert-info text-center'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b id="qte_minimum_report"></b></div>
  <div class="row">
        <div class="col-sm-12 col-md-12 col-md-offset-1">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Nom Produit</th>
                        <th class="text-right">Quantite</th>
                        <th class="text-center">Prix</th>
                        <th class="text-center">Total</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody class="show-panier" id="macommande">
                
<!--                  
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Subtotal</h5></td>
                        <td class="text-right"><h5><strong>$24.59</strong></h5></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Estimated shipping</h5></td>
                        <td class="text-right"><h5><strong>$6.94</strong></h5></td>
                    </tr> -->
                  
                </tbody>


            </table>
        </div>
    </div>










    
    </div>

    <!-- Sidebar a gauche end=============================================== -->
		<!-- <div class="span12"> -->
        <div class="row ">
		<div class="col-md-12">		
		<div class="well well-small">
			<h4 class="text-center">Produits proposés </h4><h4><small class="pull-right"> 10+ produits fournis</small></h4>
			<div class="row-fluid">
			<div id="featured" class="carousel slide">
			<div class="carousel-inner" >
			  <div class="item active">
			  <ul class="thumbnails" class="nav nav-tabs nav-justified"  id="recent_produit_active">
				
				
				
				
			  </ul>
			  </div>
				<div class="item"><ul class="thumbnails" id="recent_produit" >
        
				</ul></div>
			
				<div class="item"><ul class="thumbnails" id="recent_produit_2" >
        
				</ul></div>
			   <!-- <div class="item">
			  <ul class="thumbnails" >
				
				
			
		
				
			
			
				
			  </ul>
			  </div> -->
			  </div>
			  <a class="left carousel-control" href="#featured" data-slide="prev">‹</a>
			  <a class="right carousel-control" href="#featured" data-slide="next">›</a>
			  </div>
			  </div>
		</div>
		</div>
        </div>
<!-- Sidebar à droite ================================================== -->
	
<!-- Sidebar à droite end=============================================== -->
	<br/>
			
		
	
        
</body>

<!-- ===================  Footer ============================================================ -->
<?php include 'footer.php'; ?>
<!-- =================== END Footer ========================================================= -->


<!-- Placed at the end of the document so the pages load faster ============================================= -->
	<script src="themes/js/jquery.js" type="text/javascript"></script>
	<script src="themes/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="themes/js/google-code-prettify/prettify.js"></script>
	    <script src="themes/js/config.js"></script>
	<script src="themes/js/bootshop.js"></script>        
    <script src="themes/js/jquery.lightbox-0.5.js"></script>
    <script src="themes/js/list.js"></script>
    <script src="themes/js/zoom.js"></script>
    <script src="themes/js/categorie.js"></script>
    <script src="themes/js/rechCategorie.js"></script>
	<script src="themes/js/js/panier.js"></script>
	<!-- ======================== Themes switcher section ================================= -->
<?php include 'script.php'; ?>
</body>
</html>