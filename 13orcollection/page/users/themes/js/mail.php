<?php 
error_reporting(E_ALL);
// Passez la valeur ci-dessous de 0 à 1 pour afficher les erreurs
ini_set("display_errors", 0);

// Saisissez ici l'adresse mail du destinataire
$destinataire = "exemple@domaine.com";

$nom = htmlspecialchars($_GET["nom"], ENT_QUOTES);
$prenom = htmlspecialchars($_GET["prenom"], ENT_QUOTES);
$cp = htmlspecialchars($_GET["cp"], ENT_QUOTES);
$email = htmlspecialchars($_GET["email"], ENT_QUOTES);
$message = htmlspecialchars($_GET["message"], ENT_QUOTES);
$commande = $_GET["commande"];
$livraison = htmlspecialchars($_GET["livraison"], ENT_QUOTES);
$prix_total = htmlspecialchars($_GET["prix_total"], ENT_QUOTES);
$sujet = 'Commande depuis le site';
$message = "Nom: ".$nom."<br />
Prénom: ".$prenom."<br />
Code postal: ".$cp."<br />
Adresse mail: ".$email."<br />
Message: ".$message."<br />
Livraison : ".$livraison."<br /><br />
La commande: <br /><br /><table>".$commande."</table><br />
Prix total: ".$prix_total."";
$headers = "From: \"Mon site\"<".$destinataire.">\n";
$headers .= "Reply-To: ".$destinataire."\n";
$headers .= "Content-Type: text/html; charset=\"utf-8\"";
if(mail($destinataire,$sujet,$message,$headers))
{
echo "L'email a bien été envoyé.";
}
else
{
echo "Une erreur c'est produite lors de l'envoi de l'email.";
}
?>