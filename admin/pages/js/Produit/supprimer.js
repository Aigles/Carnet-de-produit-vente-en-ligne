function GET_PARAM(param) { var vars = {}; window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp 
    function( m, key, value ) { // callback 
        vars[key] = value !== undefined ? value : '';
     } );
         if ( param ) { return vars[param] ? vars[param] : null;
         }
         return vars; 
}

function deleteProduit()
{
	$.ajax({ 
        url: 'deleteproduit/'+GET_PARAM('id'),
        type: 'DELETE', 
        dataType: 'json', 
        crossDomain: true,

    }).done(function(data) { 
        alert("produit supprimer");
    }).fail(function(error){  
        alert('echec de la suppression');
    });

}
deleteProduit();