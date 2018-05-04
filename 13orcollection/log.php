<?php 
//require_once $_SERVER['DOCUMENT_ROOT'].'/13orcollection/core/init.php';
require_once 'core/init.php'; 
// $password = 'password';
// $hashed = password_hash($password,PASSWORD_DEFAULT);
// echo $hashed;
    $email =((isset($_POST['email']))?sanitize($_POST['email']):'');
    $email =trim($email);
    $password =((isset($_POST['password']))?sanitize($_POST['password']):'');
    $password =trim($password);
    $hashed = password_hash($password,PASSWORD_DEFAULT);
    $errors = array(); 

    ?>

		
		<?php 
			if($_POST){

				//form validation
				if (empty($_POST['email']) || empty($_POST['password'])) {
				   $errors[] = '<span class="icon-exclamation-sign" aria-hidden="true"></span>You must provide Email and Password';
				}

				//validate email
				if (!filter_var($email,FILTER_VALIDATE_EMAIL)) {
					$errors[] = '<span class="icon-exclamation-sign" aria-hidden="true"></span>vous devez entrez un email valide';
				}
				
				//check if the email exist
				$query = $db->query("SELECT * FROM users WHERE email = '$email'");
					$user = mysqli_fetch_assoc($query);
					$userCount = mysqli_num_rows($query);
					//echo $userCount;
					if ($userCount < 1) {
					  $errors[] = '<span class="icon-exclamation-sign" aria-hidden="true"></span>Cet email n\'existe pas dans notre système ';
					}

				//Check for password
					if (!password_verify($password, $user['password'])) {
					  $errors[] = '<span class="icon-exclamation-sign" aria-hidden="true"></span>mot de passe incorrect ';
					}
				}
		 ?>