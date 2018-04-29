<?php
    require_once $_SERVER['DOCUMENT_ROOT'].'/13orcollection/core/init.php';
    $product_id = sanitize($_POST['product_id']);
    $size = sanitize($_POST['size']);
    $quantity = sanitize($_POST['quantity']);
    $couleur = sanitize($_POST['couleur']);
    
?>