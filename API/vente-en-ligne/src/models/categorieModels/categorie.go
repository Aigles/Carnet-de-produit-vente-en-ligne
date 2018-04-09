package categorieModels

import (
	"Configuration"
	"log"
	"time"
	"fmt"
)

type Category struct{
	Id           int          `json:"id"`
    Type        string        `json:"type"`
	CreateAt time.Time        `json:"date_creation"`
	UpdateAt time.Time        `json:"date_update"`
}
type categorie []Category
//fonction permettant d'enregistrer une voiture
func Newcategory(c *Category){
if c==nil{
	log.Fatal(c)
}
c.CreateAt=time.Now();
c.UpdateAt=time.Now();

err :=Configuration.Db().QueryRow("INSERT INTO categorie (type, date_creation, date_update) VALUES (?,?,?);",c.Type,c.CreateAt,c.UpdateAt).Scan(&c.Id)

if err!=nil{
	log.Fatal(err)
}
}

//fonction permettant de trouver nue voiture  par Id
func FindcategoryById(id int) *Category{

	var category Category 
 
	row:=Configuration.Db().QueryRow("SELECT * FROM categorie WHERE id =?;",id)
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
func Updatecategory(category *Category){
	category.UpdateAt=time.Now()

	stmt, err := Configuration.Db().Prepare("UPDATE categorie SET type=?, date_update=? WHERE id=?;")
	
	if err !=nil{
	log.Fatal(err)
	}

	_, err = stmt.Exec(category.Type,category.UpdateAt,category.Id)

	if err!=nil{
		log.Fatal(err)
	}
}


//cette fonction permet la suppression d'un produit
func DeletecategoryById(id int) error{
	stmt, err := Configuration.Db().Prepare("DELETE FROM categorie WHERE id=?;")
	
	if err!=nil{
		log.Fatal(err)
	}
	_, err = stmt.Exec(id)

	return err
	
}

