  
    var path = window.location.pathname;
    var page = path.split("/").pop();
    //var id = GET_PARAM('pid');


  //List personnel all records
  
    
function detailsmodal(id){
    $.ajax({ 
            url: Fullurl+"produit/"+id,
            type: 'GET', 
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })

    
    .done(function(data) {
            var tableau_produit="";
            tableau_produit+='<?php ob_start(); ?>';
            tableau_produit +='<div class="modal-dialog modal-lg"><div class="modal-header"><button class="close" type="button" data-dismiss="modal" aria-label="close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title text-center" style="color: #faa732;">DETAILS</h4>';
            tableau_produit +='</div><div class="modal-body"> <div class="container-modifier"><ul class="thumbnails" style="width:760px; margin-left:10px;"><span id="modal_errors" class="bg-danger"></span><li class="span"><div class="center-block"><img style="width:300px; height: 320px;" src="'+data.caracteristic[0].image+'" class="taille-img" alt="Levis Jean" class="details img-responsive"></div>';
            tableau_produit +='</li><li  class="span"><p><h4>'+data.nom+'</h4></p><hr><p>'+data.description+'</p><hr><p>Prix:&nbsp;   $'+data.caracteristic[0].prix+'.00</p><p>Stock: <span class="badge badge-warning">'+data.nbre_en_stock+'</span></p><form action="add_cart.php" method="post" id="add_product_form"><div class="form-group">';
            tableau_produit +='<label for="quantity">Quantité:</label><input type="number" class="form-control" id="quantity" name="quantity" max="'+data.nbre_en_stock+'" min="1"><br>';
            tableau_produit +='</div><div class="form-group"><label for="size">Taille:</label>';

            tableau_produit +='<select name="size" id="size" class="form-control">';
            $.each(data.caracteristic, function( key, donnee ){
            tableau_produit +='<option value="'+donnee.size+'">'+donnee.size+'</option>';
            });
            tableau_produit +='</select><br><div class="span">&nbsp;</div>';
            tableau_produit +='</div></form></li></ul></div></div><div class="modal-footer"><button class="btn btn-default" data-dismiss="modal">Fermer</button><button class="btn btn-warning" onclick="add_to_cart();return false;"><span class="icon-shopping-cart"></span>Ajouter</button></div></div> '; 
            tableau_produit+='<?php echo ob_get_clean(); ?>';
         // affectation des produits dans l'id
         //$('#details-modal').append(tableau_produit);
         jQuery('#details-modal').append(tableau_produit).modal('toggle');
        //jQuery('#details-modal').modal('toggle');
    });
    
}



// function GET_PARAM(param) { var vars = {}; window.location.href.replace( location.hash, '' ).replace( 
//     /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp 
//     function( m, key, value ) { // callback 
//         vars[key] = value !== undefined ? value : '';
//      } );
//          if ( param ) { return vars[param] ? vars[param] : null;
//          }
//          return vars; 
// } 
        
   