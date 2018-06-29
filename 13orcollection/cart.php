
<?php 
//require_once $_SERVER['DOCUMENT_ROOT'].'/13orcollection/core/init.php';
	define('ROOT', __DIR__);

	require_once ROOT.'/core/init.php'; 

?>
<!-- =========== END Header =========================================-->
<style>
    .btn-large{
        border-radius: 0px;
        width:100%;
        text-shadow: none;
    }
    .btn-default{
    	background-color: burlywood;
    	color: #fff;
    	text-shadow: none;
    }

    .btn-default:hover{
    	background-color: coral;
    	color: #fff;
    	text-shadow: none;
    }
	
td, input[type="number"]{
		color:  coral;
	}
	th{
		color: grey;
		font-size: 20px;
	}
	th[class="nomP"]{
		width: 10em;
	}
</style>



<h3 class="textcolors text-center">Votre Panier</h3><hr>
<br />
<div class="row">
	<div class="col-sm-12">
    	<div id="qte_minimum_report" style="display: none;"></div>
	</div>
</div>
<div class="container" id="zerocommande_panier">		
    <div class="row">
        <div class="col-sm-12 col-md-12">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th class="text-right nomP" style="width: 10em;">Nom Produit</th>
                        <th class="text-right">Quantite</th>
                        <th class="text-center">Prix</th>
                        <th class="text-center">Total</th>
                        <th class="text-center">Supprimer</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody class="show-panier" id="macommande">
                
                  
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- Produits proposés +10 produits fournis -->
<div class="row ">
	<div class="col-md-12">		
		<div class="well well-small">
			<h3 class="text-center"><font color='grey'>Produits proposés </font></h3><h4><small class="pull-right"> 10+ produits fournis</small></h4>
			<div class="row-fluid">
				<div id="featured" class="carousel slide">
					<div class="carousel-inner" >
					    <div class="item active">
						    <ul class="thumbnails" class="nav nav-tabs nav-justified"  id="recent_produit_active">

							    </ul>
						    </div>
						<div class="item">
							<ul class="thumbnails" id="recent_produit" >
		        
							</ul>
						</div>
		
						<div class="item">
							<ul class="thumbnails" id="recent_produit_2" >
		        
							</ul>
						</div>

		  			</div>
	  				<a class="left carousel-control" href="#featured" data-slide="prev">‹</a>
	  				<a class="right carousel-control" href="#featured" data-slide="next">›</a>
			    </div>
		    </div>
		</div>
	</div>
</div>

<br/>
	
