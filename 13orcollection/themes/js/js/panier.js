// Mon petit panier
// http://blog.1formatik.com 
// true pour activer la fonctionnalité de commande par lot, false pour la désactiver
  
var path = window.location.pathname;
var page = path.split("/").pop();

var Qte_Minimum = true;

// la quantité des lots
var Qte_Minimum_Valeur = 1; 

// les messages
// var txt_qte_minimum_bad = "<font color='red'>Attention les quantités ne sont pas correctes, les commandes se font par lot de 6 bouteilles</font>";
// var txt_qte_minimum_ok = "<font color='green'>Le nombre de bouteilles est correcte</font>";
// var txt_qte_minimum_defaut = "Les commandes se font par lot de 6 bouteilles";
//alert("ghhhhhhhhhhhhhhhhhhhhhhh");
// ne pas modifier la suite sauf si vous désirez modifier le code
var MonPanier = (function() {

panier = [];
function Item(nom, prix, count) {

this.nom = nom;
this.prix = prix;
this.count = count;
}

function savepanier() {
sessionStorage.setItem('MonPanier', JSON.stringify(panier));
}

function loadpanier() {
panier = JSON.parse(sessionStorage.getItem('MonPanier'));
}
if (sessionStorage.getItem("MonPanier") != null) {
loadpanier();
}

var obj = {};

obj.ajouter_produit_dans_panier = function(nom, prix, count) {
for(var item in panier) {
  if(panier[item].nom === nom) {
	panier[item].count ++;
	savepanier();
	return;
  }
}
var item = new Item(nom, prix, count);
panier.push(item);
savepanier();
}

obj.setCountForItem = function(nom, count) {
for(var i in panier) {
  if (panier[i].nom === nom) {
	panier[i].count = count;
	break;
  }
}
};

obj.enlever_produit_de_panier = function(nom) {
  for(var item in panier) {
	if(panier[item].nom === nom) {
	  panier[item].count --;
	  if(panier[item].count === 0) {
		panier.splice(item, 1);
	  }
	  break;
	}
}
savepanier();
}

obj.enlever_produit_de_panier_tous = function(nom) {
for(var item in panier) {
  if(panier[item].nom === nom) {
	panier.splice(item, 1);
	break;
  }
}
savepanier();
}

obj.clearpanier = function() {
panier = [];
savepanier();
}

obj.totalCount = function() {
var totalCount = 0;
for(var item in panier) {
  totalCount += panier[item].count;
}
return totalCount;
}

obj.totalpanier = function() {
var totalpanier = 0;
for(var item in panier) {
  totalpanier += panier[item].prix * panier[item].count;
}
return Number(totalpanier.toFixed(2));
}

obj.listpanier = function() {
var panierCopy = [];
for(i in panier) {
  item = panier[i];
  itemCopy = {};
  for(p in item) {
	itemCopy[p] = item[p];

  }
  itemCopy.total = Number(item.prix * item.count).toFixed(2);
  panierCopy.push(itemCopy)
}
return panierCopy;
}

return obj;
})();

// $('#ajouter-panier').click(function(event) {
//   event.preventDefault();
//   var nom = $(this).data('nom');
//   var prix = Number($(this).data('prix'));
//   MonPanier.ajouter_produit_dans_panier(nom, prix, 1);
//   afficherpanier();
// });

$('.clear-panier').click(function() {
  MonPanier.clearpanier();
  afficherpanier();
});

function afficherpanier() {

  var panierArray = MonPanier.listpanier();
  var output = "";

  if(panierArray.length==0){
    $('.show-panier').html("Votre panier est vide pour le moment.</br>Mais vous avez des vetements mis de côté pour un achat ultérieur. Pour en acheter un ou plus maintenant, cliquez sur Mettre dans le panier au bas du vetement.");
    $('.total-count').html(MonPanier.totalCount());
    return false;
  }
 
  
  for(var i in panierArray) {

   
    output +='<tr><td class="col-sm-8 col-md-6"><div class="media"><a class="thumbnail pull-left" href="#"> <img class="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style="width: 72px; height: 72px;"> </a><div class="media-body">'
            +'<h4 class="media-heading"><a href="#">' + panierArray[i].nom + '</a></h4>'
           +'<h5 class="media-heading"> by <a href="#">Brand name</a></h5></div></div></td><td class="col-sm-1 col-md-1" style="text-align: center"> <div><button class="moins-item btn btn-warning" data-nom="' + panierArray[i].nom + '">-</button>'
      + '<input type="number" min="1" width="20px" class="item-count" data-nom="' + panierArray[i].nom + '" value="' + panierArray[i].count + '">'
      + '<button class="plus-item btn btn-warning" data-nom="' + panierArray[i].nom + '">+</button></div></td><td class="col-sm-1 col-md-1 text-center"><strong>$'+ panierArray[i].prix.toFixed(2) + '</strong></td><td class="col-sm-1 col-md-1 text-center"><strong>$' + panierArray[i].total + '</strong></td><td class="col-sm-1 col-md-1">'
      +'<button type="button" class="btn btn-danger effacer-item" data-nom="' + panierArray[i].nom + '"><span class="glyphicon glyphicon-remove"></span> Remove</button></td></tr>'

    {/* "<tr class='col-sm-8 col-md-6'>"
      + "<td>" + panierArray[i].nom + "</td>" 
      + "<td>(" + panierArray[i].prix.toFixed(2) + ")</td>"
      + "<td><div><button class='moins-item' data-nom='" + panierArray[i].nom + "'>-</button>"
      + "<input type='number' min='1' class='item-count' data-nom='" + panierArray[i].nom + "' value='" + panierArray[i].count + "'>"
      + "<button class='plus-item' data-nom='" + panierArray[i].nom + "'>+</button></div></td>"
      + "<td><button class='effacer-item' data-nom='" + panierArray[i].nom + "'>X</button></td>"
      + " = " 
      + "<td>" + panierArray[i].total + "</td>" 
      +  "</tr>"; */}
  }

  output +='<tr><td>   </td><td>   </td><td>   </td><td><h3>Total</h3></td><td class="text-right" ><h3>$<strong class="total-panier" id="prix_total">31.53</strong></h3></td></tr>';
  output +='<tr><td>   </td><td>   </td><td> <button class="clear-panier btn btn-warning">Vider le panier</button>  </td><td><span>  </span><button type="button" class="btn btn-default"><span class="glyphicon glyphicon-shopping-cart"></span> Continue Shopping</button></td><td>';
  output +='<button type="button" class="btn btn-success"> Checkout <span class="glyphicon glyphicon-play"></span></button></td></tr>';
  
  $('.total-count').html(MonPanier.totalCount());
  if(page == '' || page == 'cart.php'){
  $('.show-panier').html(output);
  $('.total-panier').html(MonPanier.totalpanier());

  // if ((Qte_Minimum == true) && (Number.isInteger(MonPanier.totalCount() / Qte_Minimum_Valeur) == false) && (MonPanier.totalCount() != 0))
  // {
	// document.getElementById('qte_minimum_report').innerHTML = txt_qte_minimum_bad;
  // }
  // else if ((Qte_Minimum == true) && (Number.isInteger(MonPanier.totalCount() / Qte_Minimum_Valeur) == true) && (MonPanier.totalCount() != 0))
  // {
	// document.getElementById('qte_minimum_report').innerHTML = txt_qte_minimum_ok;
  // }
  // else if (Qte_Minimum == true)
  // {
  //   document.getElementById('qte_minimum_report').innerHTML = txt_qte_minimum_defaut;	  
  // }
  // else if (Qte_Minimum == false)
  // {
	// document.getElementById('qte_minimum_report').innerHTML = "";
  // }
	  
}}

$('.show-panier').on("click", ".effacer-item", function(event) {
  var nom = $(this).data('nom')
  MonPanier.enlever_produit_de_panier_tous(nom);
  afficherpanier();
})

$('.show-panier').on("click", ".moins-item", function(event) {
  var nom = $(this).data('nom')
  MonPanier.enlever_produit_de_panier(nom);
  afficherpanier();
})

$('.show-panier').on("click", ".plus-item", function(event) {
  var nom = $(this).data('nom')
  MonPanier.ajouter_produit_dans_panier(nom);
  afficherpanier();
})

$('.show-panier').on("change", ".item-count", function(event) {
   var nom = $(this).data('nom');
   var count = Number($(this).val());
  MonPanier.setCountForItem(nom, count);
  afficherpanier();
});

afficherpanier();