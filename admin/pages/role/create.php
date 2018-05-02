<style type="text/css">
    #description-role{
        height: 150px;
    }
</style>
<div>
    <ul class="breadcrumb">
       <li>
           <a href="#">Tableau de bord</a>
       </li>
       <li>
           <a href="#">Creation d'un role</a>
       </li>
    </ul>
</div>

<div class="row">
    <div class="box col-md-12">
        <div class="box-inner">
            <div class="box-header well" data-original-title="">
                <h2><i class="glyphicon glyphicon-edit"></i> Ajouter un role</h2>

                <div class="box-icon">
                    <a href="#" class="btn btn-setting btn-round btn-default"><i
                            class="glyphicon glyphicon-cog"></i></a>
                    <a href="#" class="btn btn-minimize btn-round btn-default"><i
                            class="glyphicon glyphicon-chevron-up"></i></a>
                    <a href="#" class="btn btn-close btn-round btn-default"><i
                            class="glyphicon glyphicon-remove"></i></a>
                </div>
            </div>
            <div class="box-content" id="save_role">
                <form role="form">
                    <div class="row">
                        <div class="box col-md-6">  
                            <div class="form-group">
                                <label for="exampleInputEmail1">Nom</label>
                                <input type="text" class="form-control " required id="nom-rolle" placeholder="Entrer le nom du Role">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Description</label>
                                <textarea type="text" class="form-control autogrow required" id="description-rolle" required placeholder="Faite la description du role "></textarea>
                            </div>                   
                        </div>                        
                    </div>
                            
                    <div class="row">
                        <div class="form-group">
                            <div class="col-md-offset-9">
                                <button type="reset" class="btn btn-default" >Annuler</button>
                                <button type="button" class="btn btn-primary" onclick="creerRole()">Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script src="js/Role/create.js"></script>
    

 