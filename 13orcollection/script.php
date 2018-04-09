<script>
	JQuery(window).scroll(function(){
		var vscroll = JQuery(this).scrollTop();
		JQuery('#logotext').css({
			"transform" : "translate(0px, "+vscroll/2+"px)"
		});
	
	JQuery('#back-flower').css({
			"transform" : "translate("+vscroll/5+"px, -"+vscroll/12+"px)"
		});
	
	JQuery('#fore-flower').css({
			"transform" : "translate(0px, "+vscroll/2+"px)"
		});
	});
	
function detailsmodal(){
	alert("yay! it worked!");
}
</script>