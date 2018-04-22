 
var path = window.location.pathname;
var page = path.split("/").pop();


//Delete personnel record 
// function deleteRecord(personnelId){
    
// }

//List personnel all records
if(page == '' || page == 'index.html'){
	var id = GET_PARAM('pid');

	 $.ajax({ 
            // url: Fullurl+"produit",
            url: fullUrl+"categorie/"+id,
            type: 'GET', 
            dataType: 'json',
            crossDomain: true, 
            Accept : "application/json;charset=UTF-8"
            })

    .done(function(data) { 
        
    
        $('#nom-categorie').val(data.type);
   
    }
});



function GET_PARAM(param) { var vars = {}; window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp 
    function( m, key, value ) { // callback 
        vars[key] = value !== undefined ? value : '';
     } );
         if ( param ) { return vars[param] ? vars[param] : null;
         }
         return vars; 
        } 

     function modifierCategorie(){

  var categorie ={};
    
        categorie.type=$('#nom-categorie').val();
        

        
        data=JSON.stringify(categorie);

        console.log( data);
       var url=fullUrl+"modifiercategorie";
         updateData(data, url);
         listeCat();
  }

    
   function updateData(data, url){
    
    $.ajax({ url: url,
             type: 'PUT', 
             dataType: 'json', 
             crossDomain: true,
             data: data,
                     })
         .done(function(data) { 

          alert(data.status);
          $("#content").load('categorie/liste.html');
         })
         .fail(function(error){  
          // alert("requete échouée !")
             if (error.status==404) {
              
                 //window.location = "./login.html";                    
             }

         });


}
 