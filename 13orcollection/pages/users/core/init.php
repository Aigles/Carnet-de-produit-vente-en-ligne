
<?php
	session_start();
	
	define('ROOT1', dirname(__DIR__));

	require_once ROOT1.'/config.php';
	require_once ROOT1.'/helpers/helpers.php';

	$cart_id = '';
	if(isset($_COOKIE[CART_COOKIE])){
		$cart_id = sanitize($_COOKIE[CART_COOKIE]);
	}

	// if(isset($_SESSION[SBUser])){
	// 	$user_id = $_SESSION['SBUser'];
	// 	$query = $db->query("SELECT * FROM users WHERE idUsers = '$user_id'");
	// 	$user_data = mysql_fetch_assoc($query);
	// 	$fn = explode(' ', $user_data['prenom']);
	// 	$user_data['first'] = $fn[0];
	// 	$user_data['last'] = $fn[1];
	// }

	if(isset($_SESSION['success_flash'])){
		echo '<div class="alert alert-success text-center"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><b>'.$_SESSION['success_flash'].'</b></div>';
		unset($_SESSION['success_flash']);
	}

	if(isset($_SESSION['error_flash'])){
		echo '<div class="alert alert-danger text-center"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><b>'.$_SESSION['error_flash'].'</b></div>';
		//echo '<div class="bg-danger"><p class="text-success text-danger">'.$_SESSION['error_flash'].'</p></div>';
		unset($_SESSION['error_flash']);
	}
//session_destroy();
