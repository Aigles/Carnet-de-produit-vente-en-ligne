<div class="col-lg-12 col-sm-12">
            <!-- content starts -->
<div>
    <ul class="breadcrumb">
        <li>
            <a href="#">Accueil</a>
        </li>
        <li>
            <a href="#">Tableau de bord</a>
        </li>
    </ul>
</div>
<div class=" row" id="board">
   
</div>


<div class="row">
<div class="box col-md-6">
        <div class="box-inner">
            <div class="box-header well" data-original-title="">
                <h2><i class="glyphicon glyphicon-list-alt"></i> Graphe sur les commandes par vetements</h2>

                <div class="box-icon">
                    <a href="#" class="btn btn-setting btn-round btn-default"><i
                            class="glyphicon glyphicon-cog"></i></a>
                    <a href="#" class="btn btn-minimize btn-round btn-default"><i
                            class="glyphicon glyphicon-chevron-up"></i></a>
                    <a href="#" class="btn btn-close btn-round btn-default"><i
                            class="glyphicon glyphicon-remove"></i></a>
                </div>
            </div>
            <div class="box-content">
                <div id="piechart" style="height:330px;"></div>
            </div>
        </div>
    </div>
    <div class="box col-md-6">
        <div class="box-inner">
            <div class="box-header well">
                <h2><i class="glyphicon glyphicon-list-alt"></i> Graphe sur la vente des vetements</h2>

                <div class="box-icon">
                    <a href="#" class="btn btn-setting btn-round btn-default"><i
                            class="glyphicon glyphicon-cog"></i></a>
                    <a href="#" class="btn btn-minimize btn-round btn-default"><i
                            class="glyphicon glyphicon-chevron-up"></i></a>
                    <a href="#" class="btn btn-close btn-round btn-default"><i
                            class="glyphicon glyphicon-remove"></i></a>
                </div>
            </div>
            <div class="box-content">
                <div id="sincos" class="center" style="height:300px"></div>
                <p id="hoverdata">Mouse position at (<span id="x">0</span>, <span id="y">0</span>). <span
                        id="clickdata"></span></p>
            </div>
        </div>
    </div> 
</div>
</div>
<script src="js/statistique/stat.js"></script>