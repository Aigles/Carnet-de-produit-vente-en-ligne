  
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var id = GET_PARAM('pid');

    //List personnel all records
    if(page == '' || page == 'index.php'|| page == 'user.php' || page == 'inscription.php' || page == 'product_details.php' || page == 'login.php'){

    

    $.ajax({ 
            url: Fullurl+"categorie",
            type: 'GET', 
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })
    
    .done(function(data){

            
           // var tableau_caracteristic="";
        $.each( data, function( key, categorie ){
            tableau_caracteristic = '<option><a href="index.php?prodid='+categorie.id+'">'+categorie.type+'</a></option>';
            // affectation des produits dans l'id
         
            jQuery('.srchTxt#search').append(tableau_caracteristic);
         
        
        });
        //document.getElementById('sideMnu').innerHTML=tableau_caracteristic;
    });
}

function GET_PARAM(param) { var vars = {}; window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp 
    function( m, key, value ) { // callback 
        vars[key] = value !== undefined ? value : '';
     } );
         if ( param ) { return vars[param] ? vars[param] : null;
         }
         return vars; 
        } 
  
        