var token=sessionStorage.getItem("token_vente_en_ligne");
var IdUser=sessionStorage.getItem("id_user_vente_en_ligne");

if ((token==null) || (token==undefined) || (token=="")){
window.location = "../../login.php";
} 