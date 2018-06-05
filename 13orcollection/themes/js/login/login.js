
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

