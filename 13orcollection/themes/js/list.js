   
    var path = window.location.pathname;
    var page = path.split("/").pop();



function GET_PARAM(param) { var vars = {}; window.location.href.replace( location.hash, '' ).replace(  
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp 
    function( m, key, value ) { // callback 
        vars[key] = value !== undefined ? value : '';
     } );
         if ( param ) { return vars[param] ? vars[param] : null;
         }
         return vars; 
        } 


    //List personnel all records
    if(page == '' || page == 'index.php'){
        var prodid=GET_PARAM('prodid');


   if ((prodid!=null)&&(prodid!="undefined")) {

     var url=Fullurl+"produit/categorie/"+prodid;
   }else{
    var url=Fullurl+"produit";
}

    $.ajax({ 
            url: url,
            type: 'GET', 
            cache:false,
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })


    .done(function(data) { 
        
    
        $.each( data, function( key, produit ){
            if (produit.caracteristic != null) {
                var tableau_produit="";
                 tableau_produit+='<li class="span3"><div class="thumbnail"><a href="index.php?p=detail&pid='+produit.id+'"><img class="taille-img" src="'+produit.caracteristic[0].image+'" alt=""/></a>';
                 tableau_produit+='<div class="caption"><h5>'+produit.nom+'</h5> <p>En stock: '+produit.nbre_en_stock+' </p><p>Prix : HTG '+produit.caracteristic[0].prix+'</p><h4 style="text-align:center"><a href="cart.php" class="btn btn-warning  ajouter-panier"  data-image="'+produit.caracteristic[0].image+'" data-nom="'+produit.nom+'" data-prix="'+produit.caracteristic[0].prix+'">Ajouter <span class="icon-shopping-cart"></span> </a> <button type="button" href="'+produit.id+'" class="btn btn-sm btn-warning" onclick="detailsmodal('+produit.id+');"><i class="icon-zoom-in"></i></button></h4>';
                 tableau_produit+='</div></div></li>';

                jQuery('#List_produit').append(tableau_produit);
            }
        
         });

         $('.ajouter-panier').click(function(event) {
            event.preventDefault();
            var nom = $(this).data('nom');
            var prix = Number($(this).data('prix'));
            var qte = 1; 
            var image =$(this).data('image'); 
            MonPanier.ajouter_produit_dans_panier(nom, prix,qte,image);
            afficherpanier();
        });
     // affectation des produits dans l'id
     //document.getElementById('List_produit').innerHTML=tableau_produit;
});

}


  //List personnel all records
  if(page == '' || page == 'index.php'|| page == 'cart.php'){
    var prodid=GET_PARAM('prodid');


var url=Fullurl+"produit/limite";
// }

$.ajax({ 
        url: url,
        type: 'GET', 
        dataType: 'json', 
        Accept : "application/json;charset=UTF-8"
        })


.done(function(data) { 
    var compteur=0;

    $.each( data, function( key, produit ){

        if (produit.caracteristic != null) {
            compteur=compteur+1;
       
            var tableau_produit="";
              
            if (compteur<=4){
            tableau_produit=' <li class="span3"><div class="thumbnail"><a  href="index.php?p=detail&pid='+produit.id+'"><img class="taille-img" src="'+produit.caracteristic[0].image+'" alt=""/></a>';
            tableau_produit+='<div class="caption"><h5>'+produit.nom+'</h5> <h4><a  href="product_details.php?pid='+produit.id+'" class="btn btn-warning ajouter-panier"  data-image="'+produit.caracteristic[0].image+'" data-nom="'+produit.nom+'" data-prix="'+produit.caracteristic[0].prix+'">Ajouter <span class="icon-shopping-cart"></span></a><span  class="pull-right">HTG '+produit.caracteristic[0].prix+' </span></h4>';
            tableau_produit+='</div></div></li>';
           
            jQuery('#recent_produit_active').append(tableau_produit);
            }

        }
    
     });
     var compteur=0;
     var items="";
     $.each( data, function( key, produit ){

        if (produit.caracteristic != null) {
            compteur=compteur+1;
       
            var tableau_produit="";


            
             tableau_produit+=' <li class="span3"><div class="thumbnail"><a  href="index.php?p=detail&pid='+produit.id+'"><img class="taille-img" src="'+produit.caracteristic[0].image+'" alt=""/></a>';
             tableau_produit+='<div class="caption"><h5>'+produit.nom+'</h5> <h4><a  href="cart.php" class="btn btn-warning ajouter-panier"  data-image="'+produit.caracteristic[0].image+'" data-nom="'+produit.nom+'" data-prix="'+produit.caracteristic[0].prix+'">Ajouter <span class="icon-shopping-cart"></span></a><span  class="pull-right">HTG '+produit.caracteristic[0].prix+' </span></h4>';
             tableau_produit+='</div></div></li>';

            items=items+tableau_produit;
             if(compteur<=4){
                jQuery('#recent_produit').append(tableau_produit);
            }    
            else{
            jQuery('#recent_produit_2').append(tableau_produit);
            } 
           

        }
    
     });  
   console.log(items);
   $('.ajouter-panier').click(function(event) {
    event.preventDefault();
    var nom = $(this).data('nom');
    var prix = Number($(this).data('prix'));
    var qte = 1; 
    var image =$(this).data('image'); 
    MonPanier.ajouter_produit_dans_panier(nom, prix,qte,image);
    // location.reload();
    afficherpanier();
    
});
 // affectation des produits dans l'id
 //document.getElementById('List_produit').innerHTML=tableau_produit;
});

}






function detailsmodal(id){

    $.ajax({ 
            url: Fullurl+"produit/"+id,
            type: 'GET', 
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })

    
    .done(function(data) {
            var tableau_produit="";
            tableau_produit +='<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button class="close" type="button" onclick="closeModal(); return false;" aria-label="close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title text-center" style="color: #faa732;">DETAILS</h4>';
            tableau_produit +='</div><div class="modal-body" id="vetement_details"> <div class="container-modifier"><ul class="thumbnails" style="width:760px; margin-left:10px;"><span id="modal_errors" class="bg-danger"></span><li class="span"><div class="center-block"><img style="max-width:300px; height: 320px;" src="'+data.caracteristic[0].image+'" class="taille-img" alt="Levis Jean" class="details img-responsive"></div>';
            tableau_produit +='</li><li  class="span"><p><h4>'+data.nom+'</h4></p><hr><p>'+data.description+'</p><hr><p>Prix:&nbsp;<span class="badge badge-warning"> HTG '+data.caracteristic[0].prix+'</span></p><p>Stock: <span class="badge badge-warning">'+data.nbre_en_stock+'</span></p><form action="add_cart.php" method="post" id="add_product_form"><div class="form-group">';
            tableau_produit +='<label for="quantity">Quantité:</label><input type="number" class="form-control" value="1" id="quantity" name="quantity" max="'+data.nbre_en_stock+'" min="1"><br>';
            tableau_produit +='</div><div class="form-group"><label for="size">Taille:</label>';

            tableau_produit +='<select name="size" id="size" class="form-control">';
            $.each(data.caracteristic, function( key, donnee ){
            tableau_produit +='<option value="'+donnee.size+'">'+donnee.size+'</option>';
            });
            tableau_produit +='</select><br><div class="span">&nbsp;</div>';
            tableau_produit +='</div></form></li></ul></div></div><div class="modal-footer"><button class="btn btn-default" onclick="closeModal();">Fermer</button><button class="btn btn-warning ajouter-cart" data-image="'+data.caracteristic[0].image+'" data-nom="'+data.nom+'" data-prix="'+data.caracteristic[0].prix+'"><span class="icon-shopping-cart"></span>Ajouter</button></div></div></div> '; 
          // affectation des produits dans l'id
            //jQuery('#details-modal').append(tableau_produit);
            //jQuery('.jeyda').modal('toggle');
            $('#details-modal').append(tableau_produit).modal('toggle');

     $('.ajouter-cart').click(function(event) {
        event.preventDefault();
        var nom = $(this).data('nom');
        var prix = Number($(this).data('prix'));
        var qte = 1; 
        var image =$(this).data('image'); 
        MonPanier.ajouter_produit_dans_panier(nom, prix,qte,image);
        afficherpanier();
      });
        //      $('.ajouter-panier').click(function(event) {
        //     event.preventDefault();
        //     var nom = $(this).data('nom');
        //     var prix = Number($(this).data('prix'));
        //     var qte = 1; 
        //     var image =$(this).data('image'); 
        //     MonPanier.ajouter_produit_dans_panier(nom, prix,qte,image);
        //     afficherpanier();
        // });
     
    });
    
}

//onclick="add_to_cart();return false;"