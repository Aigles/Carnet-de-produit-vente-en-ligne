function previewFile(row){
       var preview = document.querySelector('#divimg-'+row+' img'); //selects the query named img
       var file    = document.querySelector('#diva-'+row+' input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

    if (file.size<=30720) {
       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
         reader.readAsDataURL(file); //reads the data as a URL

       } else {
           preview.src = "";
       }
     }
     else{
       alert("la taille de l\'image doit etre inferieure ou egale a 30ko.");
     }
     return preview.src;
  }

function UpdatepreviewFile(){
       var preview = document.querySelector('#divimg-'+row+'img'); //selects the query named img
    
     return preview.src;
  }