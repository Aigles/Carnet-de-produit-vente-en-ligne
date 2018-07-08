var path = window.location.pathname;
var page = path.split('/').pop();
//alert("ListeVetement.html")
$(document).ready(function () {
  $.ajax({
    url: fullUrl + 'commande',
    type: 'GET',
    dataType: 'json',
    Accept: 'application/json;charset=UTF-8'
  }).done(function (data) {
    var items = [
    ];
    var is_actif;
    $.each(data, function (key, commande) {
      dataTable_tr = '<tr data-pid="' + commande.id + '">';
      dataTable_tr += '<td>' + commande.produit_nom + '</td>';
      dataTable_tr += '<td>' + commande.quantite + '</td>';
      moment.locale("fr");
      dataTable_tr += '<td>' + moment.utc(commande.date_creation).format("LLLL ") + '</td>';
      dataTable_tr += '<td>' + commande.users_nom + ' ' + commande.users_nom + '</td>';
      dataTable_tr += '<td>';
    //   dataTable_tr += '<a href="index.php?p=editerVetement&pid=' + commande.id + '" class="btn btn-success btn-xs" title="Voir les détails de cet enregistrement"><i class="fa fa-search" >Details</i></a>&nbsp;';
    //   dataTable_tr += '<a href="index.php?p=editerVetement&pid=' + commande.id + '" class="btn btn-primary btn-xs" title="Modifier cet enregistrement"><i class="fa fa-pencil" >Modifier</i></a>&nbsp;';
      dataTable_tr += '<a onclick="supprimerProduit('+commande.id+')" class="btn btn-danger btn-xs delete-datatable-record" title="Supprimer cet enregistrement" data-pid="' + commande.id + '"><i class="fa fa-trash" >Annuler</i></a>';
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
      'sDom': '<\'row\'<\'col-md-6\'l><\'col-md-6\'f>r>t<\'row\'<\'col-md-12\'i><\'col-md-12 center-block\'p>>'
    });

  });

});
