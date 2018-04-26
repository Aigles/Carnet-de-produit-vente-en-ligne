function supprimerProduit(id)
{
  console.log(id);

  $.ajax({
    url: fullUrl + 'deleteproduit/'+id,
    type: 'POST',
    crossDomain: true,
    Accept: 'application/json;charset=UTF-8',
    success: function (rs) {
      console.log(rs);
      location.reload();
      alert('Suppression reuissite');
    },
    error: function (xhr,status,error) {
        console.log("Status: " + status);
        console.log("Error: " + error);
        console.log("xhr: " + JSON.stringify(xhr));
    }
    /*error: function (request, msg, error) {
      console.log("message: "+msg+" request:"+request+" error: "+error);
    }*/
  });

  //jQuery.load('index.php?p=listerVetement');
}
