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
                     })
         .done(function(data) { 

          alert(data.status);
          //$("#content").load('categorie/liste.html');
         })
         .fail(function(error){  
          // alert("requete échouée !")
             if (error.status==404) {
              
                 //window.location = "./login.html";                    
             }

         });


}


