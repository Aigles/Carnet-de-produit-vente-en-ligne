package Configuration

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

//connection avec une base de donnees
//creation d'une instance de la base de donnees
func DatabaseInitial() {
	var err error
	db, err = sql.Open("mysql", utilisateur+":"+password+"@/"+base_de_donnees+"?parseTime=true")
	//defer db.close()
	//SetTimeZone()

	if err != nil {
		log.Fatal(err)
	}


}

func SetTimeZone() {
	_, err := db.Exec("set time_zone=+00:00")

	if err != nil {
		log.Fatal(err)
	}

}

//creation d'une fonction getter  pour la recuperation de l'instance
func Db() *sql.DB {
	return db
}
