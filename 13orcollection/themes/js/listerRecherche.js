

 $.ajaxSetup({ cache: false });
 $('#srchFld').keyup(function(){
  $('#result').html('écrit...');
  $('#state').empty();
  var searchField = $('#srchFld').val();
  if (searchField.length>2) {
  var expression = new RegExp(searchField, "i");
  var trouver= false;
  $.getJSON(Fullurl+"produit", function(data) {
    $('#result').empty();
   $.each(data, function(key, value){

    if(value.nom.search(expression)!= -1)
    {

     $('#result').append('<li class="list-group-item link-class"><a href="index.php?p=detail&pid='+value.id+'"><img src="'+value.caracteristic[0].image+'" height="30" width="30" class="img-thumbnail" /> '+value.nom+' | <span class="text-muted"> ($'+value.caracteristic[0].prix+'.00)</span></a></li>');
   trouver = true;
    } 
  });
    if(!trouver)
    {
      $('#result').append('<p style="color: #faa732;"><span class="icon-exclamation-sign"></span>aucun résultat pour: '+searchField+'...</p>');
    } 
    
  });
}
if (searchField.length<1) {
  
    $('#result').empty();
}
 });
 
 $('#result').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  $('#srchFld').val($.trim(click_text[0]));
  $("#result").html('');
 });
