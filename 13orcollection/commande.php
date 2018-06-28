<style>
.well-block {
    background-color: #fff;
    border: 1px solid #e9e6e8;
    padding: 40px;
    margin: auto;
    /*color: darkgoldenrod;*/
    color: darkslategray;
}

.well-title {
    margin-bottom: 40px;
}
.btn-large{
    border-radius: 0px;
    width:100%;
}
input[type="text"].form-control,input[type="date"]{
    border-radius: 0px;
    /*width:360px;*/
    height: 30px;
}
select{
    width:376px;
    height: 40px;
}
</style>
<script src="themes/js/login/checkConnection.js"></script>

<div >
	<a href="#"><img style="width:100%;height:10%; margin-top:-15px;" src="themes/images/carousel/photo.png"/></a>
		 
</div><hr>

<!-- =========== END Header =========================================-->
    <h3 class="textcolors text-center">Adresse d'expédition </h3><hr>
        <div class="container">
    <div class="row">

    <div class="span12">



   <div class="container">
            <div class="row">
                <div class="span6">
                    <div class="well">
                    <!-- <div class="well"> -->
                        <div class="well-title">
                            
            <h3><p class="textcolors text-center"> Formulaire de la livraison </p></h3> <hr>
                        </div>
                        <form style ="position: center;">
                            <!-- Form start -->
                            <div class="row">
                            <div id="result-statut" class="span6" style="color: red;"></div>
                                <div class="span6">
                                    <div class="form-group">
                                        <label class="control-label" for="name">Nom</label>
                                        <input id="name" name="name" type="text" placeholder="John Smith" class="form-control span4">
                                    </div>
                                </div>
                                <!-- Text input-->
                                <div class="span6">
                                    <div class="form-group">
                                        <label class="control-label" for="email">E-mail</label>
                                        <input id="email" name="email" type="text" placeholder="johnsmith@gmail.com" class="form-control span4">
                                    </div>
                                </div>
                                <!-- Text input-->
                                <div class="span6">
                                    <div class="form-group">
                                        <label class="control-label" for="telephone">Telephone</label>
                                        <input id="telephone" name="telephone" type="text" placeholder="+(509) 47111111" class="form-control span4">
                                    </div>
                                </div>
                                <!-- Text input-->
                                <div class="span6">
                                    <div class="form-group">
                                        <label class="control-label" for="pays">Code Postal</label>
                                        <input id="postal" name="postal" type="text" placeholder="C930W0" class="form-control span4">
                                    </div>
                                </div>
                                 <!-- Text input-->
                                 <div class="span6">
                                    <div class="form-group">
                                        <label class="control-label" for="pays">Ville</label>
                                        <input id="ville" name="pays" type="text" placeholder="Port-au-prince" class="form-control span4">
                                    </div>
                                </div>
                                <!-- Text input-->
                                <div class="span6">
                                    <div class="form-group">
                                        <label class="control-label" for="pays">Pays</label>
                                        <input id="pays" name="pays" type="text" placeholder="HAITI" class="form-control span4">
                                    </div>
                                </div>
                                <!-- Text input-->
                                <div class="span6">
                                    <div class="form-group">
                                        <label class="control-label" for="adresse">Adresse</label>
                                        <input id="adresse" name="adresse" type="text" placeholder="Delma 33 Rue charbonnière" class="form-control span4">
                                    </div>
                                </div>
                                <!-- Text input-->
                                <div class="span6">
                                    <div class="form-group">
                                        <label class="control-label" for="date">Date commande / livraison</label>
                                        <input id="date_commande" name="date" type="date" placeholder="" class="form-control span4">
                                    </div><br/>
                                </div>
                                
                                <!-- Select Basic -->
                                <!-- <div class="span12">
                                    <div class="form-group">
                                        <label class="control-label" for="appointmentfor">Appointment For</label>
                                        <select id="appointmentfor" name="appointmentfor" class="">
                                            <option value="Service#1">Service#1</option>
                                            <option value="Service#2">Service#2</option>
                                            <option value="Service#3">Service#3</option>
                                            <option value="Service#4">Service#4</option>
                                        </select>
                                    </div>
                                </div> -->
                                <!-- Button -->
                                <div class="span4">
                                    <div class="form-group">
                                        <a  href="#result-statut" id="" name="singlebutton" type="button" onclick="saveLivraison();" class="btn btn-large btn-warning">Livrer a cette adresse</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <!-- form end -->
                    </div>
                </div>
                <div class="span6">
                    <div class="well-block">
                        <div class="well-title">
                            <h2>Informations sur la livraison</h2>
                        </div>
                        <div class="feature-block">
                            <div class="feature feature-blurb-text">
                                <h4 class="feature-title">24/7 Hours Available</h4>
                                <div class="feature-content">
                                    <p>Integer nec nisi sed mi hendrerit mattis. Vestibulum mi nunc, ultricies quis vehicula et, iaculis in magnestibulum.</p>
                                </div>
                            </div>
                            <div class="feature feature-blurb-text">
                                <h4 class="feature-title">Experienced Staff Available</h4>
                                <div class="feature-content">
                                    <p>Aliquam sit amet mi eu libero fermentum bibendum pulvinar a turpis. Vestibulum quis feugiat risus. </p>
                                </div>
                            </div>
                            <div class="feature feature-blurb-text">
                                <h4 class="feature-title">Low Price & Fees</h4>
                                <div class="feature-content">
                                    <p>Praesent eu sollicitudin nunc. Cras malesuada vel nisi consequat pretium. Integer auctor elementum nulla suscipit in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div></div></div>
        

	<br/>
	
