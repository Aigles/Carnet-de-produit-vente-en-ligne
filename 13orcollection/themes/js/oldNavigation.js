  
 if (localStorage.getItem("CurrentPage")!='connection' && localStorage.getItem("CurrentPage")!='inscription') {
    localStorage.setItem("OldPage",localStorage.getItem("CurrentPage"));
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
        
        var path = GET_PARAM('p');
        localStorage.setItem("CurrentPage",path);
        
    