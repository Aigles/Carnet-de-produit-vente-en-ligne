package categorieModels

import (
	"Configuration"
	"log"
	"time"
	"fmt"
)

type Message struct{
	Id      int64   `json:"id"`
	Code    int     `json:"code"`
	Status  string  `json:"status"`
}


type Category struct{
	Id           int          `json:"id"`
    Type        string        `json:"type"`
	CreateAt time.Time        `json:"date_creation"`
	UpdateAt time.Time        `json:"date_update"`
}
type categorie []Category
//fonction permettant d'enregistrer une voiture
func Newcategory(c *Category) Message{

	var message Message
if c==nil{
	log.Fatal(c)
}
c.CreateAt=time.Now();
c.UpdateAt=time.Now();

_,err :=Configuration.Db().Exec("INSERT INTO categorie (type, date_creation, date_update) VALUES (?,?,?);",c.Type,c.CreateAt,c.UpdateAt)

if err==nil{
	message.Code=200
	message.Status="l'enregistrement a ete un succes  !!!"

}else{
	fmt.Println(err)
	message.Code=0
	message.Status="l'enregistrement a ete un echec !!!"
}
return message
}

//fonction permettant de trouver nue voiture  par Id
func FindcategoryById(id int) *Category{

	var category Category 
 
	row:=Configuration.Db().QueryRow("SELECT * FROM categorie WHERE idCategorie =?;",id)
	err:= row.Scan(&category.Id,&category.Type,&category.CreateAt, &category.UpdateAt)
	 
	if err!=nil{
		log.Fatal(err)
	}

	return &category
}

//fonction permettant de trouver toutes les voitures
func Allcategorie() *categorie {
	var categorie categorie 

	rows, err :=Configuration.Db().Query("SELECT idCategorie, type, date_creation, date_update FROM categorie")
	//log.Fatal("after rows")
	if err!=nil{
		log.Fatal(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var c Category 

		err := rows.Scan(&c.Id, &c.Type, &c.CreateAt, &c.UpdateAt)
        fmt.Printf("before log")
		if err !=nil{
			log.Fatal(err)
		}
		fmt.Printf("before append")
		categorie=append(categorie, c)
		fmt.Printf("after categorie");
	}

	return &categorie
}

//cette fonction permet de modifier les informations d'une voiture
func Updatecategory(category *Category)Message{

	var message Message
	category.UpdateAt=time.Now()

	stmt, err := Configuration.Db().Prepare("UPDATE categorie SET type=?, date_update=? WHERE idCategorie=?;")
	
	if err !=nil{
	log.Fatal(err)
	}

	_, err = stmt.Exec(category.Type,category.UpdateAt,category.Id)

	if err==nil{
		fmt.Println("le numero categorie qui a changer est:")
		fmt.Println(category.Id)
		message.Code=200
		message.Status="la mise a jour a ete un succes  !!!"
	
	}else{
		fmt.Println(err)
		message.Code=0
		message.Status="la mise a jour a ete un echec !!!"
	}
	return message
}


//cette fonction permet la suppression d'un produit
func DeleteCategoryById(id int) Message{

	var message Message

	stmt, err := Configuration.Db().Prepare("DELETE FROM categorie WHERE idCategorie=?;")
	
	if err!=nil{
		log.Fatal(err)
	}
	_, err = stmt.Exec(id)

	if err==nil{
		message.Code=200
		message.Status="la Supression a ete un succes  !!!"
	
	}else{
		fmt.Println(err)
		message.Code=0
		message.Status="la Supression a ete un echec !!!"
	}
	return message
	
}

