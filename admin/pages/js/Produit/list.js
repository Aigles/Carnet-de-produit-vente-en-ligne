var path = window.location.pathname;
var page = path.split('/').pop();
//alert("ListeVetement.html")
$(document).ready(function () {
  $.ajax({
    url: fullUrl + 'produit',
    type: 'GET',
    dataType: 'json',
    Accept: 'application/json;charset=UTF-8'
  }).done(function (data) {
    var items = [
    ];
    var is_actif;
    $.each(data, function (key, personnel) {
      dataTable_tr = '<tr data-pid="' + personnel.id + '">';
      dataTable_tr += '<td>' + personnel.nom + '</td>';
      dataTable_tr += '<td>' + personnel.description + '</td>';
      dataTable_tr += '<td>' + personnel.nbre_like + '</td>';
      dataTable_tr += '<td>' + personnel.nbre_vendu + '</td>';
      dataTable_tr += '<td>' + personnel.nbre_en_stock + '</td>';
      dataTable_tr += '<td>' + personnel.rabais + '</td>';
      is_actif = personnel.activer ? 'True' : 'False';
      dataTable_tr += '<td>' + is_actif + '</td>';
      dataTable_tr += '<td>';
      dataTable_tr += '<a href="index.php?p=editerVetement&pid=' + personnel.id + '" class="btn btn-success btn-xs" title="Voir les détails de cet enregistrement"><i class="fa fa-search" >Details</i></a>&nbsp;';
      dataTable_tr += '<a href="index.php?p=editerVetement&pid=' + personnel.id + '" class="btn btn-primary btn-xs" title="Modifier cet enregistrement"><i class="fa fa-pencil" >Modifier</i></a>&nbsp;';
      dataTable_tr += '<a onclick="supprimerProduit('+personnel.id+')" class="btn btn-danger btn-xs delete-datatable-record" title="Supprimer cet enregistrement" data-pid="' + personnel.id + '"><i class="fa fa-trash" >Supprimer</i></a>';
      dataTable_tr += '</tr>';
      //items.push(dataTable_tr); 
      $('.tableV > tbody').append(dataTable_tr);
    });

    $('.tableV').dataTable({
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


