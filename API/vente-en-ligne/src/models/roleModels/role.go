package roleModels

import(
	
	"Configuration"
	"fmt"
)

type Roles struct{

	IdRole			 int		`json:"idRole"`
	Nom			     string		`json:"nom"`
	Description		 string		`json:"description"`
	CreateAt		 time.Time	`json:"date_creation"`
	UpdateAt		 time.Time  `json:"date_update"`

}

type MessageRole struct {

	code			int			`json:"code"`
	status			string		`json:"status"`

}

//type role []Roles

func newRole(role *Role) MessageRole{

	var message MessageRole
	if role == nil{
		fmt.Println(role)
	}

	role.CreateAt = time.Now()

	_, err := Configuration.Db().Exec("INSERT INTO role (nom, description, date_creation) VALUE(?, ?, ?)", role.Nom, role.Description, role.CreateAt)

	if err ==nil{
		message.code = 200
		message.status = "success de la creation du role"
	}else{
		message.code = 0
		message.status = "l'enregistrement a echoue"
	}

	return message

}

//pour retrouver un role par son id
func findRoleById(id int) *Role{

	var role Role

	row := Configuration.Db().QueryRow("SELECT * FROM role WHERE idRole = ?", id)

	err := row.Scan(&role.Nom, &role.Description, &role.CreateAt, &role.UpdateAt, &role.IdRole)

	if err != nil{
		fmt.Println(err)
	}

	return &role
}

//pour la mise a jour d'un role
func updateRole(role *Role) MessageRole{

	var message MessageRole

	str, err := Configuration.Db().Prepare("UPDATE ROLE SET nom = ?, description = ?, date_update = ? WHERE idRole = ? ")

	if err != nil{
		fmt.Println(err)
	}

	_, err = str.Scan(&role.Nom, &role.Description, &role.UpdateAt, &role.IdRole)

	if err ==nil{
		message.code = 200
		message.status = "success de la mise a jour"
	}else{
		message.code = 0
		message.status = "la mise a jour a echoue"
	}

	return message
}

//pour lister les roles
func listerRole() Role{

	var role Role

	rows, err := Configuration.Db().Query("SELECT idRole, nom, drescription FROM role")

	if err !=nil{
		fmt.Println(err)
	}

	defer rows.close()
	fmt.Println("Listage des differentes Roles")
	for rows.Next(){
		var r Role
		err := rows.Scan(&role.IdRole, &role.Nom, &role.Description)

		if err !=nil{
			fmt.Println(err)
		}
		fmt.Println("before append")
		role = append(role, r)
		fmt.Printf("after Role")

	}

}

//pour supprimer un role


