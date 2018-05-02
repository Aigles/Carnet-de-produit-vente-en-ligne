function supprimerCategorie(id)
{

    if(confirm("Voulez-vous vraiment supprimer cette categorie?"))
        $.ajax({
            url: fullUrl + 'deletecategorie/'+ parseInt(id, 10),
            type: 'POST',
            crossDomain: true,
            Accept: 'application/json;charset=UTF-8',
            success: function (rs) {      
                $('#result-title').html('Reultat de l\'operation');
                $('#result-info').html(rs.status);
                $.when($('#myModal').modal('show').delay(2000)).done(function(){
                    location.reload();
                }); 
                console.log("Status: " + JSON.stringify(rs));
            },
            error: function (xhr,status,error) {
                $('#result-title').html('Reultat de l\'operation');
                $('#result-info').html('Echec de l\'operation encour');
                $('#myModal').modal('show');

            }
        
        });

}
