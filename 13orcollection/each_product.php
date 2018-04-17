

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta name="description" content="">
	    <meta name="author" content="">
		<link id="callCss" rel="stylesheet" href="themes/bootshop/bootstrap.min.css" media="screen"/>
	    <link href="themes/css/base.css" rel="stylesheet" media="screen"/>
	<!-- Bootstrap style responsive -->	
		<link href="themes/css/bootstrap-responsive.min.css" rel="stylesheet"/>
		<link href="themes/css/font-awesome.css" rel="stylesheet" type="text/css">
	</head>
<body>

<?php ob_start(); ?>
<div class="modal fade details-1" id="details-modal" tabindex="-1" role="dialog" aria-labelledby="details-1" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-header">
			<button class="close" type="button" data-dismiss="modal" aria-label="close"><span aria-hidden="true">&times;</span></button>
			<h4 class="modal-title text-center">DETAILS</h4>
		</div>
		<div class="modal-body"> 
			<div class="container-modifier">
				<ul class="thumbnails">
					<span id="modal_errors" class="bg-danger"></span>
					<li class="span">
						<div class="center-block">
							<img src="nana.jpg " class="taille-img"	alt="Levis Jean" class="details img-responsive">
						</div>
					</li>	
					<li class="span">
						<p><h4 style="color: #faa732;">Nice dress</h4></p>
						<hr>
						<p>These dresses are amazing! they are beautifull, fit <br/> great and look sexy. Get a pair while while they last!</p>
						<hr>
						<p>PRIX:&nbsp;   $34.99</p>
						<p>MARQUE: Levis</p>
						<form action="add_cart.php" method="post" id="add_product_form">
							<div class="form-group">
								<label for="quantity">QUANTITÉ:</label>
								<input type="number" class="form-control" id="quantity" name="quantity"><br>
							<!-- 	cccccomentaire <div class="span3">&nbsp;</div>bbbbbbbbb -->
							</div>
							<div class="form-group">
								<label for="size">TAILLE:</label>
								<select name="size" id="size" class="form-control">
									<option value="32">32</option>
									<option value="32">31</option>
									<option value="32">30</option>
								</select><br>
							<!-- 	cccccomentaire <div class="span3">&nbsp;</div>bbbbbbbbb -->
							</div>
						</form>
					</li>	
				</ul>
			</div>
		</div>
			<div class="modal-footer">
				<button class="btn btn-default" data-dismiss="modal">Close</button>
				<button class="btn btn-warning" onclick="add_to_cart();return false;"><span class="icon-shopping-cart"></span>Add to cart</button>
			</div>	
	</div> 
 <!-- ======================= Information End =========================================-->
</div>
<?php echo ob_get_clean(); ?>
    </body>
</html>