var path = window.location.pathname;
var page = path.split("/").pop();


//Delete personnel record 
// function deleteRecord(personnelId){
    
// }

//List personnel all records
if(page == '' || page == 'index.php'){

//alert("ListeVetement.html")

    $.ajax({ url: Fullurl+"produit",
        type: 'GET', 
        dataType: 'json', 
        Accept : "application/json;charset=UTF-8"
                })
    .done(function(data) { 
  
     var itemsProduit = [];
    
     $.each( data, function( key, produit ) {

     tableau_produit='<li class="span3"><div class="thumbnail"><a  href="product_details.html"><img class="taille-img" src="themes/images/products/sweater.jpg" alt=""/></a>';
     tableau_produit+='<div class="caption"><h5>'+produit.nom+'</h5> <p>'+produit.description+'. </p><h4 style="text-align:center"><a  href="product_details.html?prodid='+produit.id+' class="btn btn-warning">Ajouter <i class="icon-shopping-cart"></i></a> <a class="btn btn-warning" href="href="product_details.html?prodid='+produit.id+'">voir</a></h4>';
      tableau_produit+='</div></div></li>';

     
     itemsProduit.push(tableau_produit);
 
    });
     document.getElementById('List_produit').innerHTML=itemsProduit;

  
    });

 }
