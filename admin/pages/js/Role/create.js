



function creerRole()
{
	//validatiion du formulaire pour la creation d'un role
  	var $valid,
  		$validator,
  		data,
  		url;

  	$validator = $('#save_role form').validate();
  	
  	$valid = $('#save_role form').valid();
  	
  	if (!$valid) {
    	$validator.focusInvalid();
    	return false;
  	}

  	//creation d'un objet Role
  	var Role = {};

  	Role.nom = $("#nom-role").val();
  	
  	Role.description = $("#description-role").val();

  	data = JSON.stringify(Role);

  	url = fullUrl+'creerRole';

  	sendData(url, data);

  	
}



function sendData(url, data)
{
	//transfer des donnees pour etre sauvegarder
	$.ajax({
		url : url,
		daType: 'json',
		crossDomain : 'true',
		data : data,
		success : function(){

		},
		error : function(){
			
		}


	});

}