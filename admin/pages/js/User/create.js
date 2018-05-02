


function createRow(row) {
  var item = [];
  tabItem ='<div class="col-md-12">'
  tabItem += '<div class="col-md-4 pull-left" id="role'+row+'">';
  tabItem += '<div class="form-group">';
  tabItem += '<select class="form-control" id="roles'+row+'">';
  tabItem += '</select> ';
  tabItem += '</div>';
  tabItem += '</div>';
  tabItem += '<div class="col-md-8" >';
  tabItem += ' <button type="button" id="'+row+'" onclick="supprimerRow('+row+');" class="btn btn-danger pull-right" >supprimer role</button>';
  tabItem += '</div>';
  tabItem += '</div>';
  item.push(tabItem);
  $('#tableday-id').append(item);

}


//Pour verifier que les mots de passe sont les memes
$(document).ready(function(){

	//afficher les role dans une liste deroulantes
	getRole();

	$password = $("#user-password");
	$confirmP = $("#user-cPassword");

	$password.keyup(function(){
		if($(this).val().length < 5){
			$(this).css({
				borderColor : 'red',
				color : 'red'
			});
			$(this).addClass('glyphicon glyphicon-ok');
		}else{
			$(this).css({
				borderColor : 'green',
				color : 'green'
			});
		}
	});

	$confirmP.keyup(function(){
		if($(this).val() != $password.val()){
			$(this).css({
				borderColor : 'red',
				color : 'red'
			});	
		}else{
			$(this).addClass('glyphicon glyphicon-ok');
			$(this).css({
				borderColor : 'green',
				color : 'green'
			});
		}
	})
});


function addUser()
{


}
 

function sendData(url, data, option)
{

}

function getRole(chaine)
{
		var items = [];
	  var url = fullUrl + 'role'
	  $.ajax({
	    url: url,
	    type: 'GET',
	    dataType: 'json',
	    crossDomain: true,
	  }).done(function (data) {
	    var items = [];

	    $.each(data, function (key, value) {

	      values = '<option   value="' + value.id + '">' + value.nom + '</option>';
	      items.push(values);
	    });

	    $('#user-role').append(items);
	    console.log(items);
	  });

}
                                                            
                           


                                    
