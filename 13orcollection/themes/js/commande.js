
function saveLivraison(){

    var user      = {};
    user.nom      = $('#name').val();
    user.email    = $('#email').val();
    user.telephone = $('#telephone').val();
    user.postal = $('#postal').val();
    user.ville   = $('#ville').val();
    user.pays   = $('#pays').val();
    user.adresse   = $('#adresse').val();
    user.date_commande   = $('#date_commande').val();

    if(user.nom == ""){
    jQuery('#result-statut').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Saisissez le nom svp !!!</p>');
    }
    else if(user.telephone == ""){
    jQuery('#result-statut').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Saisissez le téléphone svp !!!</p>');
    }
    else if(user.email == ""){
    jQuery('#result-statut').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Email obligatoire !!!</p>');
    }
    else if(user.date_commande == ""){
    jQuery('#result-statut').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Saisissez la date de Livraison !!!</p>');
    }
    else if(user.ville == ""){
        jQuery('#result-statut').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Ville obligatoire !!!</p>');
        }
        else if(user.pays == ""){
        jQuery('#result-statut').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Saisissez le pays de livraison !!!</p>');
        }
    else{
        data = JSON.stringify(user);
        console.log(data);
     localStorage.setItem("info_livraison",data);
     window.location="index.php?=paiement";
}

}

