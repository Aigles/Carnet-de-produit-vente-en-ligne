<div>
    <ul class="breadcrumb">
       <li>
           <a href="#">Tableau de bord</a>
       </li>
       <li>
           <a href="#">ajouter utilisateur</a>
       </li>
    </ul>
</div>

<div class="row">
    <div class="box col-md-12">
        <div class="box-inner">
            <div class="box-header well" data-original-title="">
                <h2><i class="glyphicon glyphicon-edit"></i> Creer un utilisateur</h2>

                <div class="box-icon">
                    <a href="#" class="btn btn-setting btn-round btn-default"><i
                            class="glyphicon glyphicon-cog"></i></a>
                    <a href="#" class="btn btn-minimize btn-round btn-default"><i
                            class="glyphicon glyphicon-chevron-up"></i></a>
                    <a href="#" class="btn btn-close btn-round btn-default"><i
                            class="glyphicon glyphicon-remove"></i></a>
                </div>
            </div>
            <div class="box-content" id="save_vetement">
                <form role="form">
                    <div class="row">
                        <div class="box col-md-6">  
                            <div class="form-group">
                                <label for="exampleInputEmail1">Nom</label>
                                <input type="text" class="form-control " required id="user-nom" placeholder="Entrer le nom">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Prenom</label>
                                <input type="text" class="form-control required" required id="user-prenom" placeholder="Entre le prenom">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Email</label>
                                <input type="email" class="form-control required" required id="user-email" placeholder="Entre l'adresse email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Categorie</label>
                                <select class="form-control" id="user-role">
                                </select>
                            </div>
                
                        </div>
                        <div class="box col-md-6">  
                             <div class="form-group">
                                <label for="exampleInputPassword1">Avatar</label>
                                <input type="text" class="form-control required" required id="user-avatar" placeholder="Choisir un avatar">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Mot de passe</label>
                                <input type="password" class="form-control required" required id="user-password" placeholder="Entrer le mot de passe">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Confirmer mot de passe</label>
                                <input type="password" class="form-control required" required id="user-cPassword" placeholder="Confirmer le mot de passe">
                            </div>                            
                        </div>
                    </div>                    
                            
                    <div class="row">
                        <div class="form-group">
                            <div class="col-md-offset-9">
                                <button type="reset" class="btn btn-default" >Annuler</button>
                                <button type="button" class="btn btn-primary" onclick="creerproduit()">Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script src="js/User/create.js"></script>
    

 