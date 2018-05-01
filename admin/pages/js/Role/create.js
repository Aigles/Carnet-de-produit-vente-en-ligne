



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

  	

  	url = fullUrl+'creerRole';
     = JSON.stringify(Role);
  	sendData(url,data);

  	
}



function sendData(url, data)
{
	//transfer des donnees pour etre sauvegarder
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
                //  if (rs.id!=0) {
                // window.location = "index.php";  }
            }); 
            
             
          
        },
        error: function (xhr,status,error) {
            $('#result-title').html('Reultat de l\'operation');
            $('#result-info').html('Echec de l\'operation encour');
            $('#myModal').modal('show');
            console.log("Status: " + status);
            console.log("Error: " + error);
            console.log("xhr: " + JSON.stringify(xhr));
        }

    });
         

}