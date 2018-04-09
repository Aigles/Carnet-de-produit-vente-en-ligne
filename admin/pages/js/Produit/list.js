var path = window.location.pathname;
var page = path.split("/").pop();


//Delete personnel record 
// function deleteRecord(personnelId){
    
// }

//List personnel all records
if(page == '' || page == 'ListeVetement.html'){

//alert("ListeVetement.html")

    $.ajax({ url: fullUrl+"produit",
        type: 'GET', 
        dataType: 'json', 
        Accept : "application/json;charset=UTF-8"
                })
    .done(function(data) { 
  
     var items = [];
     var is_actif;
     $.each( data, function( key, personnel ) {

     
     dataTable_tr = '<tr data-pid="'+personnel.id+'">';
     dataTable_tr+='<td>'+personnel.nom+'</td>';
     dataTable_tr+='<td>'+personnel.description+'</td>';
     dataTable_tr+='<td>'+personnel.nbre_like+'</td>';
     dataTable_tr+='<td>'+personnel.nbre_vendu+'</td>';
     dataTable_tr+='<td>'+personnel.nbre_en_stock+'</td>';
     dataTable_tr+='<td>'+personnel.rabais+'</td>';
     if (personnel.activer==0) {
      is_actif="True";
     }
     else{
        is_actif="False";
     }
     dataTable_tr+='<td>'+is_actif+'</td>';
     dataTable_tr+='<td>';
     dataTable_tr+='<a href="view.html?pid='+personnel.id+'" class="btn btn-success btn-xs" title="Voir les détails de cet enregistrement"><i class="fa fa-search" >Details</i></a>&nbsp;';
     dataTable_tr+='<a href="edit.html?pid='+personnel.id+'" class="btn btn-primary btn-xs" title="Modifier cet enregistrement"><i class="fa fa-pencil" >Modifier</i></a>&nbsp;';
     dataTable_tr+='<a class="btn btn-danger btn-xs delete-datatable-record" title="Supprimer cet enregistrement" data-pid="'+personnel.id+'"><i class="fa fa-trash" >Supprimer</i></a>';
     dataTable_tr+='</tr>';
     items.push(dataTable_tr);
 
    });
     $('#dataTableList > tbody').append(items);

     $('#dataTableList').dataTable({
         // 'bDestroy': true,
         //  'retrieve': true,
         'paging'      : true,
         'lengthChange': false,
         'searching'   : true,
         'ordering'    : true,
         'info'        : true,
         'autoWidth'   : false
     });
    });

 }
