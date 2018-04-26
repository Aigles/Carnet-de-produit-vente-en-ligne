function supprimerProduit(id)
{
  console.log(id);

  $.ajax({
    url: fullUrl + 'deleteproduit/'+id,
    type: 'POST',
    crossDomain: true,
    Accept: 'application/json;charset=UTF-8',
    success: function (rs) {      
      $('#result-title').html('Reultat de l\'operation');
      $('#result-info').html(rs.status);
      $.when($('#myModal').modal('show').delay(3000)).done(function(){
        location.reload();
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
