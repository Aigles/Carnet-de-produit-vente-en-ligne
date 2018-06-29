
// true pour activer la fonctionnalité de commande par lot, false pour la désactiver
  
var path = window.location.pathname;
var page = path.split("/").pop();

var Qte_Minimum = true;

// la quantité des lots
var Qte_Minimum_Valeur = 1; 


// les messages
var txt_qte_minimum_bad = "<div class='alert alert-warning text-center'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b><font color='red'>Attention les quantités ne sont pas correctes</font></b></div>";
var txt_qte_minimum_ok = "<div class='alert alert-info text-center'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b><font color='#3a87ad'>N'oubliez pas de verifier votre panier avant de commander un produit</font></b></div>";
var txt_qte_minimum_defaut = "<div class='alert alert-danger text-center'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>La quantite de vetements a commander doit etre supérieure a zéro (0)</b></div>";

// ne pas modifier la suite sauf si vous désirez modifier le code
//Dans cette partie nous faisons la gestion du panier, 
// 1-Ajout au panier            =>MonPanier.ajouter_produit_dans_panier(nom, prix,qte,image);
//2-supprimer du panier         =>MonPanier.enlever_produit_de_panier(nom)
//3-vider le panier,            =>MonPanier.enlever_produit_de_panier_tous(nom)
//4-modifier la quantite a commander =>MonPanier.setCountForItem(nom,count);
//5-Afficher les elements du panier  =>MonPanier.listpanier(), MonPanier.afficherpanier(), MonPanier.loadpanier();
//6-Mettre sous forme JSON Les donnees a ajouter au panier  =>MonPanier.savepanier();
//
var MonPanier = (function() {

panier = [];
function Item(nom, prix, count,image) {

this.nom = nom;
this.prix = prix;
this.count = count;
this.image = image;
}

function savepanier() {
sessionStorage.setItem('MonPanier', JSON.stringify(panier));
jQuery('#modal_errors').html("");
var error = '<div class=\'alert alert-info text-center\'><a href=\'#\' class=\'close\' data-dismiss=\'alert\' aria-label=\'close\'>&times;</a><b>Vous avez ajoute un nouveau vetement au panier !!!</b></div>';
jQuery('#modal_errors').html(error);
jQuery('#modal_errorss').html(error);
}

function loadpanier() {
panier = JSON.parse(sessionStorage.getItem('MonPanier'));
}
if (sessionStorage.getItem("MonPanier") != null) {
loadpanier();
}

var obj = {};

obj.ajouter_produit_dans_panier = function(nom, prix, count,image) {
for(var item in panier) {
  if(panier[item].nom === nom) {
  panier[item].count ++;
  savepanier();
  return;
  }
}
var item = new Item(nom, prix, count,image);
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



function afficherpanier() {

  var panierArray = MonPanier.listpanier();
  var output = "";

  if(panierArray.length==0){
    $('#zerocommande_panier').html("<div class='alert alert-default text-center' style='font-size: 20px; line-height: 188%;'>PANIER VIDE</div>");
    $('.total-count').html(MonPanier.totalCount());
    return false;
  }
 
  
  for(var i in panierArray) {

   
    output +='<tr><td class="col-sm-8 col-md-6" style="line-height: 80px;"><div class="media"><a class="thumbnail pull-left" href="#"> <img class="media-object" src="' + panierArray[i].image + '" style="max-width: 72px; height: 72px;"> </a><div class="media-body">'
            +'<h5 class="media-heading "><span style="line-height: 80px;">' + panierArray[i].nom.substr(0, 10) + '...</span></h5>'
           // +'<h5 class="media-heading text-center"> by <a href="#">Brand name</a></h5>'
           +'</div></div></td><td class="col-sm-1 col-md-1 text-center" style="line-height: 80px;"> <div>'
      + '<input type="number" min="1" width="5%" class="form-control item-count" data-nom="' + panierArray[i].nom + '" value="' + panierArray[i].count + '">'
      + '</div></td><td class="col-sm-1 col-md-1 text-center" style="line-height: 80px;"><strong>HTG '+ panierArray[i].prix.toFixed(2) + '</strong></td><td class="col-sm-1 col-md-1 text-center" style="line-height: 80px;"><strong>HTG ' + panierArray[i].total + '</strong></td><td align="center" class="col-sm-1 col-md-1" style="line-height: 80px;">'
      +'<button type="button" class="btn btn-warning effacer-item" data-nom="' + panierArray[i].nom + '"><span class="icon-trash"></span></button></td></tr>'

 
  }

  output +='<tr><td>   </td><td>   </td><td>   </td><td><h3>Total :</h3></td><td class="text-right" ><h3>HTG <strong class="total-panier" id="prix_total_1">31.53</strong></h3></td></tr>';
  output +='<tr><td>   </td><td>   </td><td> <button type="button" class="clear-panier btn btn-default btn-carre"><span class="icon-trash"></span> Vider le panier</button>  </td><td><span>  </span><a href="index.php"><button type="button" class="btn btn-default btn-carre"><span class="icon-shopping-cart"></span> Continuer vos achats</button></a></td><td>';
  output +=' <button type="button" class="btn btn-default btn-large id="paypal-button" " ><span class="icon-ok"></span> Passer la commande <span class="icon-shopping-play"></span></button></td></tr>';
  
  $('.total-count').html(MonPanier.totalCount());

  
  if(page == 'cart.php'|| page == "index.php" || page == ''){
  $('.show-panier').html(output);

  $('.total-panier').html(MonPanier.totalpanier().toFixed(2));

  if ((Qte_Minimum == true) && (Number.isInteger(MonPanier.totalCount() / Qte_Minimum_Valeur) == false) && (MonPanier.totalCount() != 0))
  {
  document.getElementById('qte_minimum_report').innerHTML = txt_qte_minimum_bad;
  }
  else if ((Qte_Minimum == true) && (Number.isInteger(MonPanier.totalCount() / Qte_Minimum_Valeur) == true) && (MonPanier.totalCount() != 0))
  {
  document.getElementById('qte_minimum_report').innerHTML = txt_qte_minimum_ok;
  }
  else if (Qte_Minimum == true)
  {
    document.getElementById('qte_minimum_report').innerHTML = txt_qte_minimum_defaut;   
  }
  else if (Qte_Minimum == false)
  {
  document.getElementById('qte_minimum_report').innerHTML = "";
  }
    
  $('.clear-panier').click(function() {
    MonPanier.clearpanier();
    afficherpanier();
  });
    
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