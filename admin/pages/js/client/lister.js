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

            if(value.role_id=="11"){

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

             value.role_id="Clients"
            dataTable_tr+='<td>'+value.role_id+'</td>';     
            dataTable_tr+='<td>';
            dataTable_tr+='<a href="index.php?p=editerClient&pid='+value.id+'" class="btn btn-primary btn-xs" title="Modifier cet enregistrement"><i class="fa fa-pencil" >Modifier</i></a>&nbsp;';
            dataTable_tr+='<a class="btn btn-danger btn-xs delete-datatable-record" onclick="supprimerUser('+value.id+');"><i class="fa fa-trash" >Supprimer</i></a>';
            dataTable_tr+='</tr>';            

            $('.tableUser > tbody').append(dataTable_tr);
            }
        });

        $('.tableUser').dataTable({
            'paging'      : true,
            'lengthChange': true,
            'searching'   : true,
            'ordering'    : true,
            'info'        : false,
            'autoWidth'   : false,
            "sPaginationType": "bootstrap",
            "oLanguage": {

                "sProcessing":     "Traitement en cours...",
                "sSearch":         "Rechercher&nbsp;:",
                "sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
                "sInfo":           "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
                "sInfoEmpty":      "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
                "sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
                "sInfoPostFix":    "",
                "sLoadingRecords": "Chargement en cours...",
                "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
                "sEmptyTable":     "Aucune donn&eacute;e disponible dans le tableau",
                "oPaginate": {
                    "sFirst":      "Premier",
                    "sPrevious":   "Pr&eacute;c&eacute;dent",
                    "sNext":       "Suivant",
                    "sLast":       "Dernier"
                },
                "oAria": {
                    "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
                    "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
                }
            
        },
            "sDom": "<'row'<'col-md-6'l><'col-md-6'f>r>t<'row'<'col-md-12'i><'col-md-12 center-block'p>>"

        });

                
    });
});