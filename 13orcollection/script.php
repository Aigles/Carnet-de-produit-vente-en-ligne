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
			method : "get",
			data : data,
			success: function(data){
				jQuery('body').append(data);
				jQuery('#details-modal').modal('toggle');
			},
			error: function(){
				alert("something went wrong");
			}
		})
	}

</script>