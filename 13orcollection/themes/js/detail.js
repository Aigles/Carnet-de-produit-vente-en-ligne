  
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var id = GET_PARAM('pid');


    //List personnel all records
    if(page == '' || page == 'product_details.php'){

    

    $.ajax({ 
            url: Fullurl+"produit/"+id,
            type: 'GET', 
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })

    
    .done(function(data) { 
        var tableau_produit="";
            tableau_produit += '<div class="span12"><ul class="breadcrumb"><li><a href="index.php">Acceuil</a><span class="divider">/</span></li><li class="active"> Details produit</li></ul>';

            tableau_produit += ' <div class="row"><div id="gallery" class="span4"><a href="themes/images/products/large/f1.jpg" title="Fujifilm FinePix S2950 Digital Camera"><div ><img  id="principale_image" src="'+data.caracteristic[0].image+'" style="width:100%" alt="Fujifilm FinePix S2950 Digital Camera"/></div>';
            tableau_produit += '</a><div id="differentview" class="moreOptopm carousel slide"><div class="carousel-inner"><div class="item active">';
                   $.each(data.caracteristic, function( key, donnee ){
            tableau_produit +=' <a ><img style="width:29%" src="'+donnee.image+'" alt="" onclick="changerImage(\''+donnee.image+'\')"/></a>';
            });
            tableau_produit += '</div><div class="item"><a href="themes/images/products/large/f3.jpg" > <img style="width:29%" src="themes/images/products/large/f3.jpg" alt=""/></a><a href="themes/images/products/large/f1.jpg"> <img style="width:29%" src="themes/images/products/large/f1.jpg" alt=""/></a><a href="themes/images/products/large/f2.jpg"> <img style="width:29%" src="themes/images/products/large/f2.jpg" alt=""/></a>';
            tableau_produit +='</div></div></div></div>';

            tableau_produit +='<div class="span7"> <h3>'+data.nom+'</h3><small>- Bienvenue! veuillez faire un achat</small><hr class="soft"/><form class="form-horizontal qtyFrm"><div class="control-group"><label class="control-label"><span>Prix : $'+data.caracteristic[0].prix+'.00</span></label>';
            tableau_produit +='<div class="controls"><input type="number" class="span1" placeholder="Qty." max="'+data.nbre_en_stock+'" min="1"/><button type="submit" class="btn btn-large btn-warning pull-right"> Ajouter <i class=" icon-shopping-cart"></i></button>';
            tableau_produit +='</div> </div></form><hr class="soft"/><h4>'+data.nbre_en_stock+' element(s) en stock</h4><form class="form-horizontal qtyFrm pull-right"><div class="control-group"><label class="control-label"><span>couleur</span></label><div class="controls">';
            tableau_produit +='<select class="span2">';
                     $.each(data.caracteristic, function( key, donnee ){
            tableau_produit +='<option>'+donnee.couleur+'</option>';
  });
            tableau_produit +='</select></div></div></form><hr class="soft clr"/><p><h2>Description de '+data.nom+'</h2><br/>'+data.description;
            tableau_produit +='</p><a class="btn btn-small pull-right" href="#detail">More Details</a><br class="clr"/><a href="#" name="detail"></a><hr class="soft"/>';
        
     // affectation des produits dans l'id
     document.getElementById('detail_produit').innerHTML=tableau_produit;
    
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
        

    function changerImage(argument) {
        jQuery('#principale_image').attr("src",argument);
         // alert(argument)
    }
        