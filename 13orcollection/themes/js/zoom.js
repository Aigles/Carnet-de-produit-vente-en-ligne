  
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var id = GET_PARAM('pid');


  //List personnel all records
    if(page == '' || page == 'index.php'){

    $.ajax({ 
            url: Fullurl+"produit",
            type: 'GET', 
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })

    
    .done(function(data) {
            var tableau_produit="";
            tableau_produit +='<div class="modal-dialog modal-lg"><div class="modal-header"><button class="close" type="button" data-dismiss="modal" aria-label="close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title text-center">DETAILS</h4>';
            tableau_produit +='</div><div class="modal-body"> <div class="container-modifier"><ul class="thumbnails"><span id="modal_errors" class="bg-danger"></span><li class="span"><div class="center-block"><img style="width:210px; height:360px;" src="nana.jpg " class="taille-img" alt="Levis Jean" class="details img-responsive"></div>';
            tableau_produit +='</li><li class="span"><p><h4 style="color: #faa732;">'+data.nom+'</h4></p><hr><p>'+data.description+'</p><hr><p>PRIX:&nbsp;   $'+data.prix+'.99</p><p>MARQUE: ------</p><form action="add_cart.php" method="post" id="add_product_form"><div class="form-group">';
            tableau_produit +='<label for="quantity">QUANTITÉ:</label><input type="number" class="form-control" id="quantity" name="quantity"><br>';
            tableau_produit +='</div><div class="form-group"><label for="size">TAILLE:</label><select name="size" id="size" class="form-control"><option value="32">32</option><option value="32">31</option><option value="32">30</option></select><br><div class="span3">&nbsp;</div>';
            tableau_produit +='</div></form></li></ul></div></div><div class="modal-footer"><button class="btn btn-default" data-dismiss="modal">Close</button><button class="btn btn-info" onclick="add_to_cart();return false;"><span class="icon-shopping-cart"></span>Ajouter</button></div></div> '; 
            
         // affectation des produits dans l'id
         $('#details-modal').append(tableau_produit);
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
        
        