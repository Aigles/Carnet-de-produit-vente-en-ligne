  
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var id = GET_PARAM('pid');
    var strings= "  ";


    //List personnel all records
    if(page == '' || page == 'index.php'){

    

    $.ajax({  
            url: Fullurl+"produit/"+id,
            type: 'GET', 
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })

    
    .done(function(data) { 
        var tableau_produit="";
            tableau_produit += '<div class="span12"><ul class="breadcrumb"><li><a href="index.php">Acceuil</a><span class="divider">/</span></li><li class="active"> Details produit</li></ul>';

            tableau_produit += ' <div class="row"><span id="modal_errors" class="bg-danger"></span><div id="gallery" class="span4"><a href="themes/images/products/large/f1.jpg" title="'+data.nom+'"><div ><img  id="principale_image" src="'+data.caracteristic[0].image+'" style="width:392px height:588px" alt=""/></div>';
            tableau_produit += '</a><div id="differentview" class="moreOptopm carousel slide"><div class="carousel-inner"><div class="item active">';
            
            $.each(data.caracteristic, function( key, donnee ){
                tableau_produit +=' <a ><img style="width:29%; height: 29%;" src="'+donnee.image+'" alt="" onmouseover="changerImage(\''+donnee.image+'\')"/></a>';
                tableau_produit +=' <a ><img style="width:29%; height: 29%;" src="'+donnee.image_1+'" alt="" onmouseover="changerImage(\''+donnee.image_1+'\')"/></a>';
                });
            
            tableau_produit +='</div></div></div></div><div class="span7"> <h3>'+data.nom+'</h3><small>- Bienvenue! veuillez faire un achat</small><hr class="soft"/><form  method="POST" id="add_product_form" class="form-horizontal qtyFrm"><input type="hidden" name="product_id" value="'+data.id+'"><input type="hidden" name="available" id="available" value="'+data.nbre_en_stock+'"><div class="control-group"><label class="control-label"><span>Prix : $'+data.caracteristic[0].prix+'.00</span></label>';
            tableau_produit +='<button type="button" class="btn btn-large btn-warning pull-right ajouter-panier"  data-image="'+data.caracteristic[0].image+'" data-nom="'+data.nom+'" data-prix="'+data.caracteristic[0].prix+'">Ajouter <span class="icon-shopping-cart"></span></button>';
            // ========== partie Size =============
            tableau_produit +='<label class="control-label" for="size"><span>Size :</span></label>';
            tableau_produit +='<select name="size" class="span1" id="size">';

            $.each(data.caracteristic, function( key, donnee ){
               tableau_produit +='<option data-available="'+data.nbre_en_stock+'" value="'+donnee.size+'" onclick="changerInfo(\''+donnee.id+'\')">'+donnee.size+'</option>';
                });

            tableau_produit +='</select> <span> </span><input type="number" class="span1" value="1" id="quantity" name="quantity" placeholder="Quantité." max="'+data.nbre_en_stock+'" min="1"/>  </div><hr class="soft"/><h5>Élement(s) en stock :  <span class="badge badge-warning">'+data.nbre_en_stock+'</span></h5><label class="control-label for="couleur"><span>Couleur :</span></label><div class="controls">';
            tableau_produit +='<p><select class="span2" name="couleur" id="couleur">';

            $.each(data.caracteristic, function( key, donnee ){
                tableau_produit +='<option id="couleur" onclick="changerInfo(\''+donnee.id+'\')">'+donnee.couleur+'</option>';
                });
            tableau_produit +='</select></a></div></form><hr class="soft clr"/><p><h3>Description de '+data.nom+'</h3><br/>'+data.description;
            tableau_produit +='</p><hr class="soft"/>';
        
     // affectation des produits dans l'id
     document.getElementById('detail_produit').innerHTML=tableau_produit;

     $('.ajouter-panier').click(function(event) {
        event.preventDefault();
        var nom = $(this).data('nom');
        var prix = Number($(this).data('prix'));
        var qte = Number($("#quantity").val()); 
        var image =$(this).data('image'); 
        MonPanier.ajouter_produit_dans_panier(nom, prix,qte,image);
        afficherpanier();
      });
    
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
    function changerInfo(argument) {
        //jQuery('#detail_produit').attr("src",argument);
          alert(argument)
    }
    
    function add_to_cart(){
    //alert("Votre produit a bien été ajouté dans le panier!");
    jQuery('#modal_errors').html("");
    var size = jQuery('#size').val();
    var couleur = jQuery('#couleur').val();
    var quantity = jQuery('#quantity').val();
    var available = jQuery('#available').val();
    var error = '';
    var data = jQuery('#add_product_form').serialize();
    if(quantity < 0 || quantity == '' || quantity == 0){
      error += '<div class=\'alert alert-danger text-center\'><a href=\'#\' class=\'close\' data-dismiss=\'alert\' aria-label=\'close\'>&times;</a><b>Vous devez saisir une quantité valide..!</b></div>';
      jQuery('#modal_errors').html(error);
      return;
    }
    else if(quantity > available){
      valide += '<div class=\'alert alert-succes text-center\'><a href=\'#\' class=\'close\' data-dismiss=\'alert\' aria-label=\'close\'>&times;</a><b>produit ajouté dans le panier.!</b></div>';
      jQuery('#modal_errors').html(valide);
      return;
    }
    else{
        jQuery.ajax({
            url : realpath('./../../cart.php'),
            type : 'POST',
            data : data,
            success : function(){
				location.reload();
			},
            error : function(){alert("Something went wrong"); }
        });
    }
}
    
    jQuery('#size').change(function(){
        var available = jQuery('#size option:selected').data("available");
        jQuery('#available').val(available);
    }); 



    // $('#ajouter-panier').click(function(event) {
    //     alert("ggfdfg");
    //     event.preventDefault();
    //     var nom = $(this).data('nom');
    //     var prix = Number($(this).data('prix'));
    //     MonPanier.ajouter_produit_dans_panier(nom, prix, 1);
    //     afficherpanier();
    //   });
 