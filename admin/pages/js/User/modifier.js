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
                                                            
                           


