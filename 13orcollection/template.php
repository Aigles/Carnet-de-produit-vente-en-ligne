

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
  <!-- <script type="text/javascript" src="https://www.paypalobjects.com/api/checkout.js"></script> -->
<!-- Bootstrap style --> 
 <script src="themes/js/config.js"></script>  
	<script src="themes/js/jquery.js" type="text/javascript"></script>
	<script src="themes/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="themes/js/js/panier.js"></script>
  <script src="themes/js/oldNavigation.js"></script>
  <script src="themes/js/list.js"></script>
   
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
            <div class="span6">
              <a>Pour autre information, Contacter les numeros suivants</a> <font color="#faa732">(509)4769-55-28  |  (509)4347-96-26</font>
            </div>
          </div><br/>
            <div class="row">
                <div class="span3">
                    <h5>COMPTE</h5>
                    <a>MON </a>
                    <a>INFORMATION PERSONNEL</a> 
                    <!-- <a>ADRESSES</a>  -->
                    <!-- <a>RABAIS</a>   -->
                    <a>HISTORIQUE DES COMMANDES</a>
                 </div>
                <div class="span3">
                    <h5>INFORMATION</h5>
                    <!-- <a href="contact.html">CONTACTE</a>   -->
                    <a href="index.php?p=inscription">ENREGISTREMENT</a>  
                    <a>AVERTISSEMENT LEGAL</a>  
                    <a>TERMES ET CONDITIONS</a> 
                    <!-- <a>FAQ</a> -->
                 </div>
                <div class="span3">
                    <h5>NOS OFFRES</h5>
                    <a>NOUVEAUX PRODUITS</a> 
                    <a>PLUS VENDUS</a>  
                    <a>OFFRES SPECIALES</a>  
                    <!-- <a>MANUFACTURERS</a>  -->
                    <!-- <a>SUPPLIERS</a>  -->
                 </div>
                <div id="socialMedia" class="span3 pull-right">
                    <h5>RESEAUX SOCIAUX</h5>
                    <a><img width="50%" height="50%" src="themes/images/facebook.png" title="facebook" alt="facebook"/></a>
                    <a><img width="60" height="60" src="themes/images/twitter.png" title="twitter" alt="twitter"/></a>
                    <a><img width="60" height="60" src="themes/images/youtube.png" title="youtube" alt="youtube"/></a>
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

     <!-- <script src="themes/js/config.js"></script>  
    <script src="themes/js/jquery.js" type="text/javascript"></script>
    <script src="themes/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="themes/js/js/panier.js"></script>
    <script src="themes/js/oldNavigation.js"></script>
  <script src="themes/js/modifier.js"></script> -->
	<script src="themes/js/header.js"></script>

	<script src="themes/js/google-code-prettify/prettify.js"></script>
	 
	<script src="themes/js/bootshop.js"></script>
    <script src="themes/js/jquery.lightbox-0.5.js"></script>

    <!-- <script src="themes/js/zoom.js"></script> -->
    <script src="themes/js/categorie.js"></script>
    <script src="themes/js/rechCategorie.js"></script>
    <script src="themes/js/commande.js"></script>
	<!-- Themes switcher section ============================================================================================= -->
<?php include 'script.php'; ?>

</body>

</html>
