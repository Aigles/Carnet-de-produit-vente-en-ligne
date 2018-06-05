
		<!-- =================== icone zoom | Details dynamique ======================= -->

        <?php ob_start(); ?>

		<div style="width:800px; margin-left:-400px;" class="modal fade details-1" id="details-modal" tabindex="-1" role="dialog" aria-labelledby="details-1" aria-hidden="true">

		</div>
		<!-- =================== FIN icone zoom | Details dynamique ======================= -->
		

		<script>	
			//Fonction permettant de fermer correctement le bouton zoom de details
				function closeModal(){
							$('#details-modal').modal('hide');
							$('#details-modal').empty();
					}
		</script>
		
		<?php echo ob_get_clean(); ?>