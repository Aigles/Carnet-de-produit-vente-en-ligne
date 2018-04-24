/*
var lien = ["vetement/create.html", "vetement/liste.html","commande/create.html","commande/liste.html",
            "categorie/create.html","categorie/liste.html","user/create.html","user/liste.html",
            "paiement/create.html","paiement/liste.html","livraison/create.html","livraison/liste.html",
            "permission/create.html","permission/liste.html","role/create.html","role/liste.html" ];
var fresh;

$(document).ready(function(){

    $('a').click(function(e){

    var url = $(this).attr('href');

    //tester si l'url a des parametres
    var param = url.split('?');

    if(param[1] != null && jQuery.inArray($(param[0], lien) != -1))
    {
        $("#content").load(url);

    }else if(param[0] != null && jQuery.inArray($(param[0], lien) != -1)){

        $("#content").load(url);
    }

    /*
    * On évite le comportement par défaut qui est de 
    * nous envoyer sur la page donnée dans le href).
    
    event.preventDefault();


    }); /*fin de la fonction $('a')*

    
}); /*end of document function*

*/

(function($)
{
    /*
     * $.import_js() helper (for JavaScript importing within JavaScript code).
     */
    var import_js_imported = [];

    $.extend(true,
    {
        import_js : function(script)
        {
            var found = false;
            for (var i = 0; i < import_js_imported.length; i++)
                if (import_js_imported[i] == script) {
                    found = true;
                    break;
                }

            if (found == false) {
                $("head").append('<script type="text/javascript" src="' + script + '"></script>');
                import_js_imported.push(script);
            }
        }
    });

})(jQuery);