package produitModels

import (
	"Configuration"
	"log"
	"time"
	"fmt"
)

type Produit struct{
	Id           int         `json:"id"`
	Nom          string       `json:"nom"`
	Description  string       `json:"description"`
	Nbre_like    int          `json:"nbre_like"`
	Nbre_vendu   int          `json:"nbre_vendu"`
	Nbre_en_stock int         `json:"nbre_en_stock"`
	Rabais        float64     `json:"rabais"`
	Activer       int          `json:"activer"`
	Categorie_idCategorie  int  `json:"categorie_id"`
	CreateAt time.Time        `json:"date_creation"`
	UpdateAt time.Time        `json:"date_update"`
}
type produit []Produit
//fonction permettant d'enregistrer une voiture
func Newproduit(c *Produit){
if c==nil{
	log.Fatal(c)
}
c.CreateAt=time.Now();
c.UpdateAt=time.Now();

err :=Configuration.Db().QueryRow("INSERT INTO produit (nom, description,nbre_like,nbre_vendu, nbre_en_stock,rabais, Date_creation, Date_update,activer,Categorie_idCategorie) VALUES (?,?,?,?,?,?,?,?,?,?);",c.Nom,c.Description,c.Nbre_like,c.Nbre_vendu,c.Nbre_en_stock,c.Rabais,c.CreateAt,c.UpdateAt,c.Activer,c.Categorie_idCategorie).Scan(&c.Id)

if err!=nil{
	log.Fatal(err)
}
}

//fonction permettant de trouver nue voiture  par Id
func FindProduitById(id int) *Produit{

	var produit Produit 
 
	row:=Configuration.Db().QueryRow("SELECT * FROM produit WHERE idProduit=?;",id)
	err:= row.Scan(&produit.Id,&produit.Nom,&produit.Description,&produit.Nbre_like,&produit.Nbre_vendu,&produit.Nbre_en_stock,&produit.Rabais,&produit.CreateAt,&produit.UpdateAt,&produit.Activer,&produit.Categorie_idCategorie)
	
	 
	if err!=nil{
		log.Fatal(err)
	}

	return &produit
}

//fonction permettant de trouver toutes les voitures
func Allproduit() *produit {
	var produit produit 

	rows, err :=Configuration.Db().Query("SELECT idProduit, nom, description,nbre_like,nbre_vendu, nbre_en_stock,rabais, Date_creation, Date_update,activer,Categorie_idCategorie FROM produit")
	//log.Fatal("after rows")
	if err!=nil{
		log.Fatal(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var c Produit 

		err := rows.Scan(&c.Id,&c.Nom,&c.Description,&c.Nbre_like,&c.Nbre_vendu,&c.Nbre_en_stock,&c.Rabais,&c.CreateAt,&c.UpdateAt,&c.Activer,&c.Categorie_idCategorie)
        fmt.Printf("before log")
		if err !=nil{
			log.Fatal(err)
		}
		fmt.Printf("before append")
		produit=append(produit, c)
		fmt.Printf("after produit");
	}

	return &produit
}

//cette fonction permet de modifier les informations d'une voiture
func UpdateProduit(produit *Produit){
	produit.UpdateAt=time.Now()

	stmt, err := Configuration.Db().Prepare("UPDATE produit SET nom=?, description=?, nbre_en_stock=?,rabais=?, Date_update=?,activer=? WHERE id=?;")
	
	if err !=nil{
	log.Fatal(err)
	}

	_, err = stmt.Exec(&produit.Nom,&produit.Description,&produit.Nbre_en_stock,&produit.Rabais,&produit.UpdateAt,&produit.Activer,produit.Id)

	if err!=nil{
		log.Fatal(err)
	}
}


//cette fonction permet la suppression d'un produit
func DeleteProduitById(id int) error{
	stmt, err := Configuration.Db().Prepare("DELETE FROM produit WHERE id=?;")
	
	if err!=nil{
		log.Fatal(err)
	}
	_, err = stmt.Exec(id)

	return err
	
}

