<?php 
$conbd =new PDO("mysql:host=127.0.0.1;dbname=aigle_vente_en_ligne;charset=utf-8","root","");  
 ?>
 <?php
 if(isset($_POST["query"]))  
 {  
       $output = ''; 
      $rep = $conbd->query("SELECT * FROM produit WHERE nom LIKE '".$_POST["query"]."%' OR description LIKE '".$_POST["query"]."%' ORDER BY idProduit DESC LIMIT 0,5 ");
      $num_rows = $rep->fetch();
      $rep->closeCursor();
	  
      if($num_rows = $rep->rowcount() > 0)  
      {  
   
   $rep = $conbd->query("SELECT * FROM produit WHERE nom LIKE '".$_POST["query"]."%' OR description LIKE '".$_POST["query"]."%' ORDER BY idProduit DESC LIMIT 0,5 ");
            while($don=$rep->fetch()){
  ?>
			<div style="padding-top:17px;">			
 <a style="" href="../download/<?php echo $don['idm'];?>" >	
 
       <?= $don['nom']?> - <?= $don['description']?> </br>
</a>	   
	         <div>
             <?php
             }
      }  
      else  
      {  
           $output .= '<p style="padding-top:10px; padding-bottom:px; color:#900;">Produit Not Found...</p>';  
      }  
      $output .= '</p>';  
      echo $output;  
 }  
 ?>  
