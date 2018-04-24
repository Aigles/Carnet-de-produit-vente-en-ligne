var initrow=1;
var schedules=[];
var executer=0;




    var currentrow=initrow;
    for (i = 0; i < initrow; i++) { 
        createRow(i);
 
      }

      $('#add').click(function(){
        var nbligne=parseInt($('#ligne').val(), 10);

      for (i = 0; i < nbligne; i++) { 
        createRow(currentrow); 
        currentrow=currentrow+1;
      }
    });

  
function createRow(row){
    var item=[]; 

                        
     dataTable_tf= '<div id="divi-'+row+'"><hr></div><div class="row"><div class="col-md-3"><div class="col-md-12 " id="divimg-'+row+'"><img class="" id="start-'+row+'" src="" style="height:130px;"></br></div> ';
    dataTable_tf+= '<div class="col-md-12 " id="diva-'+row+'"><input class="btn btn-primary" id="start-'+row+'" required type="file" name="file" onchange="previewFile(\'#divimg-'+row+'\',\'#diva-'+row+'\')" style="width:150px;"></br></div></div> ';
    dataTable_tf+= '<div class="col-md-3"><div class="col-md-12 " id="divimgg-'+row+'"><img class="" id="start-'+row+'" src="" style="height:130px;"></br></div> ';
    dataTable_tf+= '<div class="col-md-12 " id="divaa-'+row+'"><input class="btn btn-primary" id="startt-'+row+'" required type="file" name="file" onchange="previewFile(\'#divimgg-'+row+'\',\'#divaa-'+row+'\')" style="width:150px;"></br></div></div> ';
    dataTable_tf+= '<div class="col-md-6 "><div class="col-md-6 " id="divb-'+row+'"><input class="form-control" required id="couleur-'+row+'" type="text" aria-describedby="nameHelp" placeholder="entrer la couleur" name="couleur" ></br></div> ';
    dataTable_tf+= '<div class="col-md-6 " id="divc-'+row+'"><input class="form-control" id="size-'+row+'" type="number" required aria-describedby="nameHelp" placeholder="entrer la taille " name="size" ></br></div> ';
    dataTable_tf+= '<div class="col-md-6 " id="divd-'+row+'"><input class="form-control" id="prix-'+row+'" type="number" required aria-describedby="nameHelp" placeholder="entrer le prix" name="prix" ></br></div> ';
    dataTable_tf+= '<div class="col-md-4" id="dive-'+row+'"><input class="form-control" id="qte-'+row+'" type="number" required aria-describedby="nameHelp" placeholder="quantite" name="quantite"></br></div> ';
    dataTable_tf+= '<div class="col-md-2" id="divf-'+row+'"><a data-original-title="Remove this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-danger" id="s-'+row+'" onclick="supprimer('+row+')"><i class=" glyphicon glyphicon-remove"></i></a></br></div></div></div><div id="divh-'+row+'"><hr></div> ';

   item.push(dataTable_tf);
    $('#tableday-id').append(item);
}


function supprimer(id){

    // $('#end-'+id+'').remove();
    // $('#start-'+id+'').remove();
    // $('#day-'+id+'').remove();
    // $('#s-'+id+'').remove();

    $('#diva-'+id+'').remove();
    $('#divb-'+id+'').remove();
    $('#divc-'+id+'').remove();
    $('#divd-'+id+'').remove();
    $('#dive-'+id+'').remove();
    $('#divf-'+id+'').remove();
    $('#divh-'+id+'').remove();
     $('#divi-'+id+'').remove();
     $('#divimg-'+id+'').remove();
        $('#divimgg-'+id+'').remove();
        $('#divaa-'+id+'').remove();
  currentrow=currentrow-1;


}

  function creerproduit(){
     //validatiion
        var $valid;
        var $validator;
        //validation
        $validator = $("#save_vetement form").validate();


        $valid= $("#save_vetement form").valid();

        if(!$valid) {

        $validator.focusInvalid();
        return false;

        }

     
  //     Id           int         `json:"id"`
  // Nom          string       `json:"nom"`
  // Description  string       `json:"description"`
  // Nbre_like    int          `json:"nbre_like"`
  // Nbre_vendu   int          `json:"nbre_vendu"`
  // Nbre_en_stock int         `json:"nbre_en_stock"`
  // Rabais        float64     `json:"rabais"`
  // Activer       int          `json:"activer"`
  // Categorie_idCategorie  int  `json:"categorie_id"`
  // CreateAt time.Time        `json:"date_creation"`
  // UpdateAt time.Time        `json:"date_update"`
  // Caracteristic caracteristique `json:"caracteristic"`
     var produit ={};
    
        produit.nom=$('#nom-poduit').val();
         produit.description=$('#description-poduit').val();
          produit.nbre_vendu=parseInt($('#nb-vendu').val());
           produit.nbre_en_stock=parseInt($('#nb-poduit').val());
           produit.rabais=parseInt($('#nb-rabais').val());
            var ActiverProd=0;

            if ($('#toggle-two').prop('checked')==true)
            {
            ActiverProd=1;
            }
            produit.activer =ActiverProd;

            produit.categorie_id=parseInt($('#nb-categorie').val());

        
        data=JSON.stringify(produit);

        console.log( data);
       var url=fullUrl+"creerproduit";
         sendData(data, url);
  }


function caracteristicProd(argument,prev,prev_1) {
         for(i=0;i<currentrow;i++){
  
    var preview = document.querySelector(prev+i+' img');

    var preview_1 = document.querySelector(prev_1+i+' img');
     //dateFormat retourne une chaine vide pour les date invalides
      var caracteristics ={};

          caracteristics.produit_idProduit=parseInt(argument);
          caracteristics.image=preview.src;
         caracteristics.image_1=preview_1.src;
         caracteristics.couleur=$('#couleur-'+i).val();
         caracteristics.prix=parseInt($('#prix-'+i).val());
        caracteristics.size=parseInt($('#size-'+i).val());
         caracteristics.quantite=parseInt($('#qte-'+i).val());
      
         data=JSON.stringify(caracteristics);
         console.log( data);
       var url=fullUrl+"creerproduit/caracteristics";
         sendDataCaracteristiques(data, url);

    
    //schedules.push(caracteristics);
    // count=count+1;
}
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
          caracteristicProd(data.id,"#divimg-","#divimgg-");
      $("#content").load('Produit/liste.html');
         // window.location = "./index.html"
         })
         .fail(function(error){  
          // alert("requete échouée !")
             if (error.status==404) {
              
                 //window.location = "./login.html";                    
             }

         });


}


function sendDataCaracteristiques(data, url){
    
    $.ajax({ url: url,
             type: 'POST', 
             dataType: 'json', 
             crossDomain: true,
             data: data,
                     })
         .done(function(data) { 

          alert(data.status);

          $("#content").load('Produit/liste.html');
         })
         .fail(function(error){  
          // alert("requete échouée !")
             if (error.status==404) {
              
                 //window.location = "./login.html";                    
             }

         });


}

    function fullcategorie(chaine,id=1){
    var items = [];
    var url=fullUrl+"categorie"



    $.ajax({ 
        url: url,
        type: 'GET', 
        dataType: 'json', 
        crossDomain: true,
                })
    .done(function(data) {
        var items = [];
                                  
           
        $.each( data, function( key, personnel) {
          var mon = '';  
           if(personnel.id==id)
            mon = 'selected'
            
            personnels = '<option  '+mon+' value="'+personnel.id+'">'+personnel.type+'</option>';
            items.push(personnels);

        });

        $('#'+chaine).append(items);
        console.log(items);
     });
}


