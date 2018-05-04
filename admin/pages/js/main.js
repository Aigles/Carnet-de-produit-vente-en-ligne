//une fonction pour avoir toute les informations sur un module
function getData(url)
{
    var id = parseInt(GET_PARAM('pid'), 10);

    console.log("La valuer de id est: "+id);

    var donne = '';

    if(id != null){

        $.ajax({ 
            url: fullUrl+url+id,
            type: 'GET', 
            dataType: 'json',
            crossDomain: true, 
            Accept : "application/json;charset=UTF-8",
            async: false,
            success: function (rs) {
                this.donne = rs;
            },
            error: function (xhr,status,error) {
                $("#nom-categorie").html("Echec du chargement de "+url);
            }

        });

    }

    return donne;

}


function GET_PARAM(param) { var vars = {}; window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp 
    function( m, key, value ) { // callback 
        vars[key] = value !== undefined ? value : '';
     } );
         if ( param ) 
            return vars[param] ? vars[param] : null;

         return vars; 
} 
