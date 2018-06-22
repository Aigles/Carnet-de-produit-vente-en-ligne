<script src="jquery.confirm.js"></script>
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
  <!-- <script src="js/jquery.min.js"></script> -->
  <!-- <link rel="stylesheet" href="bootstrap/css/bootstrap.css" /> -->
  <!-- <script src="js/bootstrap.min.js"></script> -->

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
		<input id="srchFld" class="srchFld" name="q" type="text" placeholder="Rechercher..." autocomplete="off" />
   		<ul class="list-group" id="result"></ul>
	  	<!-- <select class="srchTxt" id="search">
			<option>TOUT</option>
		</select>  
	  <button type="submit" id="submitButton" class="btn btn-warning">Recherche</button> -->
    
	</div>
  
    <ul id="topMenu" class="nav pull-right">
	 <li class="bold"><a href="index.php?p=acceuil"><span class="textcolors icon-home"></span>Accueil</a></li>
   <li><a href="index.php?p=panier"><span class="badge badge-warning total-count"></span><span class="textcolors icon-shopping-cart"></span>Panier</a></li>
   
	 <li class="inscrire"><a href="index.php?p=inscription">Inscrire</a></li>
	 <li class="connecter"><a href="index.php?p=connection" id="modalOption"><span class="badge badge-warning">Connecter</span></a></li>

   <!-- <li class=""><a href="special_offer.html">Offres</a></li>
   <li class=""><a href="normal.html">Livraison</a></li>
   <li class=""><a href="contact.html">Contact</a></li> -->

   
    </ul>
  </div>
</div>

<!-- ce script affichera le panier a Zero dans le menu et faire tout le traitement -->
<script src="themes/js/js/panier.js"></script>
    <script src="themes/js/listerRecherche.js"></script>
<script type="text/javascript">
  $("#modalOption").confirm({
    text: "Message de confirmation",
    modalOptionsBackdrop: 'static',
    modalOptionsKeyboard: false,
    confirm: function() {
        alert("vous avez deconnecte.");
    },
    cancel: function() {
        alert("vous avez annule.");
    }
});

</script>

