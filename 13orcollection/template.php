

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Acceuil | 13 Or Collection</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
	
    <!-- Bootstrap style -->
    <script type="text/javascript" src="https://www.paypalobjects.com/api/checkout.js"></script>
  </head>

<!-- =========== Header =============================================-->
<div id="header">


</div>
<body>
<!--=========== Header End=========================================== -->
    <div id="content" class="col-lg-10 col-sm-10">
        <?php echo $content; ?>
    </div>
<!-- Footer ================================================================== -->
    <div  id="footerSection">
        <div class="container">
            <div class="row">
                <div class="span3">
                    <h5>COMPTE</h5>
                    <a href="#">VOTRE COMPTE</a>
                    <a href="#">INFORMATION PERSONNEL</a> 
                    <a href="#">ADRESSES</a> 
                    <a href="#">RABAIS</a>  
                    <a href="#">HISTORIQUE DES COMMANDES</a>
                 </div>
                <div class="span3">
                    <h5>INFORMATION</h5>
                    <a href="contact.html">CONTACTE</a>  
                    <a href="inscription.php">ENREGISTREMENT</a>  
                    <a href="#">AVERTISSEMENT LEGAL</a>  
                    <a href="#">TERMES ET CONDITIONS</a> 
                    <a href="#">FAQ</a>
                 </div>
                <div class="span3">
                    <h5>NOS OFFRES</h5>
                    <a href="#">NOUVEAUX PRODUITS</a> 
                    <a href="#">PLUS VENDUS</a>  
                    <a href="#">OFFRES SPECIALES</a>  
                    <a href="#">MANUFACTURERS</a> 
                    <a href="#">SUPPLIERS</a> 
                 </div>
                <div id="socialMedia" class="span3 pull-right">
                    <h5>RESEAUX SOCIAUX</h5>
                    <a href="#"><img width="50%" height="50%" src="themes/images/facebook.png" title="facebook" alt="facebook"/></a>
                    <a href="#"><img width="60" height="60" src="themes/images/twitter.png" title="twitter" alt="twitter"/></a>
                    <a href="#"><img width="60" height="60" src="themes/images/youtube.png" title="youtube" alt="youtube"/></a>
                 </div> 
             </div>
            <p class="pull-right textcolors">&copy; tous droits réservés 2018-2019 | 13 Or Collection</p>
        </div><!-- Container End -->
    </div>

    <script type="text/javascript">
    
            paypal.Button.render({
              // Configure environment
              env: 'sandbox',
              // Customize button (optional)
              locale: 'en_US',
              style: {
                size: 'small',
                shape: 'pill',
              },
              // Set up a payment
              payment: function (data, actions) {
                return actions.payment.create({
                  transactions: [{
                    amount: {
                      total: '0.01',
                      currency: 'USD'
                    }
                  }]
                });
              },
              // Execute the payment
              onAuthorize: function (data, actions) {
                return actions.payment.execute()
                  .then(function () {
                    // Show a confirmation message to the buyer
                    window.alert('Thank you for your purchase!');
                  });
              }
            }, '#paypal-button');

    </script>
<!-- =================== END Footer ========================================================= -->

     <script src="themes/js/config.js"></script>  
    <script src="themes/js/jquery.js" type="text/javascript"></script>
    <script src="themes/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="themes/js/js/panier.js"></script>
    <script src="themes/js/oldNavigation.js"></script>
  <!-- <script src="themes/js/modifier.js"></script> -->
	<script src="themes/js/header.js"></script>

	<script src="themes/js/google-code-prettify/prettify.js"></script>
	 
	<script src="themes/js/bootshop.js"></script>
    <script src="themes/js/jquery.lightbox-0.5.js"></script>
    <script src="themes/js/list.js"></script>
    <!-- <script src="themes/js/zoom.js"></script> -->
    <script src="themes/js/categorie.js"></script>
    <script src="themes/js/rechCategorie.js"></script>
    <script src="themes/js/commande.js"></script>
	<!-- Themes switcher section ============================================================================================= -->
<?php include 'script.php'; ?>

</body>

</html>
