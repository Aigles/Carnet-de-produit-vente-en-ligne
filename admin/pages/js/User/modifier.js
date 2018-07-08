var url = 'utilisateur/';
var rolle = '';
var id = GET_PARAM('pid');

	$.ajax({

		url: fullUrl+url+id,
	    type: 'GET', 
	    dataType: 'json',
	    crossDomain: true, 
	    Accept : "application/json;charset=UTF-8",
	    async: false,
	    success: function (data) {

	    	console.log(JSON.stringify(data));

	    	$('#user-id').val(data.id);
	    	$('#user-nom').val(data.nom);
	    	$('#user-prenom').val(data.prenom);
	    	$('#user-email').val(data.email);
	    	console.log(data.role_id);
	    	getRole(data.role_id);

	        
	    },
	    error: function (xhr,status,error) {
	        $("#nom-categorie").html("Echec du chargement de "+url);
	    }

	});

function GET_PARAM(param) { var vars = {}; window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp 
    function( m, key, value ) { // callback 
        vars[key] = value !== undefined ? value : '';
     } );
         if ( param ) 
            return vars[param] ? vars[param] : null;

         return vars; 
} 

function getRole(option)
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

	    	console.log("value are "+value.id);
	    	if(value.id == option)
	    		values = '<option selected="selected"   value="' + value.id + '">' + value.nom + '</option>';
	    	else
	    		values = '<option   value="' + value.id + '">' + value.nom + '</option>';
	      items.push(values);
	    });

	    $("#user-role").append(items);
	    console.log(items);
	  });

}
                                                            
function modifierUtilisateur()
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
    var IdUser=sessionStorage.getItem("id_user_vente_en_ligne");
  	user.nom = $("#user-nom").val();
  	user.prenom = $("#user-prenom").val();
  	user.avatar = $("#user-avatar").val();
  	user.id =parseInt(IdUser);

  	data = JSON.stringify(user);

  	console.log(data);

  	var url = fullUrl+'modifierUtilisateur';

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
                   


