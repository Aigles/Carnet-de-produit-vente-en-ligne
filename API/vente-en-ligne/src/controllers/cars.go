package controllers

import(
	"encoding/json"
	"mux-master"
	"models"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
)

//cette fonction envoit toute notre voiture dans la base de donnees

func CarsIndex(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-type","application/json;charset=UTF-8")
	w.WriteHeader(http.StatusOk)

	json.NewEncoder(w).Encode(models.AllCars())

}

func CarsCreate(w http.ResponseWrite, r *http.Request){
	w.Header().Set("Content-type","application/json;charset=UTF-8")
	w.WriteHeader(http.StatusOk)
	
	body, err := ioutil.ReadAll(r.Body)
	
	if err !=nil{
		log.Fatal(err)
	}

	var car models.Cars
	
	err = json.Unmarshal(body, &car)

	if err !=nil{
		log.Fatal(err)
	}

	models.NewCar(&car)

	json.NewEncoder(w).Encode(car)
}

//cette fonction envoie les donnees d'une voiture par ID

func CarsShow(w http.responsewriter , r *http.Request){
	w.Header().Set("Content-type","application/json;charset=UTF-8")
	w.WriteHeader(http.StatusOk)

	vars :=mux.Vars(r)
	id, err:=strconv.Atoi(vars["id"])
	
	if err !=nil{
		log.Fatal(err)
	}

	car :=modeles.FindCarsById(id)

	json.NewEncoder(w).Encode(car)
}


//cette fonction envoie les donnees d'une voiture par ID

func CarsUpdate(w http.responsewriter , r *http.Request){
	w.Header().Set("Content-type","application/json;charset=UTF-8")
	w.WriteHeader(http.StatusOk)

	vars :=mux.Vars(r)
	id, err:=strconv.Atoi(vars["id"])
	
	if err !=nil{
		log.Fatal(err)
	}

	body, err := ioutil.ReadAll(r.Body)
	 
	
	if err !=nil{
		log.Fatal(err)
	}
//recherche la voiture
	car :=models.FindCarsById(id)

	err=json.Unmarshal(body, &car)

	car :=modeles.UpdateCar(car)

	json.NewEncoder(w).Encode(car)
}

//cette fonction supprime les donnees d'une voiture par ID

func CarsDelete(w http.responsewriter , r *http.Request){
	w.Header().Set("Content-type","application/json;charset=UTF-8")
	w.WriteHeader(http.StatusOk)

	vars :=mux.Vars(r)
	id, err:=strconv.Atoi(vars["id"])
	
	if err !=nil{
		log.Fatal(err)
	}

	car :=modeles.DeleteCarById(id)
}

