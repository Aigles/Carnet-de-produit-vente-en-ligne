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
            $(this).addClass('glyphicon glyphicon-ok');
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
    var roleId = 11;
    user.role_id = roleId;
    data = JSON.stringify(user);
    console.log(data);
    var url = "http://localhost:1230/api/app/ceerUtilisateur";
    sendData(data, url);
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
    jQuery('#result-title').html('<div class="alert alert-success" role="alert"><p><span class="icon-exclamation-sign" aria-hidden="true"></span>Resultat de l\'opération : '+data.status+'</p></div>');
    jQuery('#result-info').html(data.status);
    jQuery('#myModal').modal('show');
  }).fail(function (error) {
    
    jQuery('#result-title').html('<div class="alert alert-danger" role="alert"><p><span class="icon-exclamation-sign" aria-hidden="true"></span>Resultat de l\'opération</p></div>');
    jQuery('#result-info').html('<br/>Echec de l\'operation en cour');
    jQuery('#myModal').modal('show');

    if (error.status == 404) {
      window.location = "inscription.php?p=404";                    
    }
  });
}
