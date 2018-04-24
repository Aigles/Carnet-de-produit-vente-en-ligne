$(this).load("../main.js");
var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);


$.ajax({ url: fullUrl+"categorie",
    type: 'GET', 
    dataType: 'json', 
    Accept : "application/json;charset=UTF-8"
    }).done(function(data) { 
  
        var items = [];
        var is_actif;
        
        $.each( data, function( key, personnel ) {     
            //console.log(personnel);    
            dataTable_tr = '<tr data-pid="'+personnel.id+'">';
            dataTable_tr+='<td>'+personnel.type+'</td>';
       
            dataTable_tr+='<td>';
            dataTable_tr+='<a href="#?pid='+personnel.id+'" onclick="urlLoad();" return false; class="btn btn-primary btn-xs" title="Modifier cet enregistrement"><i class="fa fa-pencil" >Modifier</i></a>&nbsp;';
            dataTable_tr+='<a class="btn btn-danger btn-xs delete-datatable-record" title="Supprimer cet enregistrement" data-pid="'+personnel.id+'"><i class="fa fa-trash" >Supprimer</i></a>';
            dataTable_tr+='</tr>';            

            $('.tablecategorie > tbody').append(dataTable_tr);
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

function urlLoad()
{
    $(document).ready(function(){
        $("#content").load("categorie/edit.html");
        
    })
}
