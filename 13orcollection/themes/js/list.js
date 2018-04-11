   
    var path = window.location.pathname;
    var page = path.split("/").pop();


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
    
        $.each( data, function( key, produit ){
         tableau_produit+='<li class="span3"><div class="thumbnail"><a  href="product_details.php?pid='+produit.id+'"><img class="taille-img" src="'+produit.caracteristic[0].image+'" alt=""/></a>';
         tableau_produit+='<div class="caption"><h5>'+produit.nom+'</h5> <p>'+produit.description+'. </p><p>Prix : $'+produit.caracteristic[0].prix+',00 </p><h4 style="text-align:center"><a  href="cart.php?prodid='+produit.id+'" class="btn btn-warning">Ajouter <i class="icon-shopping-cart"></i></a> <button type="button" class="btn btn-sm btn-warning" onclick="detailsmodal('+produit.id+')"><i class="icon-zoom-in"></i></button></h4>';
         tableau_produit+='</div></div></li>';
        
         });
     // affectation des produits dans l'id
     document.getElementById('List_produit').innerHTML=tableau_produit;
});

}