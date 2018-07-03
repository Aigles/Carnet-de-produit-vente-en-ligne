<?php

	session_start();

	require 'vendor/autoload.php';

	require 'TransactionFactory.php';

	require 'Panier.php';
	
	$ids = require 'paypal.php';

	$apiContext = new \PayPal\Rest\ApiContext(
	    new \PayPal\Auth\OAuthTokenCredential(
	        $ids['id'],
	        $ids['secret']
	    )
	);

	$payment = \PayPal\Api\Payment::get($_GET['paymentId'], $apiContext);

	$execution = (new \PayPal\Api\PaymentExecution())
		->setPayerId($_GET['PayerID'])
		->setTransaction($payment->getTransaction());

	try {
	    
	    $payment->execute($execution, $apiContext);
	    
	    var_dump($payment);
	    
	} catch (\PayPal\Exception\PayPalConnectionException $e) {
	    var_dump(json_decode($e->getData()));
	}
