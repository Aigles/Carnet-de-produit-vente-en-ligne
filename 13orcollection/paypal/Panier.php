<?php

	
	/**
	* 
	*/
	class Panier
	{
		
		private $corbeil;

		private $total;



		public function __construct(array $donner)
		{
			
			$this->corbeil = $donner;

		}

		public function getProducts()
		{
			return $this->corbeil;
		}

		public function getTotal()
		{
			$this->total = 0;

			foreach ($this->corbeil as $key => $value)
				$this->total += ($value->count*$value->prix); 

			return (float)$this->total;
		}


	}

	
