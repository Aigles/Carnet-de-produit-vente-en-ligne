package usersModels

import (
	"Configuration"
	"time"
	"fmt"
	"GenerateToken"
	"mail"
)


type Users struct{
	Id                       int64                `json:"id"`
	Nom                      string             `json:"nom"`
	Prenom                   string             `json:"prenom"`
	Email                    string             `json:"email"`
	Password                 string             `json:"password"`
	Date_derniere_connection time.Time          `json:"date_derniere_connection"`
	Etat_connection          int                `json:"etat_connection"`
	Avatar                   string             `json:"avatar"`
	Url                      string             `json:"url"`
	Role_idRole              int                `json:"role_id"`
	CreateAt                 time.Time          `json:"date_creation"`
	UpdateAt                 time.Time          `json:"date_update"`

}
type users []Users

type Message struct{
	Token        string        `json:"token"`
	Id           int64           `json:"id"`
	Code         int           `json:"code"`
	Status       string        `json:"status"`
}

//fonction permettant d'enregistrer une voiture
func NewUsers(u *Users) Message{

var message Message
var verifier_email bool

verifier_email=FindUsersByemail(u.Email);

fmt.Println(verifier_email)

if verifier_email{
	message.Status="L'adresse éléctronique que vous avez mis existe déja."
	fmt.Println(message.Status)
	return message
}

var body="Bonjour "+u.Nom+","+" \n\n Vous venez d'etre inscrit(e) sur le site de vente 13 or Collection.\n\n Croyez-nous vous avez fait le bon choix  !!!\n\n";
var to =u.Email;
if u==nil{
	fmt.Println(u)
}
u.CreateAt=time.Now().UTC()
u.UpdateAt=time.Now().UTC()
u.Date_derniere_connection = time.Now().UTC()

u.Etat_connection=0


res, err :=Configuration.Db().Exec("INSERT INTO users (nom, prenom,email,password, date_derniere_connection,etat_connection, avatar, date_creation,date_update,Role_idRole) VALUES (?,?,?,?,?,?,?,?,?,?);",u.Nom,u.Prenom,u.Email,u.Password,u.Date_derniere_connection,u.Etat_connection,u.Avatar,u.CreateAt,u.UpdateAt,u.Role_idRole)//.Scan(&u.Id)

if err==nil{
	id,_:=res.LastInsertId()
	message.Id=id
	message.Code=200
	message.Status="Votre inscription a été effectuée."
	mail.Send(to,body);

}else{
	fmt.Println(err)
	message.Id=0
	message.Code=0
	message.Status="Votre inscription a echouée"
}

return message
}

//fonction permettant de trouver nue voiture  par Id
func FindUsersById(id int) *Users{

	var Users Users 
 
	row:=Configuration.Db().QueryRow("SELECT * FROM users WHERE idUsers=?;",id)
	err:= row.Scan(&Users.Id,&Users.Nom,&Users.Prenom,&Users.Email,&Users.Password,&Users.Date_derniere_connection,&Users.Etat_connection,&Users.Avatar,&Users.CreateAt,&Users.UpdateAt,&Users.Role_idRole)
	 
	if err!=nil{
		fmt.Println(err)
	}

	return &Users
}



//fonction permettant de trouver un utilisateur  par email
func FindUsersByemail(email string) bool{

	var trouver bool = true; 
	var users Users ;
 
	row:=Configuration.Db().QueryRow("SELECT email FROM users WHERE email=?;",email)
	err:= row.Scan(&users.Email)
     
	fmt.Println(row)

	if err !=nil{
		fmt.Println(err)
		trouver=false;
		
	}
	return trouver
}

//fonction permettant de trouver un utilisateur  par email
func Sendusersemail(u *Users) Message{
	var message Message
	var verifier_email bool
	var body="Bonjour , \n\n Vous venez d'effectuer une demande pour la modification de votre mot de passe.\n\n Veuillez cliquer sur ce lien :" + u.Url;
	var to =u.Email;
	
	verifier_email=FindUsersByemail(u.Email);
	
	fmt.Println(verifier_email)
	
	if verifier_email{
		message.Status="Nous vous  prions de bien vouloir vérifier votre courriel."
		fmt.Println(message.Status)

		mail.Send(to,body);
	
	}else{
		message.Id=0
		message.Code=0
		message.Status="l'email que vous avez fourni n'existe pas !!!"
	}
	
	return message
}


//fonction permettant de trouver toutes les voitures
func AllUsers() *users {
	var users users 

	rows, err :=Configuration.Db().Query("SELECT users.idUsers, nom, prenom,email,password, date_derniere_connection,etat_connection, Date_creation, Date_update,avatar,Role_idRole FROM users")
	//fmt.Println("after rows")
	if err!=nil{
		fmt.Println(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var u Users 
	
		err := rows.Scan(&u.Id,&u.Nom,&u.Prenom,&u.Email,&u.Password,&u.Date_derniere_connection,&u.Etat_connection,&u.CreateAt,&u.UpdateAt,&u.Avatar,&u.Role_idRole )

		fmt.Printf("before log")
		if err !=nil{
			fmt.Println(err)
		}
		fmt.Printf("before append")
	users=append(users, u)
		fmt.Printf("after Users")
	}

	return &users
}




//cette fonction permet de modifier les informations d'une voiture
func UpdateUsers(Users *Users)Message{
	fmt.Println(Users)
	var message Message
	Users.UpdateAt=time.Now().UTC()

	stmt, err := Configuration.Db().Prepare("UPDATE users SET nom=?, prenom=?, date_derniere_connection=?,etat_connection=?, Date_update=?,avatar=? WHERE idUsers=?;")
	
	if err !=nil{
	fmt.Println(err)
	}

	_, err = stmt.Exec(&Users.Nom,&Users.Prenom,&Users.Date_derniere_connection,&Users.Etat_connection,&Users.UpdateAt,&Users.Avatar,Users.Id)

	if err==nil{
		message.Code=200
		message.Status="Modification reussie"
	
	}else{
		fmt.Println(err)
		message.Code=0
		message.Status="Modification échouée"
	}
	return message
}


func UpdateUserspasswordbyid(Users *Users)Message{
	
	var message Message
	Users.UpdateAt=time.Now().UTC()

	stmt, err := Configuration.Db().Prepare("UPDATE users SET Date_update=?,password=? WHERE idUsers=?;")
	
	if err !=nil{
	fmt.Println(err)
	}

	_, err = stmt.Exec(&Users.UpdateAt,&Users.Password,Users.Id)

	if err==nil{
		message.Code=200
		message.Status="Modification reussie"
	
	}else{
		fmt.Println(err)
		message.Code=0
		message.Status="Modification echouée"
	}
	return message
}

func UpdateUserspasswordbyemail(Users *Users)Message{
	
	var message Message
	Users.UpdateAt=time.Now().UTC()

	stmt, err := Configuration.Db().Prepare("UPDATE users SET Date_update=?,password=? WHERE email=?;")
	
	if err !=nil{
	fmt.Println(err)
	}

	_, err = stmt.Exec(&Users.UpdateAt,&Users.Password,Users.Email)

	if err==nil{
		message.Code=200
		message.Status="Modification reussie"
	
	}else{
		fmt.Println(err)
		message.Code=0
		message.Status="Modification échouée"
	}
	return message
}

//cette fonction permet de modifier les informations d'une voiture
func UpdateUsersonnection(id int64){
	
      var Users Users
     loc,_:=time.LoadLocation("America/New_York")
	Users.UpdateAt=time.Now().UTC().In(loc)


	 
	Users.Etat_connection=1
	Users.Date_derniere_connection=time.Now().UTC().In(loc)
	fmt.Println(Users.Date_derniere_connection)

	stmt, err := Configuration.Db().Prepare("UPDATE users SET  date_derniere_connection=?,etat_connection=?, Date_update=? WHERE idUsers=?;")
	
	if err !=nil{
	fmt.Println(err)
	}

	_, err = stmt.Exec(&Users.Date_derniere_connection,&Users.Etat_connection,&Users.UpdateAt,id)
}


//cette fonction permet la suppression d'un Users
func DeleteUsersById(id int) Message{

	var message Message

	stmt, err := Configuration.Db().Prepare("DELETE FROM users WHERE idUsers=?;")
	
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
		message.Status="Suppression échouée"
	}
	return message
	
}


func Connection(Users *Users) Message{
  
	var  message  Message

	row:=Configuration.Db().QueryRow("SELECT * FROM users WHERE email=? and password=?;",&Users.Email,&Users.Password)
	err:= row.Scan(&Users.Id,&Users.Nom,&Users.Prenom,&Users.Email,&Users.Password,&Users.Date_derniere_connection,&Users.Etat_connection,  &Users.Avatar,&Users.CreateAt,&Users.UpdateAt,&Users.Role_idRole)
	 
	UpdateUsersonnection(Users.Id)
	fmt.Println(Users.Id)

	if err==nil{
		message.Token=GenerateToken.TokenGenerator();
		message.Id=Users.Id
		message.Code=200
		message.Status="connexion reussie"
	
	}else{
		fmt.Println(err)
		message.Id=0
		message.Code=0
		message.Status="connexion échouée"
	}
	return message
}

func UpdateUsersdeconnection(id int){
	
	var Users Users
   loc,_:=time.LoadLocation("America/New_York")
  Users.UpdateAt=time.Now().UTC().In(loc)

  Users.Etat_connection=0
  Users.Date_derniere_connection=time.Now().UTC().In(loc)
  fmt.Println(Users.Date_derniere_connection)

  stmt, err := Configuration.Db().Prepare("UPDATE users SET  date_derniere_connection=?,etat_connection=?, Date_update=? WHERE idUsers=?;")
  
  if err !=nil{
  fmt.Println(err)
  }

  _, err = stmt.Exec(&Users.Date_derniere_connection,&Users.Etat_connection,&Users.UpdateAt,id)
}

