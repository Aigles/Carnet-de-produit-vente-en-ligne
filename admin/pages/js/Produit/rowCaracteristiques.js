var initrow=3;
    var currentrow=initrow;
    for (i = 0; i < initrow; i++) { 
        createRow(i);
 
      }

      $('#add').click(function(){
        var nbligne=parseInt($('#ligne').val(), 10);

      for (i = 0; i < nbligne; i++) { 
        createRow(currentrow); 
        fullselect(currentrow);
        currentrow=currentrow+1;
      }
    });
function createRow(row){
    var item=[]; 

                        
     dataTable_tf= '<div id="divi-'+row+'"><hr></div><div class="row"><div class="col-md-4"><div class="col-md-12 " id="divimg-'+row+'"><img class="" id="start-'+row+'" src="" width="50%"></br></div> ';
    dataTable_tf+= '<div class="col-md-12 " id="diva-'+row+'"><input class="" id="start-'+row+'" type="file" name="file" onchange="previewFile('+row+')"></br></div></div> ';
    dataTable_tf+= '<div class="col-md-8 "><div class="col-md-6 " id="divb-'+row+'"><input class="form-control" id="start-'+row+'" type="text" aria-describedby="nameHelp" placeholder="entrer la couleur" name="couleur" ></br></div> ';
    dataTable_tf+= '<div class="col-md-6 " id="divc-'+row+'"><input class="form-control" id="start-'+row+'" type="number" aria-describedby="nameHelp" placeholder="entrer la taille " name="size" ></br></div> ';
    dataTable_tf+= '<div class="col-md-6 " id="divd-'+row+'"><input class="form-control" id="start-'+row+'" type="number" aria-describedby="nameHelp" placeholder="entrer le prix" name="prix" ></br></div> ';
    dataTable_tf+= '<div class="col-md-5 " id="dive-'+row+'"><input class="form-control" id="end-'+row+'" type="number" aria-describedby="nameHelp" placeholder="quantite" name="quantite"></br></div> ';
    dataTable_tf+= '<div class="col-md-1" id="divf-'+row+'"><a data-original-title="Remove this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-danger" id="s-'+row+'" onclick="supprimer('+row+')"><i class=" glyphicon glyphicon-remove"></i></a></br></div></div></div><div id="divh-'+row+'"><hr></div> ';

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
  


}