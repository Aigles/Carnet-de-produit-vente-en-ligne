function supprimerUser(id)
{

    if(confirm("Voulez-vous vraiment supprimer cet utilisateur du systeme?"))
        $.ajax({
            url: fullUrl + 'supprimerUtilisateur/'+ parseInt(id, 10),
            type: 'POST',
            crossDomain: true,
            Accept: 'application/json;charset=UTF-8',
            success: function (rs) {      
                $('#result-title').html('Reultat de l\'operation');
                $('#result-info').html(rs.status);
                $.when($('#myModal').modal('show').delay(1000)).done(function(){
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
