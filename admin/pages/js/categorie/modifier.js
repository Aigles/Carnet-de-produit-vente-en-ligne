$(document).ready(function(){

    var id = GET_PARAM('pid');
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

    var categorie ={};
    
    categorie.type=$('#nom-categorie').val();  
    data=JSON.stringify(categorie);

    console.log( data);
    var url=fullUrl+"modifiercategorie";
    updateData(data, url);

}

    
function updateData(data, url){
    
    $.ajax({ 
        url: url,
        type: 'PUT', 
        dataType: 'json', 
        crossDomain: true,
        data: data,
        success: function (rs) {
          alert(data.status);
          $("#content").load('categorie/liste.html');
        },
        error: function (xhr,status,error) {
            console.log("Status: " + status);
            console.log("Error: " + error);
            console.log("xhr: " + JSON.stringify(xhr));
        }

    })

    /*done(function(data) { 
        alert(data.status);
        $("#content").load('categorie/liste.html');
    }).fail(function(error){  
        // alert("requete échouée !")
        if (error.status==404) {
            //window.location = "./login.html";                    
        }
    });*/


}
 