//Pour verifier que les mots de passe sont les memes
$(document).ready(function(){

	//afficher les role dans une liste deroulantes
	//getRole();

	$password = $("#inputPassword1");
	$confirmP = $("#inputPassword2");

	$password.keyup(function(){
		if($(this).val().length < 6){
			$(this).css({
				borderColor : 'red',
				color : 'red'
			});
			$(this).addClass('glyphicon glyphicon-ok');
		}else{
			$(this).css({
				borderColor : 'green',
				color : 'green'
			});
		}
	});

	$confirmP.keyup(function(){
		if($(this).val() != $password.val()){
			$(this).css({
				borderColor : 'red',
				color : 'red'
			});	
		}else{
			$(this).addClass('glyphicon glyphicon-ok');
			$(this).css({
				borderColor : 'green',
				color : 'green'
			});
		}
	})
});



                                                            
                           


                                    
