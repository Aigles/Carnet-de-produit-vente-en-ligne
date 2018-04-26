var id = GET_PARAM('pid');
currentrow = 0;

$.ajax({
  // url: Fullurl+"produit",
  url: fullUrl + 'produit/' + id,
  type: 'GET',
  dataType: 'json',
  crossDomain: true,
  Accept: 'application/json;charset=UTF-8'
}).done(function (data) {
  $('#nom-poduit').val(data.nom);
  $('#description-poduit').val(data.description);
  $('#nb-vendu').val(data.nbre_vendu)
  $('#nb-poduit').val(data.nbre_en_stock);
  $('#nb-rabais').val(data.rabais);
  if (data.activer == 1)
  $('#toggle-two').prop('checked', 'true')
  if (data.caracteristic != null) {
    $.each(data.caracteristic, function (key, personnel) {
      currentrow++;
      if (key != null)
      fullRow(key, personnel.image, personnel.image_1, personnel.couleur, personnel.size, personnel.prix, personnel.quantite)
    });
  }
});

function fullRow(row, image, image_1, couleur, size, prix, quantite) {
  var item = [
  ];
  dataTable_tf = '<div id="divi-' + row + '"><hr></div><div class="row"><div class="col-md-3"><div class="col-md-12 " id="divimg-' + row + '"><img class="" id="start-' + row + '" src="' + image + '" style="height:130px;"></br></div> ';
  dataTable_tf += '<div class="col-md-12 " id="diva-' + row + '"><input class="" id="start-' + row + '" type="file" name="file" onchange="previewFile(\'#divimg-' + row + '\',\'#diva-' + row + '\')"></br></div></div> ';
  dataTable_tf += '<div class="col-md-3"><div class="col-md-12 " id="divimgg-' + row + '"><img class="" id="start-' + row + '" src="' + image_1 + '" style="height:130px;"></br></div> ';
  dataTable_tf += '<div class="col-md-12 " id="divaa-' + row + '"><input class="" id="startt-' + row + '" type="file" name="file" onchange="previewFile(\'#divimgg-' + row + '\',\'#divaa-' + row + '\')"></br></div></div> ';
  dataTable_tf += '<div class="col-md-6 "><div class="col-md-6 " id="divb-' + row + '"><input class="form-control" id="couleur-' + row + '" type="text" aria-describedby="nameHelp" placeholder="entrer la couleur" name="couleur" value="' + couleur + '"></br></div> ';
  dataTable_tf += '<div class="col-md-6 " id="divc-' + row + '"><input class="form-control" id="size-' + row + '" type="number" aria-describedby="nameHelp" placeholder="entrer la taille " name="size" value="' + size + '" ></br></div> ';
  dataTable_tf += '<div class="col-md-6 " id="divd-' + row + '"><input class="form-control" id="prix-' + row + '" type="number" aria-describedby="nameHelp" placeholder="entrer le prix" name="prix" value="' + prix + '"></br></div> ';
  dataTable_tf += '<div class="col-md-4 " id="dive-' + row + '"><input class="form-control" id="qte-' + row + '" type="number" aria-describedby="nameHelp" placeholder="quantite" name="quantite" value="' + quantite + '"></br></div> ';
  dataTable_tf += '<div class="col-md-2" id="divf-' + row + '"><a data-original-title="Remove this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-danger" id="s-' + row + '" onclick="supprimer(' + row + ')"><i class=" glyphicon glyphicon-remove"></i></a></br></div></div></div><div id="divh-' + row + '"><hr></div> ';
  item.push(dataTable_tf);
  $('#tableday-id').append(item);
}

function GET_PARAM(param) {
  var vars = {
  };
  window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp 
  function (m, key, value) { // callback 
    vars[key] = value !== undefined ? value : '';
  });
  if (param) {
    return vars[param] ? vars[param] : null;
  }
  return vars;
}

function modifierProduit() {
  var produit = {
  };
  produit.nom = $('#nom-poduit').val();
  produit.description = $('#description-poduit').val();
  produit.nbre_vendu = parseInt($('#nb-vendu').val());
  produit.nbre_en_stock = parseInt($('#nb-poduit').val());
  produit.rabais = parseInt($('#nb-rabais').val());
  var ActiverProd = 0;
  if ($('#toggle-two').prop('checked') == true)
  ActiverProd = 1;
  produit.activer = ActiverProd;
  data = JSON.stringify(produit);
  console.log(data);
  //caracteristicProd(id);
  var url = fullUrl + 'modifierproduit';
  updateProduit(data, url);
}

function caracteristicProd(argument) {
  for (i = 0; i < currentrow; i++) {
    var preview = document.querySelector('#divimg-' + i + ' img');
    var preview_1 = document.querySelector('#divimgg-' + i + ' img');
    //dateFormat retourne une chaine vide pour les date invalides
    var caracteristics = {
    };
    caracteristics.produit_idProduit = parseInt(argument);
    caracteristics.image = preview.src;
    caracteristics.image_1 = preview_1.src;
    caracteristics.couleur = $('#couleur-' + i).val();
    caracteristics.prix = parseInt($('#prix-' + i).val());
    caracteristics.size = parseInt($('#size-' + i).val());
    caracteristics.quantite = parseInt($('#qte-' + i).val());
    data = JSON.stringify(caracteristics);
    console.log(data);
    var url = fullUrl + 'modifierproduit/caracterics';
    updateProduit(data, url);
  }
}

function updateProduit(data, url)
{
  $.ajax({
    url: url,
    type: 'PUT',
    dataType: 'json',
    crossDomain: true,
    data: data,
  }).done(function (data) {
    alert(data.status);
  }).fail(function (xhr,msg,error) {
    //alert('echec de mise a jour du produit');
    console.log(JSON.stringify(xhr));
  });
}
