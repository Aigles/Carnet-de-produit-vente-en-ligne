var initrow = 0;
var schedules = [];
var executer = 0;
var currentrow = initrow;

for (i = 0; i <= initrow; i++) {
  createRow(i);
  //console.log('Creation du ligne: '+i);
}

//la fonction pour ajouter une ligne pour la creation d'un ou des roles
$('#addRole').click(function () {
  var nbligne = parseInt($('#ligne').val(), 10);
  for (i = 0; i < nbligne; i++) {
    currentrow++;
    createRow(currentrow);
  	console.log('Creation du ligne: '+currentrow);
  }
});

function createRow(row) {
  var item = [];
  tabItem ='<div class="col-md-12">'
  tabItem += '<div class="col-md-4 pull-left" id="role'+row+'">';
  tabItem += '<div class="form-group">';
  tabItem += '<select class="form-control">';
  tabItem += '<option value="01">Lecture</option>';
  tabItem += '<option value="02">ecritur</option>';
  tabItem += '<option value="03">execution</option>';
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

function supprimerRow(id)
{
	$(document).ready(function(){
		console.log(id);
		$('#role'+id+' ').remove();
		$('#'+id+'').remove();
		currentrow -= 1;
		
	});
}

//Pour verifier que les mots de passe sont les memes
$(document).ready(function(){

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

 
                                                            
                           


                                    
