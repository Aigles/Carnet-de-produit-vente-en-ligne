package models

import (
	"config"
	"log"
	"time"
	"fmt"
)

type Car struct{
	Id           int        `json:"id"`
	Manufacture string        `json:"manufacturer"`
	Design      string          `json:"design"`
	Style       string          `json:"style"`
	Doors       int       `json:"doors"`
	CreateAt time.Time        `json:"create_at"`
	UpdateAt time.Time        `json:"update_at"`
}
type Cars []Car
//fonction permettant d'enregistrer une voiture
func NewCar(c *Car){
if c==nil{
	log.Fatal(c)
}
c.CreateAt=time.Now();
c.UpdateAt=time.Now();

err :=config.Db().QueryRow("INSERT INTO cars (manufacturer, design, style, doors, created_at, updated_at) VALUES (?,?,?,?,?,?);",c.Manufacture,c.Design,c.Style,c.Doors,c.CreateAt,c.UpdateAt).Scan(&c.Id)

if err!=nil{
	log.Fatal(err)
}
}

//fonction permettant de trouver nue voiture  par Id
func FindCarById(id int) *Car{

	var car Car 
 
	row:=config.Db().QueryRow("SELECT * FROM cars WHERE id =?;",id)
	err:= row.Scan(&car.Id,&car.Manufacture, &car.Design, &car.Style, &car.Doors, &car.CreateAt, &car.UpdateAt)
	 
	if err!=nil{
		log.Fatal(err)
	}

	return &car
}

//fonction permettant de trouver toutes les voitures
func AllCars() *Cars {
	var cars Cars 

	rows, err :=config.Db().Query("SELECT id,manufacturer, design, style, doors, created_at, updated_at FROM cars")
	//log.Fatal("after rows")
	if err!=nil{
		log.Fatal(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var c Car 

		err := rows.Scan(&c.Id, &c.Manufacture, &c.Design, &c.Style, &c.Doors, &c.CreateAt, &c.UpdateAt)
        fmt.Printf("before log")
		if err !=nil{
			log.Fatal(err)
		}
		fmt.Printf("before append")
		cars=append(cars, c)
		fmt.Printf("after cars");
	}

	return &cars
}

//cette fonction permet de modifier les informations d'une voiture
func UpdateCar(car *Car){
	car.UpdateAt=time.Now()

	stmt, err := config.Db().Prepare("UPDATE cars SET manifacturer=$1, design=$2, style=$3, doors=$4, updated_at=$5 WHERE id=$6;")
	
	if err !=nil{
	log.Fatal(err)
	}

	_, err = stmt.Exec(car.Manufacture,car.Design, car.Style, car.Doors, car.UpdateAt,car.Id)

	if err!=nil{
		log.Fatal(err)
	}
}


//cette fonction permet la suppression d'un produit
func DeleteCarById(id int) error{
	stmt, err := config.Db().Prepare("DeELETE FROM cars WHERE id=$1;")
	
	if err!=nil{
		log.Fatal(err)
	}
	_, err = stmt.Exec(id)

	return err
	
}

