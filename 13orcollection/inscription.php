<?php 
	include 'insc.php';
?>

<!--=========== Header End=========================================== -->
<div id="mainBody">
	<div class="container">
	<div class="row">

	<div class="span12">
    <ul class="breadcrumb">
		<li><a href="index.php">Acceuil</a> <span class="divider">/</span></li>
		<li class="active">Inscription</li>
    </ul>

     <!-- ================ Partie rechercher ==================-->
    <!-- <form>
  <input type="text" size="30" onkeyup="showResult(this.value)">
  <div id="livesearch"></div>
</form> -->

     <!-- ================ Fin Partie rechercher ==================-->

    <!-- ======= codes php doivent etre ajouté ici pour les cas de test ====== -->
	<!-- <h3><p class="textcolors text-center"> Création de Compte </p></h3>	 -->
	<!-- <hr class="soft"/> -->
	

	<div class="container">
	<div class="row" >
		<div class="span4"></div>
		<div class="span4">
			<div class="well">
			<h3><p class="textcolors text-center"> Création de Compte </p></h3>	<hr><br/>
				<!-- <span id="modal_errors" class="bg-danger"></span> -->
				
						
						<!-- <div id="result-title">
								<div id="result-info"></div>
								<div id="myModal"></div>
						</div> -->
					
				
			<div class="box-content" id="save_inscription">
			<form role="form" method="post" class="form-vertical loginFrm" id="add_user_form">
				<?php 
					if(!empty($errors)){
						echo display_errors($errors);
					}
				?>
			  <div class="control-group">
				<label class="control-label" for="inputNom">Nom</label>
				<div class="controls">
				  <input class="span3"  type="text" name="nom" id="inputNom" placeholder="Nom" value="<?=$nom;?>">
				</div>
				<div id="result-nom" style="color: red;"></div>
			  </div>
			  <div class="control-group">
				<label class="control-label" for="inputPrenom">Prénom</label>
				<div class="controls">
				  <input class="span3"  type="text" name="prenom" id="inputPrenom" placeholder="Prénom" value="<?=$prenom;?>">
				</div>
				<div id="result-prenom" style="color: red;"></div>
			  </div>
			  <div class="control-group">
				<label class="control-label" for="inputEmail1">Email</label>
				<div class="controls">
				  <input required="required" class="span3" type="email" name="email" id="inputEmail1" placeholder="Email" value="<?=$email;?>">
				</div>
				<div id="result-email" style="color: red;"></div>
			  </div>
			  <div class="control-group">
				<label class="control-label" for="inputPassword1">Mot de passe</label>
				<div class="controls">
				  <input type="password" class="span3"  name="password1" id="inputPassword1" placeholder="Password" value="<?=$password1;?>">
				</div>
				<div id="result-password" style="color: red;"></div>
				<div id="result-lpassword" style="color: red;"></div>
			  </div>
			  <div class="control-group">
				<label class="control-label" for="inputPassword2">Confirmer le Mot de passe</label>
				<div class="controls">
				  <input type="password" class="span3"  name="password2" id="inputPassword2" placeholder="Verifier Password" value="<?=$password2;?>">
				</div>
				<div id="result-vpassword" style="color: red;"></div>
			  </div>
			  <div class="control-group">
			  <div class="controls">
			  <button type="button" class="btn btn-warning" onclick="creerUtilisateur()">Enregistrer</button>
			  </div>
			</div>
			</form>
		</div>
		</div>
		</div>
	</div>
		
	</div>
</div>
</div></div>
</div>

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
                    <button type="button" class="btn btn-default" onclick="closeModale();" data-dismiss="modal">Fermer</a>
                    
                </div>
            </div>
        </div>
    </div>
<!-- Placed at the end of the document so the pages load faster ============================================= -->
<script>    
            //Fonction permettant de fermer correctement le bouton zoom de details
                function closeModale(){
                            // $('#fermer-modal').modal('hide');
                            window.location = "index.php?p=connection";
                    }
        </script>
<!-- MainBody End ============================= -->

<!--  ========================== Footer ==================================== -->
<!--  -->
<!-- =================== END Footer ========================================= -->

    <script src="themes/js/inscription.js"></script>
 