
		<!-- =================== icone zoom | Details dynamique ======================= -->

        <?php ob_start(); ?>

		<div style="width:800px; margin-left:-400px;" class="modal fade details-1" id="details-modal" tabindex="-1" role="dialog" aria-labelledby="details-1" aria-hidden="true">

		</div>
		<!-- =================== FIN icone zoom | Details dynamique ======================= -->
		<script>	
				function closeModal(){
				    $('#details-modal').modal('hide');
				    setTimeout(function(){
					    $('#details-modal').remove();
					    $('.modal-backdrop').remove();
				    },500);
				}
		</script>
		
		<?php echo ob_get_clean(); ?>