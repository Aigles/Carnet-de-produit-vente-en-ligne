
		<!-- =================== icone zoom | Details dynamique ======================= -->

        <?php ob_start(); ?>

		<div style="width:800px; margin-left:-400px;" class="modal fade details-1" id="details-modal" tabindex="-1" role="dialog" data-dismiss="modal" aria-label='close' aria-labelledby="details-1" aria-hidden="true">

		</div>
		<!-- =================== FIN icone zoom | Details dynamique ======================= -->
		<?php echo ob_get_clean(); ?>

		<script>	
			//Fonction permettant de fermer correctement le bouton zoom de details
				function closeModal(){
							$('#details-modal').modal('hide');
							$('#details-modal').empty();
							// $('.modal-dialog').click(function(){
							// 	$('.modal-dialog').modal('hide');
							// 	$('.modal-dialog').empty();
							// });
					}
		</script>
		
		<!-- <a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a> -->