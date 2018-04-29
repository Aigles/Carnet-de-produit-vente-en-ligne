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
	db, err = sql.Open("mysql", "root:@/aigle_vente_en_ligne?parseTime=true")
	//defer db.close()

	if err != nil {
		log.Fatal(err)
	}


}

func createCarsTable() {
	_, err := db.Exec("CREATE TABLE IF NOT EXISTS cars(id serial,manufacturer varchar(20), design varchar(20), style varchar(20), doors int, created_at timestamp, updated_at timestamp, constraint pk primary key(id))")

	if err != nil {
		log.Fatal(err)
	}

}

//creation d'une fonction getter  pour la recuperation de l'instance
func Db() *sql.DB {
	return db
}
