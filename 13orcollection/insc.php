<?php 
//require_once $_SERVER['DOCUMENT_ROOT'].'/13orcollection/core/init.php';
require_once realpath("core/init.php"); 
    $nom =((isset($_POST['nom']))?sanitize($_POST['nom']):'');
    $nom =trim($nom);
    $prenom =((isset($_POST['prenom']))?sanitize($_POST['prenom']):'');
    $prenom =trim($prenom);
    $email =((isset($_POST['email']))?sanitize($_POST['email']):'');
    $email =trim($email);
    $password1 =((isset($_POST['password1']))?sanitize($_POST['password1']):'');
    $password1 =trim($password1);
    $password2 =((isset($_POST['password2']))?sanitize($_POST['password2']):'');
    $password2 =trim($password2);
    $errors = array(); 

    if($_POST){

        //form validation
        if (empty($_POST['nom']) || empty($_POST['prenom']) || empty($_POST['email']) || empty($_POST['password1']) || empty($_POST['password2'])) {
           $errors[] = '<span class="icon-exclamation-sign" aria-hidden="true"></span>Remplir tous les champs svp';
        }

        //validate email
        if (!filter_var($email,FILTER_VALIDATE_EMAIL)) {
            $errors[] = '<span class="icon-exclamation-sign" aria-hidden="true"></span>Adresse éléctronique non valide';
        }

       // passwords are differents 
       if($_POST['password1'] != $_POST['password2']){
        $errors[] = '<span class="icon-exclamation-sign" aria-hidden="true"></span>Mot de passe differents';
       }
       // if(isset($_POST['password1']) == isset($_POST['password2'])){
       //  $errors[] = '<span class="icon-exclamation-sign" aria-hidden="true"></span>Mot de passe identiques';
       // }

        //password is more than 6 characters
        if(strlen($password1) < 6 && !empty($_POST['password1']) || strlen($password2)  < 6 && !empty($_POST['password2'])){
            $errors[] = '<span class="icon-exclamation-sign" aria-hidden="true"></span>Mot de passe inférieur à 6 caractères.';
        }
        
    }
?>