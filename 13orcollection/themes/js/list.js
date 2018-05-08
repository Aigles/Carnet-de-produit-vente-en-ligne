   
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
    if(page == '' || page == 'index.php'|| page == 'user.php'){
        var prodid=GET_PARAM('prodid');


   if ((prodid!=null)&&(prodid!="undefined")) {

     var url=Fullurl+"produit/categorie/"+prodid;
   }else{
    var url=Fullurl+"produit";
}

    $.ajax({ 
            url: url,
            type: 'GET', 
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })


    .done(function(data) { 
        
    
        $.each( data, function( key, produit ){
            if (produit.caracteristic != null) {
                var tableau_produit="";
                 tableau_produit+='<li class="span3"><div class="thumbnail"><a  href="product_details.php?pid='+produit.id+'"><img class="taille-img" src="'+produit.caracteristic[0].image+'" alt=""/></a>';
                 tableau_produit+='<div class="caption"><h5>'+produit.nom+'</h5> <p>En stock: '+produit.nbre_en_stock+'. </p><p>Prix : $'+produit.caracteristic[0].prix+',00 </p><h4 style="text-align:center"><a  href="product_details.php?pid='+produit.id+'" class="btn btn-warning">Details </a> <button type="button" href="'+produit.id+'"class="btn btn-sm btn-warning" onclick="detailsmodal('+produit.id+')"><i class="icon-zoom-in"></i></button></h4>';
                 tableau_produit+='</div></div></li>';

                jQuery('#List_produit').append(tableau_produit);
            }
        
         });
     // affectation des produits dans l'id
     //document.getElementById('List_produit').innerHTML=tableau_produit;
});

}