  
 
  var token=sessionStorage.getItem("token_vente_en_ligne");
  var id=sessionStorage.getItem("id_user_vente_en_ligne");

if ((token == null) || (token == "undefined") || (token == "") && (id == null) || (id == "undefined") || (id == ""))
  {
  $('#header').load('headerGuest.php');
  } 
  else {
  $('#header').load('headeruser.php');
}

 