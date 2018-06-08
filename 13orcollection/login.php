<?php 
    include 'log.php';
?>

<style>
    .btn-large{
        border-radius: 0px;
        width:100%;
    }

</style>
<div id="mainBody">
    <div class="container">
    <div class="row">
<!-- Sidebar ================================================== -->

<!-- Sidebar End ================================================== -->
    <div class="span12">
    <!-- <ul class="breadcrumb">
        <li><a href="index.php">Acceuil</a> <span class="divider">/</span></li>
        <li class="active">Connection</li>
    </ul>  
    <hr class="soft"/>-->
    
    <!-- <div class="container" style=" margin-left: 80px;"> -->
        <div class="container">
    <div class="row" >
        
        <div class="span4"></div>
        <div class="span4">
            <div class="well" id="save_login">
            <h3><p class="textcolors text-center"> Connection </p></h3> <hr><br/>
            <form method="post" class="form-vertical loginFrm">

               
              <div class="control-group">
                <label class="control-label" for="inputEmail1">Email</label>
                <div class="controls">
                  <input required class="span3"  type="email" name="email" id="inputEmail1" placeholder="Email" value="<?=$email;?>">
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="inputPassword1">Password</label>
                <div class="controls">
                  <input required type="password" class="span3"  name="password" id="inputPassword1" placeholder="Password" value="<?=$password;?>">
                </div>
              </div><br/>
              <div class="control-group">
                <div class="controls">
                  <button type="button" class="btn btn-warning btn-large block" onclick="connection();">Connecter </button> 
                  <a  href="#"><p class="text-center">Forget password?</p></a>
                </div>
              </div>
            </form>
        </div>
        </div>
    </div>
</div>

    <!-- Commencement de modal -->
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
     <!-- fin de modal -->

</div></div>
</div>
<!-- MainBody End ============================= -->


    <script src="themes/js/jquery.validate.min.js"></script>
    <script src="themes/js/login/login.js"></script>
    <script src="themes/js/config.js"></script>
    <script src="themes/js/rechCategorie.js"></script>
</body>
</html>
    <script src="themes/js/header.js"></script>
