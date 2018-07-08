package historic

import (
	"Configuration"
	"time"
	"fmt"
)


type Historic struct{
	Id           int            `json:"id"`
	CreateAt time.Time          `json:"date_creation"`
	Description  string         `json:"description"`
	Nom          string         `json:"nom"`
	Prenom       string         `json:"prenom"`
	Role_idRole  int             `json:"id_role"`    
	IdUser       int64          `json:"iduser"`
	

}
type historic []Historic

type Message struct{
	Id      int64         `json:"id"`
	Code    int           `json:"code"`
	Status  string         `json:"status"`
}

//fonction permettant d'enregistrer une voiture
func Newhistoric(chaine string, IdUser int64) {

var c Historic;

c.CreateAt=time.Now();

c.Description=chaine;

c.IdUser=IdUser;

   _,err :=Configuration.Db().Exec("INSERT INTO historique (create_at ,description, IdUser ) VALUES (?,?,?);",c.CreateAt,c.Description,c.IdUser)//.Scan(&c.Id)

if err!=nil{

	fmt.Println(err)
}

}


//fonction permettant de trouver nue voiture  par Id
func FindHistoricById(id int) *Historic{

	var historic Historic 
 
	row:=Configuration.Db().QueryRow("SELECT * FROM historique WHERE idHistoric=?;",id)
	err:= row.Scan(&historic.Id,&historic.CreateAt,&historic.Description,&historic.IdUser)
	
	 
	if err!=nil{
		fmt.Println(err)
	}

	return &historic
}



    
//fonction permettant de trouver toutes les voitures
func Allhistoric() *historic {
	var historic historic 

	rows, err :=Configuration.Db().Query("SELECT idHistoric,description,create_at ,idUser, nom , prenom, Role_idRole FROM historique, users where historique.idUser=users.idUsers")
	//fmt.Println("after rows")
	if err!=nil{
		fmt.Println(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var c Historic 
	
		err := rows.Scan(&c.Id,&c.Description,&c.CreateAt,&c.IdUser,&c.Nom,&c.Prenom, &c.Role_idRole)
		
		fmt.Printf("before log")
		if err !=nil{
			fmt.Println(err)
		}
		fmt.Printf("before append")
		historic=append(historic, c)
		fmt.Printf("after historic")
	}

	return &historic
}


func FindHistoricByDate(DebutDate,FinDate string ) *historic{
	var historic historic 

	rows, err :=Configuration.Db().Query("SELECT idHistoric,description,create_at FROM historic where create_at between ? and ?;",DebutDate,FinDate)
	//fmt.Println("after rows")
	if err!=nil{
		fmt.Println(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var c Historic 
	
		err := rows.Scan(&c.Id,&c.Description,&c.CreateAt )
		fmt.Printf("before log")
		if err !=nil{
			fmt.Println(err)
		}
		fmt.Printf("before append")
		historic=append(historic, c)
		fmt.Printf("after historic")
	}

	return &historic
}



//cette fonction permet la suppression d'un historic
func DeleteHistoricById(id int) Message{

	var message Message

	stmt, err := Configuration.Db().Prepare("DELETE FROM historic WHERE idHistoric=?       ;")
	
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

