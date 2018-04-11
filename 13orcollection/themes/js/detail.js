  
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var id = GET_PARAM('pid');


    //List personnel all records
    if(page == '' || page == 'product_details.php'){

    

    $.ajax({ 
            url: Fullurl+"produit/"+id,
            type: 'GET', 
            dataType: 'json', 
            Accept : "application/json;charset=UTF-8"
            })

    
    .done(function(data) { 
        var tableau_produit="";
    

            tableau_produit +='<h3>'+data.nom+'</h3><small>- (14MP, 18x Optical Zoom) 3-inch LCD</small><hr class="soft"/><form class="form-horizontal qtyFrm"><div class="control-group"><label class="control-label"><span>$222.00</span></label>';
            tableau_produit +='<div class="controls"><input type="number" class="span1" placeholder="Qty."/><button type="submit" class="btn btn-large btn-warning pull-right"> Ajouter <i class=" icon-shopping-cart"></i></button>';
            tableau_produit +='</div> </div></form><hr class="soft"/><h4>100 items in stock</h4><form class="form-horizontal qtyFrm pull-right"><div class="control-group"><label class="control-label"><span>Color</span></label><div class="controls">';
            tableau_produit +='<select class="span2"><option>Black</option><option>Red</option><option>Blue</option><option>Brown</option></select></div></div></form><hr class="soft clr"/><p><h2>Description de '+data.nom+'</h2><br/>'+data.description;
            tableau_produit +='</p><a class="btn btn-small pull-right" href="#detail">More Details</a><br class="clr"/><a href="#" name="detail"></a><hr class="soft"/>';
        
     // affectation des produits dans l'id
     document.getElementById('detail_produit').innerHTML=tableau_produit;
    
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
        
        function detailsmodal(id){
        var data = {"id" : id};
        jQuery.ajax({
            url: Fullurl+"produit/"+id,
            method : "post",
            data : data,
            success: function(data){
                jQuery('body').append(data);
                jQuery('#details-modal').modal('toggle');
            },
            error: function(){
                alert("something went wrong");
            }
        })
    }