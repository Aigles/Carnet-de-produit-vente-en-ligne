var id = parseInt(GET_PARAM('pid'), 10);
$(document).ready(function(){

    console.log(id);
    $.ajax({ 
        // url: Fullurl+"produit",
        url: fullUrl+"categorie/"+id,
        type: 'GET', 
        dataType: 'json',
        crossDomain: true, 
        Accept : "application/json;charset=UTF-8",
        success: function (rs) {
          console.log(JSON.stringify(rs));
          $("#nom-categorie").val(rs.type);
        },
        error: function (xhr,status,error) {
            console.log("Status: " + status);
            console.log("Error: " + error);
            console.log("xhr: " + JSON.stringify(xhr));
        }

    });

});


function GET_PARAM(param) { var vars = {}; window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp 
    function( m, key, value ) { // callback 
        vars[key] = value !== undefined ? value : '';
     } );
         if ( param ) { 
            
           

            return vars[param] ? vars[param] : null;
         }
         return vars; 
} 

function modifierCategorie(){

    var category ={};
    
    category.Type=$('#nom-categorie').val();
    category.Id = id;
    data=JSON.stringify(category);

    console.log( data);
    var url=fullUrl+"modifiercategorie";
    updateData(data, url);

}

    
function updateData(data, url){
    
    $.ajax({ 
        url: url,
        type: 'POST', 
        dataType: 'json', 
        crossDomain: true,
        data: data,
        success: function (rs) {      
            $('#result-title').html('Reultat de l\'operation');
            $('#result-info').html(rs.status);
            $.when($('#myModal').modal('show').delay(3000)).done(function(){
                window.location = "index.php?p=listerCategorie";
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

