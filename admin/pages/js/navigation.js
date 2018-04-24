
var lien = ["vetement/create.html", "vetement/liste.html","commande/create.html","commande/liste.html",
            "categorie/create.html","categorie/liste.html","user/create.html","user/liste.html",
            "paiement/create.html","paiement/liste.html","livraison/create.html","livraison/liste.html",
            "permission/create.html","permission/liste.html","role/create.html","role/liste.html" ];

$(document).ready(function(){

    console.log(window.location.pathname);

    $('a').click(function(e){

        console.log('loading...');

    var url = $(this).attr('href');


    //tester si l'url a des parametres
    var param = url.split('?');

    

    if(param[0] != null && param[0] != "#" && jQuery.inArray($(param[0], lien) != -1))
    {
        $("#content").load(param[0]);
        console.log(param[0]);

    }/*else if(param[0] != null && jQuery.inArray($(param[0], lien) != -1)){

        $("#content").load(url);
    }
    */
    /*
    * On évite le comportement par défaut qui est de 
    * nous envoyer sur la page donnée dans le href).
    */
    e.preventDefault();


    }); /*fin de la fonction $('a')*/

    
}); /*end of document function*/

