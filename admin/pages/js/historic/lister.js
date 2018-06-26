//partie responsable de l'afficharge des differentes rolles
$(document).ready(function () {
$.ajax({ url: fullUrl+"historic",
    type: 'GET', 
    dataType: 'json', 
    Accept : "application/json;charset=UTF-8"
    }).done(function(data) { 
  
        var items = [];
        var is_actif;
        
        $.each( data, function( key, value ) {     
            //console.log(value);    
            dataTable_tr = '<tr data-pid="'+value.id+'">';
            dataTable_tr+='<td>'+moment.utc(value.date_creation).format("LLLL ")+'</td>';
            dataTable_tr+='<td>'+value.nom+' '+value.prenom+'</td>';
           
            if (value.role_id=="6") {
                value.role_id="Administrateurs"

            }else if(value.role_id=="7"){
                value.role_id="Personnels"
            }else{
                value.role_id="Clients"
            }
            dataTable_tr+='<td>'+value.role_id+'</td>';  
            dataTable_tr+='<td>'+value.description+'</td>';     
            dataTable_tr+='</tr>';            

            $('.tableUser > tbody').append(dataTable_tr);
        });
    $('.tableUser').dataTable({
        'paging': true,
        'lengthChange': true,
        'searching': true,
        'ordering': true,
        'info': false,
        'autoWidth': false,
        'sPaginationType': 'bootstrap',
        'oLanguage': {
          'sLengthMenu': '_MENU_ records per page'
        },
        'sDom': '<\'row\'<\'col-md-6\'l><\'col-md-6\'f>r>t<\'row\'<\'col-md-12\'i><\'col-md-12 center-block\'p>>'
      });
                
    });
});
