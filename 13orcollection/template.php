

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Acceuil | 13 Or Collection</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
	
<!-- Bootstrap style --> 
<script src="themes/js/config.js"></script>  
	<script src="themes/js/jquery.js" type="text/javascript"></script>
	<script src="themes/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="themes/js/js/panier.js"></script>
    <script src="themes/js/oldNavigation.js"></script>
  </head>
<body>
<!-- =========== Header =============================================-->
<div id="header">


</div>
<!--=========== Header End=========================================== -->
<div id="content" class="col-lg-10 col-sm-10">
            <?php echo $content; ?>
        </div>
<!-- Footer ================================================================== -->
<?php include 'footer.php'; ?>
<!-- =================== END Footer ========================================================= -->

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h3 id="result-title"></h3>
                </div>
                <div class="modal-body">
                    <p id="result-info"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" onclick="closeModal();" class="btn btn-default" data-dismiss="modal">Fermer</a>
                    
                </div>
            </div>
        </div>
    </div>
<!-- Placed at the end of the document so the pages load faster ============================================= -->
<script>    
            //Fonction permettant de fermer correctement le bouton zoom de details
                function closeModal(){
                            // $('#fermer-modal').modal('hide');
                            window.location = "index.php?p=connection";
                    }
        </script>
	<script src="themes/js/header.js"></script>

	<script src="themes/js/google-code-prettify/prettify.js"></script>
	 
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
