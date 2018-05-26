<!-- Sidebar ================================================== -->
	<div id="sidebar" class="span3">
		<div class="well well-small"><a id="myCart" href="cart.php"><span class="badge badge-warning"><span class="icon-shopping-cart"></span> <span class="total-count"></span> Élément(S) </span><span class="badge badge-warning pull-right">$<span class="total-panier" id="prix_total"></span></span></a></div>
		<ul id="sideMnu" class="nav nav-tabs nav-stacked">
			<li class="subMenu open"></li>
			<!--<li id="sidheMnu" ><a class="active" href="products.html">ROBES </a></li>-->
		<!-- 	<li><a href="products.html">JUPES </a></li>
			<li><a href="products.html">JEANS </a></li>
			<li><a href="products.html">BIKINI </a></li> -->
			
			
		</ul>
	</div>
<!-- Sidebar end=============================================== -->
<script>
  $('.total-count').html(MonPanier.totalCount());
  $('.total-panier').html(MonPanier.totalpanier().toFixed(2));
</script>