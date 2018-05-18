
<?php 
<<<<<<< HEAD
//require_once $_SERVER['DOCUMENT_ROOT'].'/13orcollection/core/init.php';
	define('ROOT', __DIR__);

	require_once ROOT.'/core/init.php'; 
=======
require_once realpath("core/init.php");
 //$_SERVER['DOCUMENT_ROOT']. '/Vente-en-ligne/13orcollection/core/init.php';
	//require_once 'core/init.php'; 
>>>>>>> fba8b0d26b1b3c5b68312d0fa109cb6293c3af99
	// $password = 'password';
	// $hashed = password_hash($password, PASSWORD_DEFAULT);
	// echo $hashed;
	//echo $_SESSION['SBUser'];
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
    
  </head>
<body>
<!-- =========== Header =============================================-->
<div id="header">
<?php 

    include 'header.php';
?>

</div>
<!--=========== Header End=========================================== -->
<div id="carouselBlk">
	<div id="myCarousel" class="carousel slide">
		<div class="carousel-inner">
		  <div class="item active">
		  <div class="container">
			<a href="#"><img style="width:100%" src="themes/images/carousel/1.png"/></a>
		  </div>
		  </div>
		  <div class="item">
		  <div class="container">
			<a href="#"><img style="width:100%" src="themes/images/carousel/2.png"/></a>
		  </div>
		  </div>
		  <div class="item">
		  <div class="container">
			<a href="#"><img style="width:100%" src="themes/images/carousel/3.png"/></a>
			
		  </div>
		  </div>
		   <div class="item">
		   <div class="container">
			<a href="#"><img style="width:100%" src="themes/images/carousel/4.png"/></a>
		   
		  </div>
		  </div>
		   <div class="item">
		   <div class="container">
			<a href="#"><img style="width:100%" src="themes/images/carousel/5.png"/></a>
		  </div>
		  </div>
		   <div class="item">
		   <div class="container">
			<a href="#"><img style="width:100%" src="themes/images/carousel/6.png" /></a>
		  </div>
		  </div>
		</div>
		<a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
		<a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
	  </div> 
</div>
<div id="mainBody">
	<div class="container">
	<div class="row">
<!-- Sidebar a gauche ================================================== -->
	<?php include 'sidebar.php'; ?>
<!-- Sidebar a gauche end=============================================== -->
		<!-- <div class="span12"> -->
		<div class="span9">		
			<div class="well well-small">
			<h4 class="text-center">Produits proposés </h4><h4><small class="pull-right"> 200+ produits fournis</small></h4>
			<div class="row-fluid">
			<div id="featured" class="carousel slide">
			<div class="carousel-inner">
			  <div class="item active">
			  <ul class="thumbnails" class="nav nav-tabs nav-justified">
				<li class="span3">
				  <div class="thumbnail">
				  <!-- <i class="tag"></i> -->
					<a href="product_details.html"><img src="themes/images/products/b1.jpg"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					  <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
				<li class="span3">
				  <div class="thumbnail">
				  <!-- <i class="tag"></i> -->
					<a href="product_details.html"><img src="themes/images/products/b2.jpg"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					  <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
				<li class="span3">
				  <div class="thumbnail">
				  <!-- <i class="tag"></i> -->
					<a href="product_details.html"><img src="themes/images/products/b3.jpg"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					   <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
				<li class="span3">
				  <div class="thumbnail">
				  <!-- <i class="tag"></i> -->
					<a href="product_details.html"><img src="themes/images/products/b4.jpg"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					   <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
			  </ul>
			  </div>
			   <div class="item">
			  <ul class="thumbnails">
				<li class="span3">
				  <div class="thumbnail">
				  <!-- <i class="tag"></i> -->
					<a href="product_details.html"><img src="themes/images/products/6.jpg"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					  <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
				<li class="span3">
				  <div class="thumbnail">
				  <!-- <i class="tag"></i> -->
					<a href="product_details.html"><img src="themes/images/products/A.jpg"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					  <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
				<li class="span3">
				  <div class="thumbnail">
					<a href="product_details.html"><img src="themes/images/products/b3.jpg"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					   <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
				<li class="span3">
				  <div class="thumbnail">
					<a href="product_details.html"><img src="themes/images/products/robe.png"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					   <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
			  </ul>
			  </div>
			   <div class="item">
			  <ul class="thumbnails">
				<li class="span3">
				  <div class="thumbnail">
					<a href="product_details.html"><img src="themes/images/products/9.jpg"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					  <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
				<li class="span3">
				  <div class="thumbnail">
					<a href="product_details.html"><img src="themes/images/products/10.jpg"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					  <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
				<li class="span3">
				  <div class="thumbnail">
					<a href="product_details.html"><img src="themes/images/products/11.jpg"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					   <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
				<li class="span3">
				  <div class="thumbnail">
					<a href="product_details.html"><img src="themes/images/products/1.jpg"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					   <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
			  </ul>
			  </div>
			   <div class="item">
			  <ul class="thumbnails">
				<li class="span3">
				  <div class="thumbnail">
					<a href="product_details.html"><img src="themes/images/products/2.jpg"></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					  <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
				<li class="span3">
				  <div class="thumbnail">
					<a href="product_details.html"><img src="themes/images/products/sweater.jpg" alt=""></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					  <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
				<li class="span3">
				  <div class="thumbnail">
					<a href="product_details.html"><img src="themes/images/products/4.jpg" alt=""></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					   <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
				<li class="span3">
				  <div class="thumbnail">
					<a href="product_details.html"><img src="themes/images/products/sweater1.jpg" alt=""></a>
					<div class="caption">
					  <h5>Nom produit</h5>
					   <h4><a class="btn btn-warning" href="product_details.html">voir</a> <span class="pull-right">$222.00</span></h4>
					</div>
				  </div>
				</li>
			  </ul>
			  </div>
			  </div>
			  <a class="left carousel-control" href="#featured" data-slide="prev">‹</a>
			  <a class="right carousel-control" href="#featured" data-slide="next">›</a>
			  </div>
			  </div>
		</div>
		 
	</div>
<!-- Sidebar à droite ================================================== -->
	
<!-- Sidebar à droite end=============================================== -->
	<br/>
			
		
		</div>
		<h4 class="text-center">Derniers produits </h4>
			  <ul class="thumbnails" id="List_produit"></ul>
	</div>
<?php include 'each_product.php'; ?>
</div>
<!-- Footer ================================================================== -->
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
    <!-- <script src="themes/js/zoom.js"></script> -->
    <script src="themes/js/categorie.js"></script>
    <script src="themes/js/rechCategorie.js"></script>
	
	<!-- Themes switcher section ============================================================================================= -->
<?php include 'script.php'; ?>
</body>
</html>
