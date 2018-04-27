package CommandeModels

import (
	"Configuration"
	"time"
	"fmt"
)



type Commande struct{
	IdCommande     int         `json:"idCommande"`
	quantite    int           `json:"quantite"`
	Users_idUsers  int         `json:"users_idUsers"`
	Paiement_idPaiement   int  `json:"paiement_idPaiement "`
	Paiement_Reference_livraison_idReference_livraison  string  `json:"Paiement_Reference_livraison_id "`
	CreateAt time.Time        `json:"date_creation"`
	UpdateAt time.Time        `json:"date_update"`
}
type Commande []Commande

type Message struct{
	Id        int64    `json:"id"`
	Code      int      `json:"code"`
	Status  string      `json:"status"`
}

//fonction permettant d'enregistrer une voiture
func NewCommande(c *Commande) Message{

	var message Message
if c==nil{
	fmt.Println(c)
}
c.CreateAt=time.Now().UTC();
c.UpdateAt=time.Now().UTC();

res, err :=Configuration.Db().Exec("INSERT INTO commande (date_commande,quantite,date_update,Users_idUsers,Paiement_idPaiement,Paiement_Reference_livraison_idReference_livraison) VALUES (?,?,?,?,?,?);",c.CreateAt,c.Quantite,c.UpdateAt,c.Users_idUsers,c.Paiement_idPaiement,c.Paiement_Reference_livraison_idReference_livraison)//.Scan(&c.Id)

if err==nil{
	id,_:=res.LastInsertId()
	message.Id=id
	message.Code=200
	message.Status="insertion reussie"

}else{
	fmt.Println(err)
	message.Id=0
	message.Code=0
	message.Status="insertion echouee"
}

return message
}

//fonction permettant de trouver nue voiture  par Id
func FindCommandeById(id int) *Commande{

	var commande Commande 
 
	row:=Configuration.Db().QueryRow("SELECT * FROM commande WHERE idCommande=?;",id)
	err:= row.Scan(&commande.Id,&commande.CreateAt,&commande.Quantite,&commande.UpdateAt,&commande.Users_idUsers,&commande.Paiement_idPaiement,&commande.Paiement_Reference_livraison_idReference_livraison))
	   Commande.Caracteristic=FindCaracteristiquesByIdCommande(Commande.Id);
	 
	if err!=nil{
		fmt.Println(err)
	}

	return &commande
}




//fonction permettant de trouver toutes les voitures
func AllCommande() *Commande {
	var commande Commande 

	rows, err :=Configuration.Db().Query("SELECT commande.idCommande, date_commande,quantite,date_update,Users_idUsers, Paiement_idPaiement,Paiement_Reference_livraison_idReference_livraison FROM commande")
	//fmt.Println("after rows")
	if err!=nil{
		fmt.Println(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var c Commande 
	
		err := rows.Scan(&c.Id,&c.CreateAt,&c.Quantite,&c.UpdateAt,&c.Users_idUsers,&c.Paiement_idPaiement,&c.Paiement_Reference_livraison_idReference_livraison)
		fmt.Printf("before log")
		if err !=nil{
			fmt.Println(err)
		}
		fmt.Printf("before append")
		Commande=append(Commande, c)
		fmt.Printf("after Commande")
	}

	return &commande
}

//cette fonction permet de modifier les informations d'une voiture
func UpdateCommande(Commande *Commande)Message{

	var message Message
	Commande.UpdateAt=time.Now().UTC()

	stmt, err := Configuration.Db().Prepare("UPDATE commande SET quantite=?, date_update=? WHERE idCommande=?;")
	
	if err !=nil{
	fmt.Println(err)
	}

	_, err = stmt.Exec(&c.CreateAt,&c.Quantite,&c.UpdateAt,&c.Id)

	if err==nil{
		message.Code=200
		message.Status="Modification reussie"
	
	}else{
		fmt.Println(err)
		message.Code=0
		message.Status="Modification echouee"
	}
	return message
}


//cette fonction permet la suppression d'un Commande
func DeleteCommandeById(id int) Message{

	var message Message

	stmt, err := Configuration.Db().Prepare("DELETE FROM commande WHERE idCommande=?;")
	
	if err!=nil{
		fmt.Println(err)
	}
	_, err = stmt.Exec(id)
	 
	if err==nil{
		message.Code=200
		message.Status="Suppression reussie"
	
	}else{
		fmt.Println(err)
		message.Code=0
		message.Status="Suppression echouee"
	}
	return message
	
}

