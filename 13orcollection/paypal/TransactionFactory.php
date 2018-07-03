<?php


use PayPal\Api\Transaction;
/**
* 
*/
class TransactionFactory
{

	private $itemData;
	
	function __construct(array $data)
	{
		$this->itemData = $data;
	}

	static function fromPanier(Panier $panier, float $vatRate = 0): Transaction
    {
        
        $list = new \PayPal\Api\ItemList();
        
        foreach ($panier->getProducts() as $product) {
            $item = (new \PayPal\Api\Item())
                ->setName($product->nom)
                ->setPrice($product->prix)
                ->setCurrency('USD')
                ->setQuantity($product->count);
            $list->addItem($item);
        }

        $details = (new \PayPal\Api\Details())
            ->setTax(0.00)
            ->setShipping(2.0)
            ->setSubtotal(2.0);

        $amount = (new \PayPal\Api\Amount())
            ->setTotal($panier->getTotal() + $vatRate)
            ->setCurrency("USD")
            ->setDetails($details);

        return (new \PayPal\Api\Transaction())
            ->setItemList($list)
            ->setDescription('Achat sur aigle vente en ligne')
            ->setAmount($amount)
            ->setCustom('aigle-1');

    }


}