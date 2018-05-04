//Pour verifier que les mots de passe sont les memes
$(document).ready(function(){

	//afficher les role dans une liste deroulantes
	getRole();

	$password = $("#user-password");
	$confirmP = $("#user-cPassword");

	$password.keyup(function(){
		if($(this).val().length < 5){
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


function creerUtilisateur()
{
	//validatiion du formulaire pour la creation d'un role
  	var data, url;

  	$validator = $('#save_user form').validate();
  	
  	$valid = $('#save_user form').valid();
  	
  	if (!$valid) {
    	$validator.focusInvalid();
    	return false;
  	}

  	var user = {};

  	user.nom = $("#user-nom").val();
  	user.prenom = $("#user-prenom").val();
  	user.email = $("#user-email").val();
  	user.avatar = $("#user-avatar").val();
  	user.password = $("#user-password").val();
  	user.categorie_id = parseInt($( "select option:selected" ).val(), 10); //parseInt($("#user-categorie").val());

  	data = JSON.stringify(user);

  	console.log(data);

  	var url = fullUrl+'ceerUtilisateur';

  	sendData(url, data);


}
 

function sendData(url, data)
{
	$.ajax({
		url : url,
    	type: 'POST', 
		daType: 'json',
		crossDomain : 'true',
		data : data,
		    success: function (rs) {                
            $('#result-title').html('Reultat de l\'operation');
            $('#result-info').html(rs.status);
            $.when($('#myModal').modal('show').delay(3000)).done(function(){
                window.location = "index.php?p=listerUser";
            });  
             
        },
        error: function (xhr,status,error) {            
            $('#result-title').html('Reultat de l\'operation');
            $('#result-info').html('Echec de l\'operation encour');
            $('#myModal').modal('show');
            
        }

    });

}

function getRole(chaine)
{
		var items = [];
	  var url = fullUrl + 'rolle'
	  $.ajax({
	    url: url,
	    type: 'GET',
	    dataType: 'json',
	    crossDomain: true,
	  }).done(function (data) {
	    var items = [];

	    $.each(data, function (key, value) {

	    	if(parseInt(value.id, 10) == 11)
	    		values = '<option selected="selected"   value="' + value.id + '">' + value.nom + '</option>';
	    	else
	    		values = '<option   value="' + value.id + '">' + value.nom + '</option>';
	      items.push(values);
	    });

	    $("#user-role").append(items);
	    console.log(items);
	  });

}
                                                            
                           


                                    
