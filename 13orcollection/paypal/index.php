<?php 
	
	session_start();

	require 'vendor/autoload.php';

	require 'TransactionFactory.php';

	require 'Panier.php';
	
	$ids = require 'paypal.php';


	if(!empty($_POST)){
		$_SESSION['panier'] = $_POST['data'];
	}
	

	$data = json_decode($_SESSION['panier'][0]);

	$panier = new Panier($data);

	$apiContext = new \PayPal\Rest\ApiContext(
	    new \PayPal\Auth\OAuthTokenCredential(
	        $ids['id'],
	        $ids['secret']
	    )
	);

	$payment = new \PayPal\Api\Payment();

	$payment->addTransaction(TransactionFactory::fromPanier($panier));

	$payment->setIntent('sale');

	$redirectUrls = (new \PayPal\Api\RedirectUrls())
	    ->setReturnUrl('http://207.246.123.38/~aigle/13orcollection/index.php?p=success')
	    ->setCancelUrl('http://207.246.123.38/~aigle/13orcollection/index.php?p=echec');

	$payment->setRedirectUrls($redirectUrls);

	$payment->setPayer((new \PayPal\Api\Payer())->setPaymentMethod('paypal'));

	try {
	    $payment->create($apiContext);
	    echo $payment->getApprovalLink();
	    //header('Location: ' . $payment->getApprovalLink());
	} catch (\PayPal\Exception\PayPalConnectionException $e) {
	    var_dump(json_decode($e->getData()));
	}


