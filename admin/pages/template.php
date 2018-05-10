<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>13 or Collection | Admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Charisma, a fully featured, responsive, HTML5, Bootstrap admin template.">
    <meta name="author" content="Muhammad Usman">
    <!-- The styles -->
    <link id="bs-css" href="css/bootstrap-cerulean.min.css" rel="stylesheet">

    <link href="css/charisma-app.css" rel="stylesheet">
    <link href='bower_components/fullcalendar/dist/fullcalendar.css' rel='stylesheet'>
    <link href='bower_components/fullcalendar/dist/fullcalendar.print.css' rel='stylesheet' media='print'>
    <link href='bower_components/chosen/chosen.min.css' rel='stylesheet'>
    <link href='bower_components/colorbox/example3/colorbox.css' rel='stylesheet'>
    <link href='bower_components/responsive-tables/responsive-tables.css' rel='stylesheet'>
    <link href='bower_components/bootstrap-tour/build/css/bootstrap-tour.min.css' rel='stylesheet'>
    <link href='css/jquery.noty.css' rel='stylesheet'>
    <link href='css/noty_theme_default.css' rel='stylesheet'>
    <link href='css/elfinder.min.css' rel='stylesheet'>
    <link href='css/elfinder.theme.css' rel='stylesheet'>
    <link href='css/jquery.iphone.toggle.css' rel='stylesheet'>
    <link href='css/uploadify.css' rel='stylesheet'>
    <link href='css/animate.min.css' rel='stylesheet'>

    <!-- jQuery -->
    <script src="bower_components/jquery/jquery.min.js"></script>
    <script src="js/config.js"></script>


    <script src="js/login/checkConnection.js"></script>
    <!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- The fav icon -->
    <link rel="shortcut icon" href="img/favicon.ico">

</head>
<body>
    <!-- topbar starts -->

    <div class="navbar " role="navinavbar-defaultgation" id="navbar">
        <div class="navbar-inner">
            <button type="button" class="navbar-toggle pull-left animated flip">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html"> <img alt="Charisma Logo" src="img/logo20.png" class="hidden-xs"/>
                <span>13 or C.</span></a>

            <!-- user dropdown starts -->
            <div class="btn-group pull-right">
                <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <i class="glyphicon glyphicon-user"></i><span class="hidden-sm hidden-xs"> admin</span>
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#">Profil</a></li>
                    <li class="divider"></li>
                    <li><a href="login.php" onclick="sessionStorage.clear();">Decconnexion</a></li>
                </ul>
            </div>
            <!-- user dropdown ends -->

            <!-- theme selector starts -->
            <div class="btn-group pull-right theme-container animated tada">
                <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <i class="glyphicon glyphicon-tint"></i><span
                        class="hidden-sm hidden-xs"> Change Theme / Skin</span>
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" id="themes">
                    <li><a data-value="classic" href="#"><i class="whitespace"></i> Classic</a></li>
                    <li><a data-value="cerulean" href="#"><i class="whitespace"></i> Cerulean</a></li>
                    <li><a data-value="cyborg" href="#"><i class="whitespace"></i> Cyborg</a></li>
                    <li><a data-value="simplex" href="#"><i class="whitespace"></i> Simplex</a></li>
                    <li><a data-value="darkly" href="#"><i class="whitespace"></i> Darkly</a></li>
                    <li><a data-value="lumen" href="#"><i class="whitespace"></i> Lumen</a></li>
                    <li><a data-value="slate" href="#"><i class="whitespace"></i> Slate</a></li>
                    <li><a data-value="spacelab" href="#"><i class="whitespace"></i> Spacelab</a></li>
                    <li><a data-value="united" href="#"><i class="whitespace"></i> United</a></li>
                </ul>
            </div>
            <!-- theme selector ends -->
            <ul class="collapse navbar-collapse nav navbar-nav top-menu">
                <li>
                    <form class="navbar-search pull-left">
                        <input placeholder="Search" class="search-query form-control col-md-10" name="query" type="text">
                    </form>
                </li>
            </ul>
        </div>
        
    </div>
    <!-- topbar ends -->
<div class="ch-container">
    <div class="row">
        
        <!-- left menu starts -->
        <div class="col-sm-2 col-lg-2" >
            <div class="sidebar-nav">
                <div class="nav-canvas" >
                    <div class="nav-sm nav nav-stacked">


                    </div>

                    <ul class="nav nav-pills nav-stacked main-menu">
                        <li class="nav-header"> Main</li>
                        <li><a class="ajax-link" href="index.php?p=home"><i class="glyphicon glyphicon-home"></i><span> Tableau de Bord</span></a>
                        </li>
                        <li class="accordion">
                            <a href="#"><i class="glyphicon glyphicon-gift"></i><span>Vetement</span></a>
                            <ul class="nav nav-pills nav-stacked">
                                <li><a href="index.php?p=creerVetement">Ajouter Vetement</a></li>
                                <li><a href="index.php?p=listerVetement">Lister Vetement</a></li>
                            </ul>
                        </li>
                        <li class="accordion">
                            <a href="#"><i class="glyphicon glyphicon-list-alt"></i><span>Commande</span></a>
                            <ul class="nav nav-pills nav-stacked">
                                <li><a href="index.php?p=creerCommande">Passer une commande</a></li>
                                <li><a href="index.php?p=listerCommande">Lister Commande</a></li>
                            </ul>
                        </li>
                        <li class="accordion">
                            <a href="#"><i class="glyphicon glyphicon-calendar"></i><span>Categorie</span></a>
                            <ul class="nav nav-pills nav-stacked">
                                <li><a href="index.php?p=creerCategorie">Ajouter Categorie</a></li>
                                <li><a href="index.php?p=listerCategorie">Lister Categorie</a></li>
                            </ul>
                        </li>
                        <li class="accordion">
                            <a href="#"><i class="glyphicon glyphicon-user"></i><span>User</span></a>
                            <ul class="nav nav-pills nav-stacked">
                                <li><a href="index.php?p=creerUser">Ajouter User</a></li>
                                <li><a href="index.php?p=listerUser">Lister User</a></li>
                            </ul>
                        </li>
                        <li class="accordion">
                            <a href="#"><i class="glyphicon glyphicon-edit"></i><span>Paiements</span></a>
                            <ul class="nav nav-pills nav-stacked">
                                <li><a href="index.php?p=creerPaiement">Effectuer Paiement</a></li>
                                <li><a href="index.php?p=listerPaiement">Lister Paiement</a></li>
                            </ul>
                        </li>
                        <li class="accordion">
                            <a href="#"><i class="glyphicon glyphicon-briefcase"></i><span>Livraison</span></a>
                            <ul class="nav nav-pills nav-stacked">
                                <li><a href="index.php?p=listerLivraison">Lister Livraison</a></li>
                            </ul>
                        </li>

                        <li class="accordion">
                            <a href="#"><i class="glyphicon glyphicon-lock"></i><span>Permissions</span></a>
                            <ul class="nav nav-pills nav-stacked">
                                <li><a href="index.php?p=creerPermission">Creer Permission</a></li>
                                <li><a href="index.php?p=listerPermission">Lister Permissions</a></li>
                            </ul>
                        </li>
                        <li class="accordion">
                            <a href="#"><i class="glyphicon glyphicon-tasks"></i><span>Role</span></a>
                            <ul class="nav nav-pills nav-stacked">
                                <li><a href="index.php?p=creerRole">Effectuer Role</a></li>
                                <li><a href="index.php?p=listerRole">Lister Role</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>        
        </div><!-- fin de la premiere colonne -->
        
        <div id="content" class="col-lg-10 col-sm-10">
            <?php echo $content; ?>
        </div>

    </div><!--/fluid-row-->
    <hr>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h3 id="result-title"></h3>
                </div>
                <div class="modal-body">
                    <p id="result-info"></p>
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn btn-danger" data-dismiss="modal">Close</a>
                    
                </div>
            </div>
        </div>
    </div>
</div>

<!-- chart libraries start -->

<script src="bower_components/flot/excanvas.min.js"></script>
<script src="bower_components/flot/jquery.flot.js"></script>
<script src="bower_components/flot/jquery.flot.pie.js"></script>
<script src="bower_components/flot/jquery.flot.stack.js"></script>
<script src="bower_components/flot/jquery.flot.resize.js"></script>
<!-- chart libraries end -->
<script src="js/init-chart.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

<!-- library for cookie management -->
<script src="js/jquery.cookie.js"></script>
<!-- calender plugin -->

<script src='bower_components/moment/min/moment.min.js'></script>
<script src='bower_components/fullcalendar/dist/fullcalendar.min.js'></script>
<script src='bower_components/moment/min/moment-with-locales.min.js'></script>
<!-- data table plugin -->
<script src='js/jquery.dataTables.min.js'></script>
<!-- select or dropdown enhancer -->
<script src="bower_components/chosen/chosen.jquery.min.js"></script>
<!-- plugin for gallery image view -->
<script src="bower_components/colorbox/jquery.colorbox-min.js"></script>
<!-- notification plugin -->
<script src="js/jquery.noty.js"></script>
<!-- library for making tables responsive -->
<script src="bower_components/responsive-tables/responsive-tables.js"></script>
<!-- tour plugin -->
<script src="bower_components/bootstrap-tour/build/js/bootstrap-tour.min.js"></script>
<!-- star rating plugin -->
<script src="js/jquery.raty.min.js"></script>
<!-- for iOS style toggle switch -->
<script src="js/jquery.iphone.toggle.js"></script>
<!-- autogrowing textarea plugin -->
<script src="js/jquery.autogrow-textarea.js"></script>
<!-- multiple file upload plugin -->
<script src="js/jquery.uploadify-3.1.min.js"></script>
<!-- history.js for cross-browser state change on ajax -->
<script src="js/jquery.history.js"></script>
<!-- application script for Charisma demo -->
<script src="js/charisma.js"></script>
<script src="js/jquery.validate.min.js"></script>

</body> 
</html>
