	<script>
	jQuery(window).scroll(function(){
	  var vscroll = jQuery(this).scrollTop();

	jQuery('#logotext').css({
		"transform" : "translate(0px, "+vscroll/2+"px)"
	});

	jQuery('#black-flower').css({
		"transform" : "translate("+0+vscroll/5+"px, -"+vscroll/12+"px)"
	});

	jQuery('#fore-flower').css({
		"transform" : "translate(0px, -"+vscroll/2+"px)"
		});
	});

		
	// function detailsmodal(id){

	// 	//alert(id);
	// 	var data = {"id" : id};
	// 	jQuery.ajax({
	// 		url: '/13orcollection/each_product.php',
	// 		type : "POST",
	// 		data : data,
	// 		success: function(data){
	// 			jQuery('body').append(data);
	// 			jQuery('#details-modal').modal('toggle');
	// 			//alert(id);
	// 		},
	// 		error: function(){
	// 			alert("something went wrong");
	// 		}
	// 	})
	// }

	function add_to_cart(){
    //alert("Votre produit a bien été ajouté dans le panier!");
    jQuery('#modal_errors').html("");
    var size = jQuery('#size').val();
    var quantity = jQuery('#quantity').val();
    var available = jQuery('#available').val();
    var error = '';
    var data = jQuery('#add_product_form').serialize();
    if(quantity < 0 || quantity == '' || quantity == 0){
      error += '<div class=\'alert alert-danger text-center\'><a href=\'#\' class=\'close\' data-dismiss=\'alert\' aria-label=\'close\'>&times;</a><b>Vous devez saisir une quantité valide..!</b></div>';
      jQuery('#modal_errors').html(error);
      return;
    }
    else if(quantity > available){
      valide += '<div class=\'alert alert-succes text-center\'><a href=\'#\' class=\'close\' data-dismiss=\'alert\' aria-label=\'close\'>&times;</a><b>produit ajouté dans le panier.!</b></div>';
      jQuery('#modal_errors').html(valide);
      return;
    }
    else{
        jQuery.ajax({
            url : '/13orcollection/cart.php',
            type : 'POST',
            data : data,
            success : function(){
				location.reload();
			},
            error : function(){alert("Something went wrong") }
        });
    }
    }

	
	// function add_to_cart(){
	// 	//alert("work!");
	// 	}

	

	

</script>

<!-- <span id="modal_errors" class="bg-danger"></span>
<input type="hidden" name="product_id" value="<?=$id;?>">
<input type="hidden" name="available" value=""> -->