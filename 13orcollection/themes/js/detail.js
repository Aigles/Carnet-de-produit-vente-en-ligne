  
    var path = window.location.pathname;
    var page = path.split("/").pop();
   // var id = GET_PARAM('pid');


    //List personnel all records
    if(page == '' || page == 'product_details.php'){

    

    $.ajax({ 
            url: Fullurl+"produit/",
            type: 'GET', 
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })

    
    .done(function(data) { 
        var tableau_produit="";
    
        $.each( data, function( key, produit ){
         tableau_produit+='<li class="span3"><div class="thumbnail"><a  href="product_details.php"><img class="taille-img" src="themes/images/products/sweater.jpg" alt=""/></a>';
         tableau_produit+='<div class="caption"><h5>'+produit.nom+'</h5> <p>'+produit.description+'. </p><p>Prix : '+produit.prix+'. </p><h4 style="text-align:center"><a  href="cart.php?prodid='+produit.id+'" class="btn btn-warning">Ajouter <i class="icon-shopping-cart"></i></a> <a class="btn btn-warning" href="product_details.php?prodid='+produit.id+'">voir</a></h4>';
         tableau_produit+='</div></div></li>';
        
         });
     // affectation des produits dans l'id
     document.getElementById('detail_produit').innerHTML=tableau_produit;
    
});

}