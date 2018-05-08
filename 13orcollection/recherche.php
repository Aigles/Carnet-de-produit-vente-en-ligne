<!DOCTYPE html>
<html>
<head>
	<title>recherche</title>
	 <script src="themes/js/jquery-latest.min.js"></script>
</head>
<style type="text/css">

//Page css
#resultindex{  
	            font-weight:bold;
	            color:#900;
	            font-family:arial;
	            text-decoration:none;
	            background-color:#FFF;
	            margin-top:-165px;
                width:100%;
                position: absolute;
                z-index: 2;
				color:#900;
           }
</style>
<body>

	<div class="basmenu_background">
  <div class="col-sm-8 basmenu container">
     <center><input type="text" name="search_text" id="search_text" placeholder="Recherche..."/></center>
  </div>   
</div> 

<center> <div id="resultindex"></div></center>

</body>
</html>


<script>
$(document).ready(function(){

 load_data();

 function load_data(query)
 {
  $.ajax({
   url:"search.php",
   method:"POST",
   data:{query:query},
   success:function(data)
   {
    $('#resultindex').html(data);
   }
  });
 }
 $('#search_text').keyup(function(){
  var search = $(this).val();
  if(search != '')
  {
   load_data(search);
  }
  else
  {
   load_data();
  }
 });
});
</script>


