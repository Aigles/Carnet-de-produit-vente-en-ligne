package reference_livraisonModels

import (
	"Configuration"
	"time"
	"fmt"
)



type Reference_livraison struct{
	Id              int               `json:"id"`
	Nom             string            `json:"nom"`
	Date_livraison  time.Time         `json:"date_livraison"`
	Adresse          int              `json:"adresse"`
	Email            string           `json:"email"`
	Ville          string             `json:"ville"`
	Pays           string             `json:"pays"`
	CodePostal     string             `json:"codepostal"`
	Telephone      string             `json:"telephone"`
}
type reference_livraison []Reference_livraison

type Message struct{
	Id        int64    `json:"id"`
	Code      int      `json:"code"`
	Status  string      `json:"status"`
}

//fonction permettant d'enregistrer une voiture
func NewReference_livraison(c *Reference_livraison) Message{

	var message Message
if c==nil{
	fmt.Println(c)
}
// if c.Date_livraison=="" {
// c.Date_livraison=time.Now().UTC();
// }

res, err :=Configuration.Db().Exec("INSERT INTO reference_livraison (nom,date_livraison,adresse,email,ville,pays,codePostal,telephone) VALUES (?,?,?,?,?,?,?,?);",c.Nom,c.Date_livraison,c.Adresse,c.Email,c.Ville,c.Pays,c.CodePostal,c.Telephone)//.Scan(&c.Id)

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
func FindReference_livraisonById(id int) *Reference_livraison{

	var reference_livraison Reference_livraison 
 
	row:=Configuration.Db().QueryRow("SELECT * FROM reference_livraison WHERE idReference_livraison=?;",id)
	err:= row.Scan(&reference_livraison.Id,&reference_livraison.Nom,&reference_livraison.Date_livraison,&reference_livraison.Adresse,&reference_livraison.Email,&reference_livraison.Ville,&reference_livraison.Pays,&reference_livraison.CodePostal,&reference_livraison.Telephone)
	 
	if err!=nil{
		fmt.Println(err)
	}

	return &reference_livraison
}




//fonction permettant de trouver toutes les voitures
func AllReference_livraison() *reference_livraison {
	var reference_livraison reference_livraison 

	rows, err :=Configuration.Db().Query("SELECT reference_livraison.idReference_livraison, nom, date_livraison,adresse,email,ville,pays,codePostal,telephone FROM reference_livraison")
	//fmt.Println("after rows")
	if err!=nil{
		fmt.Println(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var c Reference_livraison 
	
		err := rows.Scan(&c.Id,&c.Nom,&c.Date_livraison,&c.Adresse,&c.Email,&c.Ville,&c.Pays,&c.CodePostal,&c.Telephone)
		
		fmt.Printf("before log")
		if err !=nil{
			fmt.Println(err)
		}
		fmt.Printf("before append")
		reference_livraison=append(reference_livraison, c)
		fmt.Printf("after Reference_livraison")
	}

	return &reference_livraison
}

//cette fonction permet de modifier les informations d'une voiture
func UpdateReference_livraison(reference_livraison *Reference_livraison)Message{

	var message Message
	

	stmt, err := Configuration.Db().Prepare("UPDATE reference_livraison SET date_livraison=?, date_update=? WHERE idReference_livraison=?;")
	
	if err !=nil{
	fmt.Println(err)
	}

	_, err = stmt.Exec(&reference_livraison.Id,&reference_livraison.Date_livraison,&reference_livraison.Adresse,&reference_livraison.Email,&reference_livraison.Ville,&reference_livraison.Pays,&reference_livraison.CodePostal,&reference_livraison.Telephone)

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


//cette fonction permet la suppression d'un Reference_livraison
func DeleteReference_livraisonById(id int) Message{

	var message Message

	stmt, err := Configuration.Db().Prepare("DELETE FROM reference_livraison WHERE idReference_livraison=?;")
	
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

