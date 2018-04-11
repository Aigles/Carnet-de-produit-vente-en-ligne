   
    var path = window.location.pathname;
    var page = path.split("/").pop();


    //List personnel all records
    if(page == '' || page == 'product_details.php?prodid='+produit.id+''){

    

    $.ajax({ 
            url: Fullurl+"produit",
            type: 'GET', 
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })

    .done(function(data) { 
        var tableau_produit="";
    

         tableau_produit+='<h3> '+produit.nom+' </h3>';
        
        
     // affectation des produits dans l'id
     document.getElementById('detail_produit').innerHTML=tableau_produit;
    
});

}