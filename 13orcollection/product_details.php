
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
<!-- 	</div>
</div>
</div> </div>
</div> -->
<!-- MainBody End ============================= -->
<!-- =========== Footer ===================================================== -->


    <script src="themes/js/detail.js"></script>



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
