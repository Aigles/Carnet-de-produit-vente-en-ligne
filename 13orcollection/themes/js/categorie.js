  
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var id = GET_PARAM('pid');
<<<<<<< HEAD

=======
    var compterCategorie = 0;
>>>>>>> a89f47a70b31c57de175254f724880d5d4b6172b

    //List personnel all records
    if(page == '' || page == 'index.php'){

    

    $.ajax({ 
            url: Fullurl+"categorie",
            type: 'GET', 
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })
    
    .done(function(data){

        $.each( data, function( key, categorie ){
            
            var tableau_caracteristic="";
<<<<<<< HEAD
=======

>>>>>>> a89f47a70b31c57de175254f724880d5d4b6172b
            tableau_caracteristic += '<li id="sidheMnu" ><a class="active" href="index.php?prodid='+categorie.id+'">'+categorie.type+'</a></li>';
            // affectation des produits dans l'id
         
            jQuery('#sideMnu').append(tableau_caracteristic);
<<<<<<< HEAD
          
        
        });
=======
          compterCategorie = compterCategorie + 1;
        
        });
        jQuery('.subMenu.open').append('<a style="color:#faa732; text-align:center;"> CATÉGORIES ['+compterCategorie+']</a>')
>>>>>>> a89f47a70b31c57de175254f724880d5d4b6172b
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
  
        