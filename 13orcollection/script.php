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

</script>

