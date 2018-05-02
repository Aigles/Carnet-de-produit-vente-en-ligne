<?php 
function display_errors($errors){
	// $display = '<div class="alert alert-danger text-center"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
	$display = '<div class="alert alert-danger" role="alert"><span class="sr-only">Erreur: </span>';
	foreach($errors as $error){
		$display .= '<p>'.$error.'</p>';
	}
	$display .= ' </div>';
	return $display;
}

function sanitize($dirty){
	return htmlentities($dirty,ENT_QUOTES,"UTF-8");
}

function money($number){
	return '$'.number_format($number,2);
}

function login($user_id){
	$_SESSION['SBUser'] = $user_id;
	global $db;
	$date = date("Y-m-d H:i:s");
	$db->query("UPDATE users SET date_derniere_connection = '$date' WHERE idUsers = '$user_id'");
	$_SESSION['success_flash'] = 'You are now logged in!';
	header('Location: index.php');
}

function is_logged_in(){
	if (isset($_SESSION['SBUser']) && $_SESSION['SBUser'] > 0) {
		# code...
		return true;
	}
	return false;
}

function login_error_redirect($url = 'login.php'){
	$_SESSION['error_flash'] = 'You must be logged in to access that page!';
	header('LOCATION: '.$url);
}

?>