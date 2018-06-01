

 $.ajaxSetup({ cache: false });
 $('#srchFld').keyup(function(){
  $('#result').html('');
  $('#state').val();
  var searchField = $('#srchFld').val();
  if (searchField.length>2) {
  var expression = new RegExp(searchField, "i");
  $.getJSON('http://localhost:1230/api/app/produit', function(data) {
   $.each(data, function(key, value){

    if(value.nom.search(expression)!= -1)
    {
     $('#result').append('<li class="list-group-item link-class"><a href="index.php?p=detail&pid='+value.id+'"><img src="'+value.caracteristic[0].image+'" height="30" width="30" class="img-thumbnail" /> '+value.nom+' | <span class="text-muted"> ($'+value.caracteristic[0].prix+'.00)</span></a></li>');
    }
    if(!value.nom.search(expression)!= -1)
    {
      $('#result').append('<p style="color: #faa732;"><span class="icon-exclamation-sign"></span>Aucun résultat pour: '+searchField+'...</p>');
    }  
  });
    
  });
}
 });
 
 $('#result').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  $('#srchFld').val($.trim(click_text[0]));
  $("#result").html('');
 });
