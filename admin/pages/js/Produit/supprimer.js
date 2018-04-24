
function deleteProduit()
{
    console.log(GET_PARAM('pid'));
    $.ajax({ 
        url: 'deleteproduit/'+GET_PARAM('pid'),
        type: 'DELETE',
        success: function(rs){
            alert("Suppression reuissite");
        },
        error: function(request,msg,error){
            alert(error);
        }
    });

}
deleteProduit();

function GET_PARAM(param) { var vars = {}; window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp 
    function( m, key, value ) { // callback 
        vars[key] = value !== undefined ? value : '';
     } );
         if ( param ) { return vars[param] ? vars[param] : null;
         }
         return vars; 
}