//Pour verifier que les mots de passe sont les memes
$(document).ready(function(){

    //afficher les role dans une liste deroulantes
    //getRole();

    $password = $("#inputPassword1");
    $confirmP = $("#inputPassword2");

    $password.keyup(function(){
        if($(this).val().length < 6){
            $(this).css({
                borderColor : 'red',
                color : 'red'
            });
            $(this).addClass('icon-ok');
        }else{
            $(this).css({
                borderColor : 'green',
                color : 'green'
            });
        }
    });

    $confirmP.keyup(function(){
        if($(this).val() != $password.val()){
            $(this).css({
                borderColor : 'red',
                color : 'red'
            }); 
        }else{
            $(this).addClass('glyphicon glyphicon-ok');
            $(this).css({
                borderColor : 'green',
                color : 'green'
            });
        }
    })
});

function creerUtilisateur(){

    var user      = {};
    user.nom      = $('#inputNom').val();
    user.prenom   = $('#inputPrenom').val();
    user.email    = $('#inputEmail1').val();
    user.password = $('#inputPassword1').val();
    var vpassword = $('#inputPassword2').val();
    var roleId = 11;
    user.role_id = roleId;

    if(user.nom == ""){
    jQuery('#result-nom').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Saisissez le nom svp !!!</p>');
    }
    else if(user.prenom == ""){
    jQuery('#result-prenom').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Saisissez le prénom svp !!!</p>');
    }
    else if(user.email == ""){
    jQuery('#result-email').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Email obligatoire !!!</p>');
    }
    else if(user.password == ""){
    jQuery('#result-password').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Saisissez un mot de passe !!!</p>');
    }
    else if(user.password.length < 6){
    jQuery('#result-lpassword').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Mot de passe trop court !!!</p>');
    }
    else if(user.password != vpassword){
            jQuery('#result-vpassword').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Mot de passe differents !!!</p>');

        //alert("Mot de passe differents");
    }
    else{
        jQuery('#result-nom').hide();
        data = JSON.stringify(user);
        console.log(data);
        var url = Fullurl+"ceerUtilisateur";
        sendData(data, url);
}
}

function sendData(data, url) {
  $.ajax({
    url: url,
    type: "POST",
    dataType: "json",
    crossDomain: true,
    data: data, 
    Accept : "application/json;charset=UTF-8"
    }).done(function (data) {

        
    jQuery('#result-title').html('<div class="alert alert-success" role="alert"><p class="text-center">Resultat de l\'opération</p></div>');
    jQuery('#result-info').html('<h4><p class="text-center">'+data.status+'</p></h4>');
    jQuery('#myModal').modal('show');

  }).fail(function (error) {
    
    jQuery('#result-title').html('<div class="alert alert-success" role="alert"><p class="text-center">Resultat de l\'opération</p></div>');
    jQuery('#result-info').html('<h4><p class="text-center">Echec!!! Verifiez votre Connection...</p></h4>');
    jQuery('#myModal').modal('show');

    if (error.status == 404) {
      window.location = "inscription.php?p=404";                    
    }
  });
}
