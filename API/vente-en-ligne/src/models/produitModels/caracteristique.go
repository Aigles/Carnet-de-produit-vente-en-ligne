package produitModels

import (
	"Configuration"
	"fmt"
)

type Caracteristiques struct{
	IdCaracteristiques   int `json:"id"`
	Couleur      string      `json:"couleur"`
	Size         float64     `json:"size"`
	Prix         float64     `json:"prix"`
	Image        string     `json:"image"`
	Image_1        string     `json:"image_1"`
	Quantite       int        `json:"quantite"`
	Produit_idProduit     int     `json:"produit_idProduit"`
	// CreateAt time.Time        `json:"date_creation"`
	// UpdateAt time.Time        `json:"date_update"`
}

type caracteristique []Caracteristiques

type MessageCaract struct{
	Code        int      `json:"Code"`
	Status  string       `json:"status"`
}


// type Produit struct{
// 	Id           int         `json:"id"`
// 	Nom          string       `json:"nom"`
// 	Description  string       `json:"description"`
// 	Nbre_like    int          `json:"nbre_like"`
// 	Nbre_vendu   int          `json:"nbre_vendu"`
// 	Nbre_en_stock int         `json:"nbre_en_stock"`
// 	Rabais        float64     `json:"rabais"`
// 	Activer       int          `json:"activer"`
// 	Categorie_idCategorie  int  `json:"categorie_id"`
// 	CreateAt time.Time        `json:"date_creation"`
// 	UpdateAt time.Time        `json:"date_update"`
// 	Caracteristic caracteristique `json:"caracteristic"`

// }
// type produit []Produit



//fonction permettant d'enregistrer une voiture

func NewCaracteristiques(c *Caracteristiques) MessageCaract {

	var message MessageCaract
if c==nil{
	fmt.Println(c)
}
// c.CreateAt=time.Now();
// c.UpdateAt=time.Now();

_, err :=Configuration.Db().Exec("INSERT INTO caracteristiques ( couleur, size, prix, image, image_1, quantite, Produit_idProduit) VALUES (?,?,?,?,?,?,?);", c.Couleur, c.Size, c.Prix, c.Image,c.Image_1, c.Quantite, c.Produit_idProduit)

if err==nil{
	message.Code=200
	message.Status="insertion reussie"

}else{
	fmt.Println(err)
	message.Code=0
	message.Status="insertion echouee"
}
return message
}

//fonction permettant de trouver nue voiture  par Id
func FindCaracteristiquesById(id int) *Caracteristiques{

	var caracteristiques Caracteristiques 
 
	row:=Configuration.Db().QueryRow("SELECT * FROM caracteristiques WHERE idCaracteristiques=?;",id)
	err:= row.Scan(&caracteristiques.IdCaracteristiques, &caracteristiques.Couleur, &caracteristiques.Size, &caracteristiques.Prix, &caracteristiques.Image,&caracteristiques.Image_1 , &caracteristiques.Quantite,&caracteristiques.Produit_idProduit)
	 
	if err!=nil{
		fmt.Println(err)
	}

	return &caracteristiques
}


//fonction permettant de trouver nue voiture  par Id
func FindCaracteristiquesByIdProduit(id int) caracteristique{

	var caracteristique caracteristique
 
	rows, err :=Configuration.Db().Query("SELECT idCaracteristiques,couleur,size,prix,image,image_1,quantite FROM caracteristiques WHERE Produit_idProduit=?;",id)
     	//close rows after all readed
	defer rows.Close()

	for rows.Next(){
		
	var c Caracteristiques 
	err= rows.Scan(&c.IdCaracteristiques,&c.Couleur,&c.Size,&c.Prix,&c.Image,&c.Image_1,&c.Quantite)
	
	 
	if err !=nil{
		fmt.Println(err)
	}
	fmt.Printf("before append")
	caracteristique=append(caracteristique, c)
	fmt.Printf("after produit")
	
}
	return caracteristique
}

//fonction permettant de trouver toutes les voitures
func Allcaracteristique() *caracteristique {
	var caracteristique caracteristique 

	rows, err :=Configuration.Db().Query("SELECT idCaracteristiques,couleur,size,prix,image,image_1,quantite FROM caracteristiques")
	//fmt.Println("after rows")
	if err!=nil{
		fmt.Println(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var c Caracteristiques 
	
		err := rows.Scan(&c.IdCaracteristiques,&c.Couleur,&c.Size,&c.Prix,&c.Image,&c.Image_1,&c.Quantite)
		
		fmt.Printf("before log")
		if err !=nil{
			fmt.Println(err)
		}
		fmt.Printf("before append")
		caracteristique=append(caracteristique, c)
		fmt.Printf("after caracteristique")
	}

	return &caracteristique
}

//cette fonction permet de modifier les informations d'une voiture
func Updatecaracteristique(caracteristique *Caracteristiques){
	// produit.UpdateAt=time.Now()

	stmt, err := Configuration.Db().Prepare("UPDATE caracteristiques SET couleur=?, size=?, prix=?,image=?,image_1=?,quantite=? WHERE Produit_idProduit=?;")
	
	if err !=nil{
	fmt.Println(err)
	}

	_, err = stmt.Exec(&caracteristique.IdCaracteristiques,&caracteristique.Couleur,&caracteristique.Size,&caracteristique.Prix,&caracteristique.Image,&caracteristique.Image_1,&caracteristique.Quantite)

	if err!=nil{
		fmt.Println(err)
	}
}


//cette fonction permet la suppression de la caracteristique 'un produit
func DeleteCaracteristiqueByIdProduit(id int) error{
	stmt, err := Configuration.Db().Prepare("DELETE FROM caracteristique WHERE Produit_idProduit=?;")
	
	if err!=nil{
		fmt.Println(err)
	}
	_, err = stmt.Exec(id)

	return err
	
}


//cette fonction permet la suppression de la caracteristique 'un produit
func DeleteCaracteristiqueById(id int) error{
	stmt, err := Configuration.Db().Prepare("DELETE FROM caracteristique WHERE idCaracteristiques=?;")
	
	if err!=nil{
		fmt.Println(err)
	}
	_, err = stmt.Exec(id)

	return err
	
}

