//partie responsable de l'afficharge des differentes rolles
$(document).ready(function () {
$.ajax({ url: fullUrl+"utilisateur",
    type: 'GET', 
    dataType: 'json', 
    Accept : "application/json;charset=UTF-8"
    }).done(function(data) { 
  
        var items = [];
        var is_actif;
        
        $.each( data, function( key, value ) {     
            //console.log(value);   
            if (value.role_id=="6") {
            dataTable_tr = '<tr data-pid="'+value.id+'">';
            dataTable_tr+='<td>'+value.nom+'</td>';
            dataTable_tr+='<td>'+value.prenom+'</td>';
            dataTable_tr+='<td>'+value.email+'</td>';
            
            if (value.etat_connection==1){
                value.etat_connection="Connecte";
            }
            else{
                value.etat_connection="Non Connecte";
            }
            dataTable_tr+='<td>'+value.etat_connection+'</td>';
                value.role_id="Administrateurs"

            dataTable_tr+='<td>'+value.role_id+'</td>';     
            dataTable_tr+='<td>';
            dataTable_tr+='<a href="index.php?p=editerUser&pid='+value.id+'" class="btn btn-primary btn-xs" title="Modifier cet enregistrement"><i class="fa fa-pencil" >Modifier</i></a>&nbsp;';
            dataTable_tr+='<a class="btn btn-danger btn-xs delete-datatable-record" onclick="supprimerUser('+value.id+');"><i class="fa fa-trash" >Supprimer</i></a>';
            dataTable_tr+='</tr>';            

            $('.tableUser > tbody').append(dataTable_tr);
             
        }
        });

        $('.tablecategorie').dataTable({
            'paging'      : true,
            'lengthChange': true,
            'searching'   : true,
            'ordering'    : true,
            'info'        : false,
            'autoWidth'   : false,
            "sPaginationType": "bootstrap",
            "oLanguage": {
                "sLengthMenu": "_MENU_ records per page"
            },
            "sDom": "<'row'<'col-md-6'l><'col-md-6'f>r>t<'row'<'col-md-12'i><'col-md-12 center-block'p>>"

        });

                
    });
});