$.ajax({
    // url: Fullurl+"produit",
    url: fullUrl + "statistique",
    type: 'GET',
    dataType: 'json',
    crossDomain: true,
    Accept: 'application/json;charset=UTF-8'
  }).done(function (data) {
  
    text='<div class="col-md-3 col-sm-3 col-xs-6"><a href="index.php?p=listerUser" data-toggle="tooltip" title="'+data.total_membre_jour+' nouveau(x) membre(s)." class="well top-block" href="#"><i class="glyphicon glyphicon-user blue"></i><div>Total Membres</div><div>'+data.total_membre+'</div> <span class="notification">'+data.total_membre_jour+'</span></a></div>';
    text+='<div class="col-md-3 col-sm-3 col-xs-6"><a href="index.php?p=listerVetement" data-toggle="tooltip" title="'+data.total_produit_jour+' nouveau(x) produit(s)." class="well top-block" href="#"><i class="glyphicon glyphicon-list green"></i> <div>Produits</div><div>'+data.total_produit+'</div> <span class="notification green">'+data.total_produit_jour+'</span></a></div>';

    text+='<div class="col-md-3 col-sm-3 col-xs-6"><a href="index.php?p=listerCommande" data-toggle="tooltip" title="'+data.total_commande_jour+' nouvelle(s) commande(s)." class="well top-block" href="#"><i class="glyphicon glyphicon-shopping-cart yellow"></i><div>Total Commande</div><div>'+data.total_commande+'</div><span class="notification yellow">'+data.total_commande_jour+'</span></a></div>';

    text+=' <div class="col-md-3 col-sm-3 col-xs-6"><a href="index.php?p=listerClient" data-toggle="tooltip" title="'+data.total_client_jour+' nouveau(x) client(s)." class="well top-block" href="#"><i class="glyphicon glyphicon-user red"></i><div>Clients</div><div>'+data.total_client+'</div><span class="notification red">'+data.total_client_jour+'</span></a></div>';
    $('#board').empty();
    $('#board').append(text);
});
  

  