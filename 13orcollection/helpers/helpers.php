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




?>