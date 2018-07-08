function modifierPasse(){
    var argument = document.querySelector('#imageUpload'); //selects the query named profileImage
    // var preview = document.querySelector(' input[type=file]').files[0]; //sames as here

    var user      = {};
    user.id       =  parseInt(sessionStorage.getItem("id_user_vente_en_ligne"));
    user.Oldpassword      = $('#oldPassword').val();
    user.password   = $('#newPassword').val();
    user.verifypassword   = $('#verifyPassword').val();
    //user.avatar = preview.src;

    if(user.Oldpassword == "" && user.password == "" && user.verifypassword == "" ){
    //jQuery('#result-nom').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Saisissez le nom svp !!!</p>');
    jQuery('#result-verifyPassword').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Aucun modification dans les champs !!!</p>');
    
    }
    else if(user.password == "" && user.verifypassword == ""){
    jQuery('#result-verifyPassword').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Entrez votre nouveau mot de passe !!!</p>');
    }
    else if(user.password == "" && user.verifypassword != ""){
    jQuery('#result-verifyPassword').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Nouveau mot de passe incorrect!!! </p>');
    }
    else if(user.password != user.verifypassword){
    jQuery('#result-verifyPassword').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Mot de passe differents!!! </p>');
    }
    else if(user.password.length < 6){
    jQuery('#result-verifyPassword').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>longueur de mot de passe incorrect <strong>(NB: 6 caracteres ou plus)!!! </strong></p>');
    }
    else if(user.Oldpassword == ""){
    jQuery('#result-verifyPassword').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Entrez votre ancien mot de passe !!!</p>');
    }
    else if(user.verifypassword == ""){
    jQuery('#result-verifyPassword').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Verifiez le mot de passe svp !!!</p>');
    }
    else{
        data = JSON.stringify(user);
        console.log(data);
        var url = Fullurl+'modifier/passwordUtilisateur';
        sendData(data, url);
}
}

function modifierUser(){
    var argument = document.querySelector('#imageUpload'); //selects the query named profileImage
    // var preview = document.querySelector(' input[type=file]').files[0]; //sames as here

    var user      = {};
    user.id       =  parseInt(sessionStorage.getItem("id_user_vente_en_ligne"));
    user.avatar   = $('#imageUpload').attr("src",argument);
    user.nom      = $('#user-nom').val();
    user.prenom   = $('#user-prenom').val();
    //user.avatar = preview.src;

    if(user.nom == "" && user.prenom == "" ){
    jQuery('#result-all').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Tous les champs sont vides !!!</p>');
    }
    else if(user.nom == ""){
    jQuery('#result-all').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Saisissez le prénom svp !!!</p>');
    }
    else if(user.prenom == ""){
    jQuery('#result-all').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Saisissez le prénom svp !!!</p>');
    }
    else{
        data = JSON.stringify(user);
        console.log(data);
        var url = Fullurl+'modifierUtilisateur';
        sendData(data, url);
}

}

    function connection(){
    //validatiion
    var $valid;
    var $validator;
    //validation
    $validator = $("#save_login form").validate();

    $valid= $("#save_login form").valid();

    if(!$valid) {
        $validator.focusInvalid();
        return false;
    }
   
    var login ={};
 
    login.email=$('#inputEmail1').val();
    login.password=$('#inputPassword1').val();

        
    data=JSON.stringify(login);

    console.log( data);
    var url=Fullurl+"connexion";
    sendData(data, url);
}


function sendData(data, url){
    
    $.ajax({ url: url,
        type: 'POST', 
        dataType: 'json', 
        crossDomain: true,
        data: data,
        success: function (rs) {      
            $('#result-title').html('Résultat de l\'opération');
            $('#result-info').html(rs.status);

             if (rs.id!=0) {

                sessionStorage.setItem("token_vente_en_ligne",rs.token);

                sessionStorage.setItem("id_user_vente_en_ligne",rs.id);
                // sessionStorage.setItem("id_user_vente_en_ligne",rs.nom);
                // sessionStorage.setItem("id_user_vente_en_ligne",rs.prenom);
                // sessionStorage.setItem("id_user_vente_en_ligne",rs.email);
                window.location = "index.php?p="+localStorage.getItem("OldPage");
            }
             else{
            $.when($('#myModal').modal('show').delay(3000)).done(function(){
                //  if (rs.id!=0) {
                // window.location = "index.php";  }
            }); 
             }
             
          
        },
        error: function (xhr,status,error) {
            jQuery('#result-title').html('<div class="alert alert-success" role="alert"><p class="text-center">Resultat de l\'opération</p></div>');
            jQuery('#result-info').html('<h4><p class="text-center">Echec!!! Verifiez votre Connection...</p></h4>');
            jQuery('#myModal').modal('show');
            console.log("Status: " + status);
            console.log("Error: " + error);
            console.log("xhr: " + JSON.stringify(xhr));
        }

    });
         


}


// function caracteristicProd(argument, prev, prev_1) {
//     for (i = 0; i < currentrow; i++) {
//       var preview = document.querySelector(prev + i + ' img');
//       var preview_1 = document.querySelector(prev_1 + i + ' img');
//       //dateFormat retourne une chaine vide pour les date invalides
//       var caracteristics = {
//       };
//       caracteristics.produit_idProduit = parseInt(argument);
//       caracteristics.image = preview.src;
//       caracteristics.image_1 = preview_1.src;
//       caracteristics.couleur = $('#couleur-' + i).val();
//       caracteristics.prix = parseInt($('#prix-' + i).val());
//       caracteristics.size = $('#size-' + i).val();
//       caracteristics.quantite = parseInt($('#qte-' + i).val());
//       data = JSON.stringify(caracteristics);
//       console.log(data);
//       var url = fullUrl + 'creerproduit/caracteristics';
//       sendDataCaracteristiques(data, url);
//       //schedules.push(caracteristics);
//       // count=count+1;
//     }
//   }
