//Pour verifier que les mots de passe sont les memes
// $(document).ready(function(){

//     //afficher les role dans une liste deroulantes
//     //getRole();

//     $password = $("#inputPassword1");
//     $confirmP = $("#inputPassword2");

//     $password.keyup(function(){
//         if($(this).val().length < 6){
//             $(this).css({
//                 borderColor : 'red',
//                 color : 'red'
//             });
//             $(this).addClass('icon-ok');
//         }else{
//             $(this).css({
//                 borderColor : 'green',
//                 color : 'green'
//             });
//         }
//     });

//     $confirmP.keyup(function(){
//         if($(this).val() != $password.val()){
//             $(this).css({
//                 borderColor : 'red',
//                 color : 'red'
//             }); 
//         }else{
//             $(this).addClass('icon-ok');
//             $(this).css({
//                 borderColor : 'green',
//                 color : 'green'
//             });
//         }
//     })
// });

function rese_t(){

    var user      = {};
    user.email    = $('#inputEmail').val();
    user.url    = "http://localhost/VenteGithub/13orcollection/index.php?p=modification";

   
    if(user.email == ""){
        jQuery('#result-email').html('<p><span class="icon-exclamation-sign" aria-hidden="true"></span>Email obligatoire !!!</p>');
    }
    else{
        data = JSON.stringify(user);
        console.log(data);
        var url = Fullurl+"oublier/passwordUtilisateur";
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
        jQuery('#result-title').html('<div class="alert alert-warning" role="alert"><p class="text-center">Resultat de l\'opération</p></div>');
        jQuery('#result-info').html('<h4><p class="text-center">'+data.status+'</p></h4>');
        jQuery('#myModal').modal('show').delay(10);
        
    // window.location = "index.php?p=connection";
  }).fail(function (error) {
    
    jQuery('#result-title').html('<div class="alert alert-warning" role="alert"><p class="text-center">Resultat de l\'opération</p></div>');
    jQuery('#result-info').html('<h4><p class="text-center">Echec!!! Verifiez votre Connection...</p></h4>');
    jQuery('#myModal').modal('show');

    if (error.status == 404) {
      window.location = "inscription.php?p=404";                    
    }
  });
}
