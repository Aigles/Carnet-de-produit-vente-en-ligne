<style type="text/css">
.file {
  visibility: hidden;
  position: absolute;
}



</style>
<div>
    <ul class="breadcrumb">
       <li>
           <a href="#">Tableau de bord</a>
       </li>
       <li>
           <a href="#">Modifier Personnel</a>
       </li>
    </ul>
</div>

<div class="row">
    <div class="box col-md-12">
        <div class="box-inner">
            <div class="box-header well" data-original-title="">
                <h2><i class="glyphicon glyphicon-edit"></i> Modifier un Personnel</h2>

                <div class="box-icon">
                    <a href="#" class="btn btn-setting btn-round btn-default"><i
                            class="glyphicon glyphicon-cog"></i></a>
                    <a href="#" class="btn btn-minimize btn-round btn-default"><i
                            class="glyphicon glyphicon-chevron-up"></i></a>
                    <a href="#" class="btn btn-close btn-round btn-default"><i
                            class="glyphicon glyphicon-remove"></i></a>
                </div>
            </div>
            <div class="box-content" id="save_user">
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
                                <label for="exampleInputPassword1">Role</label>
                                <select class="form-control" id="user-role">
                                </select>
                            </div>
                
                        </div>
                        <div class="box col-md-6">
                        <div class="form-group" style="">
                        <div class="col-md-12 " id="divimg-row"><img class="img-rounded img-responsive" id="start-row" src="img/images.png" style="height:130px;" ></div>
                        <div class="col-md-12 " id="diva-row"><input class="btn btn-primary" id="start-row" required type="file" name="file" onchange="previewFile('#divimg-row','#diva-row')" style="width:150px;" accept=".jpg, .jpeg, .png"  textcontent="Choisir une image"></br>
                            </div>
                            <!-- <div class="form-group">
                                <label>Avatar</label>
                                <input type="file" name="img[]" class="file">
                                <div class="input-group col-xs-12">
                                  <span class="input-group-addon"><i class="glyphicon glyphicon-picture"></i></span>
                                  <input type="text" class="form-control " disabled placeholder="Upload Image">
                                  <span class="input-group-btn">
                                    <button class="browse btn btn-primary" type="button"><i class="glyphicon glyphicon-search"></i> Browse</button>
                                  </span>
                                </div>
                            </div> -->
                            <div class="form-group">
                             
                                <input type="password" class="form-control required" required id="user-password" placeholder="Entrer le mot de passe">
                            </div>
                            <div class="form-group">
                             
                                <input type="password" class="form-control required" required id="user-cPassword" placeholder="Confirmer le mot de passe">
                                <input type="hidden" name="id" id="user-id">
                            </div>                            
                        </div>
                    </div>                    
                            
                    <div class="row">
                        <div class="form-group">
                            <div class="col-md-offset-9">
                                <button type="reset" class="btn btn-default" >Annuler</button>
                                <button type="button" class="btn btn-primary" onclick="test();">Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(document).on('click', '.browse', function(){
      var file = $(this).parent().parent().parent().find('.file');
      file.trigger('click');
    });
    $(document).on('change', '.file', function(){
      $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
    });
</script>
    
<script src="js/main.js"></script>
<script src="js/Personnel/modifier.js"></script>

 