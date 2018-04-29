function creerCategorie(){
    //validatiion
    var $valid;
    var $validator;
    //validation
    $validator = $("#save_categorie form").validate();

    $valid= $("#save_categorie form").valid();

    if(!$valid) {
        $validator.focusInvalid();
        return false;
    }
   
    var categorie ={};
 
    categorie.type=$('#nom-categorie').val();
        
    data=JSON.stringify(categorie);

    console.log( data);
    var url=fullUrl+"creercategorie";
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
                window.location = "index.php?p=listerCategorie";
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


