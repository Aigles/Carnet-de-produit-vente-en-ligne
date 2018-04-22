	<script>
	jQuery(window).scroll(function(){
	  var vscroll = jQuery(this).scrollTop();
	  //var id = GET_PARAM('pid');

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

		
	function detailsmodal(id){

		//alert(id);
		var data = {"id" : id};
		jQuery.ajax({
			url: <?=BASEURL;?>+'each_product.php',
			method : "POST",
			data : data,
			success: function(data){
				jQuery('body').append(data);
				jQuery('#details-modal').modal('toggle');
				//alert(id);
			},
			error: function(){
				alert("something went wrong");
			}
		})
	}

	function add_to_cart(){
		//alert("work!");
		jQuery('modal_errors').html("");
		var size = jQuery('size').hide();
		setTimeout(function(){
			jQuery('#details-modal').remove();
			jQuery('.modal-backdrop').remove();
		},500);

	}
	function add_to_cart(){
		//alert("work!");
		jQuery('#details-modal').modal('hide');
		setTimeout(function(){
			jQuery('#details-modal').remove();
			jQuery('.modal-backdrop').remove();
		},500);

	}

	

</script>