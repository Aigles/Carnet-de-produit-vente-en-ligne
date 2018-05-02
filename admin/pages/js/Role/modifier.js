var id = parseInt(GET_PARAM('pid'), 10);
$(document).ready(function(){

    $.ajax({ 
        url: fullUrl+"rolle/"+id,
        type: 'GET', 
        dataType: 'json',
        crossDomain: true, 
        Accept : "application/json;charset=UTF-8",
        success: function (rs) {
        //console.log("Status: "+JSON.stringify(rs));
          $("#nom-rolle").val(rs.nom);
          $("#description-rolle").val(rs.description);
        },
        error: function (xhr,status,error) {
          $("#nom-categorie").html("Aucune categorie n'est enregistre dans la base");
        }

    });

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

function modifierRolle(){

    var role ={};
    
    role.id = parseInt(id);

    role.nom = $("#nom-rolle").val();

    role.description = $("#description-rolle").val();

    var url=fullUrl+"modifierRolle";

    data = JSON.stringify(role);
    
    updateData(data, url);

}

    
function updateData(data, url){

    console.log("Status: "+JSON.stringify(data));
    
    $.ajax({ 
        url: url,
        type: 'POST', 
        dataType: 'json', 
        crossDomain: true,
        data: data,
        success: function (rs) {      
            $('#result-title').html('Reultat de l\'operation');
            $('#result-info').html(rs.status);
            $.when($('#myModal').modal('show').delay(100)).done(function(){
                window.location = "index.php?p=listerRole";
            });   
        },
        error: function (xhr,status,error) {
            $('#result-title').html('Reultat de l\'operation');
            $('#result-info').html('Echec de l\'operation encour');
            $.when($('#myModal').modal('show').delay(100)).done(function(){
                location.reload();
            });  
            //console.log("Echec: "+JSON.stringify(xhr)); 
        }

    });

}

