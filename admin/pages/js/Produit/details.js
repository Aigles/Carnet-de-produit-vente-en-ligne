var id = GET_PARAM('pid');
currentrows = 0;

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
  // $('#nb-vendu').val(data.nbre_vendu)
  $('#nb-poduit').val(data.nbre_en_stock);
  $('#nb-rabais').val(data.rabais);
  fullcategorie('nb-categorie', parseInt(data.categorie_id));
  if (data.activer == 1)
  $('#toggle-two').prop('checked', 'true')
  if (data.caracteristic != null) {
    $.each(data.caracteristic, function (key, personnel) {
      currentrows = currentrows + 1;
      fullRow(key, personnel.image, personnel.image_1, personnel.couleur, personnel.size, personnel.prix, personnel.quantite, personnel.id)
      console.log("ligne: "+currentrows+" donnee: "+JSON.stringify(personnel));
    });
  }
});

function fullRow(row, image, image_1, couleur, size, prix, quantite, Cid) {/*<input type="hidden" name="caracId" value = "'+idCaracteristiques+'">*/

var item = [
  ];
  dataTable_tf = '<div id="divi-' + row + '"><hr></div><div class="row"><div class="col-md-3"><div class="col-md-12 " id="divimg-' + row + '"><img class="" id="start-' + row + '" src="' + image + '" style="height:130px;"></br></div> ';
  dataTable_tf += '<div class="col-md-12 " id="diva-' + row + '"></br></div></div> ';
  dataTable_tf += '<div class="col-md-3"><div class="col-md-12 " id="divimgg-' + row + '"><img class="" id="start-' + row + '" src="' + image_1 + '" style="height:130px;"></br></div> ';
  dataTable_tf += '<div class="col-md-12 " id="divaa-' + row + '"></br></div></div> ';
  dataTable_tf += '<div class="col-md-6 "><div class="col-md-6 " id="divb-' + row + '"><input class="form-control" id="couleur-' + row + '" type="text" aria-describedby="nameHelp" placeholder="entrer la couleur" name="couleur" value="' + couleur + '" disabled="true"></br></div> ';
  dataTable_tf += '<div class="col-md-6 " id="divc-' + row + '"><select class="form-control" id="size-' + row + '" aria-describedby="nameHelp" placeholder="entrer la taille " name="size" disabled="true" ><option value="' + size + '">' + size + '</option><option value="Petit">Petit</option><option value="Large">Large</option><option value="Moyen">Moyen</option></select></br></div> ';
  dataTable_tf += '<div class="col-md-6 " id="divd-' + row + '"><input class="form-control" id="prix-' + row + '" type="number" aria-describedby="nameHelp" placeholder="entrer le prix" name="prix" value="' + prix + '" min=0 disabled="true"></br></div> ';
  dataTable_tf += '<div class="col-md-4 " id="dive-' + row + '"><input class="form-control" id="qte-' + row + '" type="number" aria-describedby="nameHelp" placeholder="quantite" name="quantite" value="' + quantite + '" min=1 disabled="true"></br></div> ';
  dataTable_tf += '<div class="col-md-4 " id="divg-' + row + '"><input class="form-control" id="cId-' + row + '" type="hidden" aria-describedby="nameHelp" placeholder="quantite" name="idCaracteristiques" value="' + Cid + '" disabled="true"></br></div> ';
  dataTable_tf += '<div class="col-md-2" id="divf-' + row + '"></br></div></div></div><div id="divh-' + row + '"><hr></div> ';
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

  produit.id =parseInt(id);
  produit.nom = $('#nom-poduit').val();
  produit.description = $('#description-poduit').val();
  // produit.nbre_vendu = $('#nb-vendu').val();
  produit.nbre_en_stock = parseInt($('#nb-poduit').val());
  produit.rabais = parseInt($('#nb-rabais').val());
  var ActiverProd = 0;
  if ($('#toggle-two').prop('checked') == true)
  ActiverProd = 1;
  produit.Activer = ActiverProd;
  data = JSON.stringify(produit);
  //console.log(data);
  var url = fullUrl + 'modifierproduit';
  updateProduit(data, url);
  caracteristicProduit(id);
}

function caracteristicProduit(argument) {
  console.log(currentrows+" argument: "+argument);

  for (i = 0; i < currentrows; i++) {
    var id = parseInt($('#cId-'+i).val(), 10);
    var preview = document.querySelector('#divimg-' + i + ' img');
    var preview_1 = document.querySelector('#divimgg-' + i + ' img');
    //dateFormat retourne une chaine vide pour les date invalides
    var caracteristics = {};
    caracteristics.produit_idProduit = parseInt(argument, 10);
    caracteristics.id = id;
    caracteristics.Image = preview.src;
    caracteristics.Image_1 = preview_1.src;
    caracteristics.Couleur = $('#couleur-' + i).val();
    caracteristics.Prix = parseInt($('#prix-' + i).val());
    caracteristics.Size = $('#size-' + i).val();
    caracteristics.Quantite = parseInt($('#qte-' + i).val());
    data = JSON.stringify(caracteristics);
    console.log(data);
    var url = fullUrl + 'modifierproduit/caracteristics';
    updateProduit(data, url);
  }
}

function updateProduit(data, url)
{
  $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      crossDomain: true,
      data: data,
      success: function (rs) {      
            $('#result-title').html('Reultat de l\'operation');
            $('#result-info').html(rs.status);
            $.when($('#myModal').modal('show').delay(3000)).done(function(){
              //window.location = "index.php?p=listerVetement";
            });   
          },
      error: function (xhr,status,error) {
        $('#result-title').html('Reultat de l\'operation');
        $('#result-info').html('Echec de l\'operation encour');
        $('#myModal').modal('show');
        console.log("Status: " + status);
        console.log("Error: " + error);
        console.log("xhr: " + JSON.stringify(xhr));
      }
  });
}

function fullcategorie(chaine, id = 1) {
  var items = [
  ];
  var url = fullUrl + 'categorie'
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    crossDomain: true,
  }).done(function (data) {
    var items = [
    ];
    $.each(data, function (key, personnel) {
      var mon = '';
      if (personnel.id == id)
      mon = 'selected'
      personnels = '<option  ' + mon + ' value="' + personnel.id + '">' + personnel.type + '</option>';
      items.push(personnels);
    });
    $('#' + chaine).append(items);
    console.log(items);
  });
}