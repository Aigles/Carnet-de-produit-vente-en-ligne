package produitModels

import (
	"Configuration"
	"math/rand"
	"time"
	"fmt"
)


type Produit struct{
	Id           int           `json:"id"`
	Nom          string        `json:"nom"`
	Description  string        `json:"description"`
	Nbre_like    int           `json:"nbre_like"`
	Code_prod   int            `json:"nbre_vendu"`
	Nbre_en_stock int          `json:"nbre_en_stock"`
	Rabais        float64      `json:"rabais"`
	Activer       int          `json:"activer"`
	Categorie_idCategorie  int  `json:"categorie_id"`
	CreateAt time.Time          `json:"date_creation"`
	UpdateAt time.Time           `json:"date_update"`
	Caracteristic caracteristique `json:"caracteristic"`

}
type produit []Produit

type Message struct{
	Id           int64         `json:"id"`
	Code        int      `json:"code"`
	Status  string       `json:"status"`
}

//fonction permettant d'enregistrer une voiture
func Newproduit(c *Produit) Message{

	var message Message
if c==nil{
	fmt.Println(c)
}
c.CreateAt=time.Now();

c.UpdateAt=time.Now();

c.Code_prod=rand.Intn(100000)+c.Nbre_en_stock;

res, err :=Configuration.Db().Exec("INSERT INTO produit (nom, description,nbre_like,code_prod, nbre_en_stock,rabais, Date_creation, Date_update,activer,Categorie_idCategorie) VALUES (?,?,?,?,?,?,?,?,?,?);",c.Nom,c.Description,c.Nbre_like,c.Code_prod,c.Nbre_en_stock,c.Rabais,c.CreateAt,c.UpdateAt,c.Activer,c.Categorie_idCategorie)//.Scan(&c.Id)

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
func FindProduitById(id int) *Produit{

	var produit Produit 
 
	row:=Configuration.Db().QueryRow("SELECT * FROM produit WHERE idProduit=?;",id)
	err:= row.Scan(&produit.Id,&produit.Nom,&produit.Description,&produit.Nbre_like,&produit.Code_prod,&produit.Nbre_en_stock,&produit.Rabais,&produit.CreateAt,&produit.UpdateAt,&produit.Activer,&produit.Categorie_idCategorie)
	   produit.Caracteristic=FindCaracteristiquesByIdProduit(produit.Id);
	 
	if err!=nil{
		fmt.Println(err)
	}

	return &produit
}



    
//fonction permettant de trouver toutes les voitures
func Allproduit() *produit {
	var produit produit 

	rows, err :=Configuration.Db().Query("SELECT produit.idProduit, nom, description,nbre_like,code_prod, nbre_en_stock,rabais, Date_creation, Date_update,activer,Categorie_idCategorie FROM produit")
	//fmt.Println("after rows")
	if err!=nil{
		fmt.Println(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var c Produit 
	
		err := rows.Scan(&c.Id,&c.Nom,&c.Description,&c.Nbre_like,&c.Code_prod,&c.Nbre_en_stock,&c.Rabais,&c.CreateAt,&c.UpdateAt,&c.Activer,&c.Categorie_idCategorie )
		c.Caracteristic=FindCaracteristiquesByIdProduit(c.Id);
		fmt.Printf("before log")
		if err !=nil{
			fmt.Println(err)
		}
		fmt.Printf("before append")
		produit=append(produit, c)
		fmt.Printf("after produit")
	}

	return &produit
}


func FindProduitByIdcategorie(id int) *produit{
	var produit produit 

	rows, err :=Configuration.Db().Query("SELECT produit.idProduit, nom, description,nbre_like,code_prod, nbre_en_stock,rabais, Date_creation, Date_update,activer,Categorie_idCategorie FROM produit where Categorie_idCategorie=?",id)
	//fmt.Println("after rows")
	if err!=nil{
		fmt.Println(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var c Produit 
	
		err := rows.Scan(&c.Id,&c.Nom,&c.Description,&c.Nbre_like,&c.Code_prod,&c.Nbre_en_stock,&c.Rabais,&c.CreateAt,&c.UpdateAt,&c.Activer,&c.Categorie_idCategorie )
		c.Caracteristic=FindCaracteristiquesByIdProduit(c.Id);
		fmt.Printf("before log")
		if err !=nil{
			fmt.Println(err)
		}
		fmt.Printf("before append")
		produit=append(produit, c)
		fmt.Printf("after produit")
	}

	return &produit
}

//cette fonction permet de modifier les informations d'une voiture
func UpdateProduit(produit *Produit)Message{
	fmt.Println(produit)
	var message Message
	produit.UpdateAt=time.Now()

	stmt, err := Configuration.Db().Prepare("UPDATE produit SET nom=?, description=?, nbre_en_stock=?,rabais=?, Date_update=?,activer=? WHERE idProduit=?;")
	
	if err !=nil{
	fmt.Println(err)
	}

	_, err = stmt.Exec(&produit.Nom,&produit.Description,&produit.Nbre_en_stock,&produit.Rabais,&produit.UpdateAt,&produit.Activer,produit.Id)

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


//cette fonction permet la suppression d'un produit
func DeleteProduitById(id int) Message{

	var message Message

	stmt, err := Configuration.Db().Prepare("DELETE FROM produit WHERE idProduit=?       ;")
	
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

//fonction permettant de trouver toutes les voitures
func AllproduitDate(date_debut string,date_fin string) *produit {
	var produit produit 

	rows, err :=Configuration.Db().Query("SELECT produit.idProduit, nom, description,nbre_like,code_prod, nbre_en_stock,rabais, Date_creation, Date_update,activer,Categorie_idCategorie FROM produit where Date_creation between ? and ?",date_debut,date_fin)
	//fmt.Println("after rows")
	if err!=nil{
		fmt.Println(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var c Produit 
	
		err := rows.Scan(&c.Id,&c.Nom,&c.Description,&c.Nbre_like,&c.Code_prod,&c.Nbre_en_stock,&c.Rabais,&c.CreateAt,&c.UpdateAt,&c.Activer,&c.Categorie_idCategorie )
		c.Caracteristic=FindCaracteristiquesByIdProduit(c.Id);
		fmt.Printf("before log")
		if err !=nil{
			fmt.Println(err)
		}
		fmt.Printf("before append")
		produit=append(produit, c)
		fmt.Printf("after produit")
	}

	return &produit
}