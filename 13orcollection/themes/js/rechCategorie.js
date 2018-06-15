  
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var id = GET_PARAM('pid');

    //List personnel all records
    if(page == '' || page == 'index.php'|| page == 'cart.php' || page == 'product_details.php'){

    

    $.ajax({ 
            url: Fullurl+"categorie",
            type: 'GET', 
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })
    
    .done(function(data){

            
           // var tableau_caracteristic="";
        $.each( data, function( key, categorie ){
            tableau_caracteristic = '<option><a href="index.php?prodid='+categorie.id+'">'+categorie.type+'</a></option>';
            // affectation des produits dans l'id
         
            jQuery('.srchTxt#search').append(tableau_caracteristic);
         
        
        });
        //document.getElementById('sideMnu').innerHTML=tableau_caracteristic;
    });




}

function GET_PARAM(param) { var vars = {}; window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp 
    function( m, key, value ) { // callback 
        vars[key] = value !== undefined ? value : '';
     } );
         if ( param ) { return vars[param] ? vars[param] : null;
         }
         return vars; 
        } 
  
if(page == '' || page == 'index.php'|| page == 'cart.php' || page == 'product_details.php'|| page == 'profil.php'){
  var IdUser=sessionStorage.getItem("id_user_vente_en_ligne");
  if (IdUser) {
        var url=Fullurl+"utilisateur/"+IdUser;
        $.ajax({ 
                url: url,
                type: 'GET', 
                dataType: 'json', 
                Accept : "application/json;charset=UTF-8"
                })
                .done(function(data) { 
                var clientname="";
                clientname='<a style="color: #ccc; cursor: default;"><span style="color: #faa732;">| </span>   Salut <b>'+data.nom+'</b></a>';
                jQuery('li.clientname').append(clientname);
                var info ="";
                info +='<h2> 13 or collection  </h2>';
                info +='<h4>Informations de votre compte :</h4><br/>';
                info +='<b>Nom  :</b> '+data.nom+' <br/><br/><b>Prenom  :</b> '+data.prenom+' <br/><br/><b>Email  :</b> '+data.email+' <br/><br/>';
                jQuery('.col-md-6.api').append(info);
                var avatar = "";
                avatar += '<h4><img src="'+data.avatar+'" id="profileImage" class="img-rounded1 img-responsive" /></h4><br/>';
                jQuery('.col-md-6.avatarr').append(avatar);
                });
            }
        }
        