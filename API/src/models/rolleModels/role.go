package rolleModels

import(
	"Configuration"
	"fmt"
	"time"
)

type Roles struct{

	IdRole			 int		`json:"id"`
	Nom			     string		`json:"nom"`
	Description		 string		`json:"description"`
	CreateAt		 time.Time	`json:"date_creation"`
	UpdateAt		 time.Time  `json:"date_update"`

}

type MessageRole struct {

	Code			int			`json:"code"`
	Status			string		`json:"status"`

}

type Role []Roles

func NewRole(role *Roles) MessageRole{

	var message MessageRole
	if role == nil{
		fmt.Println(role)
	}

	role.CreateAt = time.Now()
    role.UpdateAt = time.Now()

	_, err := Configuration.Db().Exec("INSERT INTO role (nom, description, date_creation, date_update) VALUE(?, ?, ?, ?)", role.Nom, role.Description, role.CreateAt,role.UpdateAt)

	if err ==nil{
		message.Code = 200
		message.Status = "success de la creation du role"
	}else{
		message.Code = 0
		message.Status = "l'enregistrement a echoue"
	}

	return message

}

//pour retrouver un role par son id
func FindRoleById(id int) *Roles{

	var role Roles

	row := Configuration.Db().QueryRow("SELECT * FROM role WHERE idRole= ?", id)

	err := row.Scan(&role.IdRole, &role.Nom, &role.Description, &role.CreateAt, &role.UpdateAt)

	if err != nil{
		fmt.Println(err)
	}

	return &role
}

//pour la mise a jour d'un role
func UpdateRole(role *Roles) MessageRole{

	var message MessageRole

	role.UpdateAt = time.Now()

	str, err := Configuration.Db().Prepare("UPDATE role SET nom = ?, description = ?, date_update = ? WHERE idRole= ? ")

	if err != nil{
		fmt.Println(err)
	}

	_, err = str.Exec(&role.Nom, &role.Description, &role.UpdateAt, &role.IdRole)

	if err ==nil{
		message.Code = 200
		message.Status = "success de la mise a jour"
	}else{
		message.Code = 0
		message.Status = "la mise a jour a echoue"
	}

	return message
}

//pour lister les roles
func ListerRole() Role{

	var role Role

	rows, err := Configuration.Db().Query("SELECT idRole, nom, description FROM role")

	if err !=nil{
		fmt.Println(err)
	}

	defer rows.Close()
	fmt.Println("Listage des differentes Roles")
	for rows.Next(){
		var r Roles
		err := rows.Scan(&r.IdRole, &r.Nom, &r.Description)

		if err !=nil{
			fmt.Println(err)
		}
		fmt.Println("before append")
		role = append(role, r)
		fmt.Printf("after Role")

	}
	 return role

}

//pour supprimer un role
func DeleteRoleById(id int) MessageRole{

	var message MessageRole

	stmt, err := Configuration.Db().Prepare("DELETE FROM role WHERE idRole=?;")
	
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

