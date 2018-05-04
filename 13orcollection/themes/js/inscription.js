function creerCategorie(){
    //validatiion
    var $valid;
    var $validator;
    //validation
    $validator = $("#save_inscription form").validate();

    $valid= $("#save_inscription form").valid();

    if(!$valid) {
        $validator.focusInvalid();
        return false;
    }
   
  var user = {};
  user.nom = $('#inputNom').val();
  user.prenom = $('#inputPrenom').val();
  user.email = $('#inputEmail1').val();
  user.password = $('#inputPassword1').val();
  data = JSON.stringify(user);
  console.log(data);
  var url = fullUrl + 'ceerUtilisateur';
  sendData(data, url);
}



function sendData(data, url){
    
    $.ajax({ url: url,
        type: 'POST', 
        dataType: 'json', 
        crossDomain: true,
        data: data,
        success: function (rs) {      
            $('#result-title').html('Reultat de l\'operation');
            $('#result-info').html(rs.status);
            $.when($('#myModal').modal('show').delay(3000)).done(function(){
                window.location = "inscription.php?p=creerUtilisateur";
            });   
        },
        error: function (xhr,status,error) {
            $('#result-title').html('Reultat de l\'operation');
            $('#result-info').html('Echec de l\'operation encour');
            $('#myModal').modal('show');
            console.log("Status: " + status);
            console.log("Error: " + error);
            console.log("xhr: " + JSON.stringify(xhr));
        }

    });
 }


