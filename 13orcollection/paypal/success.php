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
		->setTransactions($payment->getTransactions());

	try {
	    
	    //$payment->execute($execution, $apiContext);
	    
	    

	} catch (\PayPal\Exception\PayPalConnectionException $e) {
	    var_dump(json_decode($e->getData()));
	}
?>
<div class="container">
	<div class="row" style="height: 500px;">
		<div class="col-lg-12">
			<h4 class="col-lg-push-4 col-lg-4">Felicitation votre commande est valide</h4>
		</div>
	</div>
</div>