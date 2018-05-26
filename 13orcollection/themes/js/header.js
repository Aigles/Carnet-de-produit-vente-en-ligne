  $(document).ready(function () {
 
  var tokenn=sessionStorage.getItem("token_vente_en_ligne");
  var idd=sessionStorage.getItem("id_user_vente_en_ligne");

if ((tokenn == null) || (tokenn == undefined) || (tokenn == "") && (idd == null) || (idd == undefined) || (idd == ""))
  {
  $('#header').load('headerGuest.php');
  } 
  else {
  $('#header').load('headeruser.php');
}

  });