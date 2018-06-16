
<!-- Bootstrap style --> 
    <link id="callCss" rel="stylesheet" href="themes/bootshop/bootstrap.min.css" media="screen"/>
    <link href="themes/css/base.css" rel="stylesheet" media="screen"/>
<!-- Bootstrap style responsive -->	
	<link href="themes/css/bootstrap-responsive.min.css" rel="stylesheet"/>
	<link href="themes/css/font-awesome.css" rel="stylesheet" type="text/css">
<!-- Google-code-prettify -->	
	<link href="themes/js/google-code-prettify/prettify.css" rel="stylesheet"/>
<!-- fav and touch icons -->
    <link rel="shortcut icon" href="themes/images/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="themes/images/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="themes/images/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="themes/imagcarouselBlkes/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-72-precomposedple-touch-icon-precomposed" href="themes/images/ico/apple-touch-icon-57-precomposed.png">
	<style type="text/css" id="enject"></style>

  <style>

   /*backgroundm-image: linear-gradient(#52575C, #3A3F44 70%, #3A3F44);
   background-repeat: no-repeat;*/
  #result 
  {
   margin:0;
   margin-top:-6px;margin-left: 79px;
   position: absolute;
   /*background-color: cornsilk;*/
   width: 100%;
   max-width:220px;
   /cursor: pointer;
   overflow-y: auto;
   max-height: 158px;
   box-sizing: border-box;
   z-index: 1001;
   font-size: 11px;
   font-style: italic; 
   font-weight: bold; 
   line-height: 20px;
  }
  .link-class{
    padding: 4px;
    padding-bottom: 0;
    padding-top: 0;
    list-style: none;
   background-color: #3A3F44;
  }
  .link-class a{color: #fff;
  }
  .link-class:hover
  {
    background-color: #faa732;
  }
  .link-class:hover a
  {
   text-decoration: none ;
   color: #fff;
  }
  </style>

  <!-- Navbar ================================================== -->

<div id="logoArea" class="navbar">
<a id="smallScreen" data-target="#topMenu" data-toggle="collapse" class="btn btn-navbar">
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
</a>
  <div class="navbar-inner">
    <a class="brand" href="index.php?p=acceuil">13 Or Collection<!-- <img src="themes/images/" alt=""/> --></a>
	<div class="form-inline navbar-search" method="post" >
		<input id="srchFld" class="srchFld" type="text" placeholder="Rechercher..." autocomplete="off"/>
   		<ul class="list-group" id="result"></ul>
	  	<!-- <select class="srchTxt" id="search">
			<option>TOUT</option>
		</select> -->  
	  <!-- <button type="submit" id="submitButton" class="btn btn-warning">Recherche</button> -->
	</div>
    <!-- <ul id="topMenu" class="nav pull-right">
	 <li class="bold"><a href="index.php">Accueil</a></li>
	 <li><a href="cart.php"><span class="badge badge-warning total-count"></span><span class="icon-shopping-cart"></span>Panier</a></li>
   <li class="username"><a href="?=Profile"><span class="textcolors "><span class="icon-user"></span>Profile</span></a></li>
   <li class="commande"><a href="?=USER"><span class="bold">Doudou Jeyda</span></a></li>
	 <li class="deconnecter"><a href="../../index.php" onclick="sessionStorage.clear();"><span class="badge badge-warning">Deconnecter</span></a></li>

	 
    </ul> -->
    <ul id="topMenu" class="nav pull-right">
   <li class="bold"><a href="index.php?p=acceuil"><span class="textcolors icon-home"></span>Accueil</a></li>
   <li><a href="index.php?p=panier"><span class="badge badge-warning total-count"></span><span class="textcolors icon-shopping-cart"></span>Panier</a></li>
   <li class="username"><a href="index.php?p=profile"><span class="textcolors icon-user"></span>Profile</a></li>
   <!-- <li ><a style="color: #faa732; cursor: default;">|</a></li> -->
   <li class="clientname"></li>
   <li class="deconnecter"><a style="cursor: default;" onclick="deconnection();"><span class="badge badge-warning">Deconnecter</span></a></li>

   <!-- <li class=""><a href="special_offer.html">Offres</a></li>
   <li class=""><a href="normal.html">Livraison</a></li>
   <li class=""><a href="contact.html">Contact</a og43w></li> -->

   
    </ul>
  </div>  
</div>

<script src="themes/js/js/panier.js"></script>
    <script src="themes/js/listerRecherche.js"></script>
<script>
function deconnection() {
  var id= sessionStorage.id_user_vente_en_ligne;

 $.ajax({
    url: Fullurl+"deconnecter/Utilisateur/"+id,
    type: "GET",
    dataType: "json", 
    crossDomain: true,
    Accept : "application/json;charset=UTF-8"
    }).done(function (data) {
      sessionStorage.removeItem('id_user_vente_en_ligne');
      sessionStorage.removeItem('token_vente_en_ligne');
      location.reload();
    // window.location = "index.php?p=connection";
  }).fail(function (error) {
  
  });

 
}
</script>