    
var token=sessionStorage.getItem("token_vente_en_ligne");
var IdUser=sessionStorage.getItem("id_user_vente_en_ligne");

function commande(){

if ((token==null) || (token=="undefined") || (token=="")){
window.location = "index.php?p=connection";
}
else{
	window.location = "index.php?p=commande";
}
}