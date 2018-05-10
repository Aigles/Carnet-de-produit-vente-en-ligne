package statistique

import(
	"Configuration"
	"fmt"
)

type Statistics struct{

	IdStatistic		     int64		`json:"id"`
	Total_membre	     int64		`json:"total_membre"`
	Total_produit	     int64		`json:"total_produit"`
	Total_commande	     int64		`json:"total_commande"`
	Total_client	     int64      `json:"total_client"`
	Total_membre_jour	 int64		`json:"total_membre_jour"`
	Total_produit_jour	 int64		`json:"total_produit_jour"`
	Total_commande_jour	 int64		`json:"total_commande_jour"`
	Total_client_jour	 int64      `json:"total_client_jour"`

}


type Graphecommand struct{

	Id		             int64		`json:"id"`
	Nom	                 string		`json:"nom"`
	Valeur	             int64		`json:"valeur"`
	
	

}

type MessageStatistic struct {

	Code			int			`json:"code"`
	Status			string		`json:"status"`

}

type Statistic []Statistics
type graphecommande []Graphecommand


//pour retrouver un statistic par son id
func Statistique() *Statistics{

	var statistic Statistics

	row := Configuration.Db().QueryRow("SELECT count(*) FROM users")

	err := row.Scan(&statistic.Total_membre)

	if err != nil{
		fmt.Println(err)
	}
	 
	row = Configuration.Db().QueryRow("SELECT count(*) FROM users,role WHERE users.Role_idRole=role.idRole and role.nom='Clients' group by role.idRole")

	err = row.Scan(&statistic.Total_client)

	if err != nil{
		fmt.Println(err)
	}



	row = Configuration.Db().QueryRow("SELECT count(*) FROM produit")

	err = row.Scan(&statistic.Total_produit)

	if err != nil{
		fmt.Println(err)
	}


	row = Configuration.Db().QueryRow("SELECT count(*) FROM commande ;")

	err = row.Scan(&statistic.Total_commande)

	if err != nil{
		fmt.Println(err)
	}

	//statistique journalier
	row = Configuration.Db().QueryRow("SELECT count(*) FROM users where date_creation>=sysdate();")

	err = row.Scan(&statistic.Total_membre_jour)

	if err != nil{
		fmt.Println(err)
	}
	 
	row = Configuration.Db().QueryRow("SELECT count(*) FROM users,role WHERE users.Role_idRole=role.idRole and role.nom='Clients' and users.date_creation>=sysdate()  group by role.idRole")

	err = row.Scan(&statistic.Total_client_jour)

	if err != nil{
		fmt.Println(err)
	}



	row = Configuration.Db().QueryRow("SELECT count(*) FROM graphecommande where Date_creation>=sysdate();")

	err = row.Scan(&statistic.Total_produit_jour)

	if err != nil{
		fmt.Println(err)
	}


	row = Configuration.Db().QueryRow("SELECT count(*) FROM commande date_commande>=sysdate();")

	err = row.Scan(&statistic.Total_commande_jour)

	if err != nil{
		fmt.Println(err)
	}
	return &statistic
}


//fonction permettant de trouver toutes les voitures
func Graphecommande() *graphecommande {
	var graphecommande graphecommande 

	rows, err :=Configuration.Db().Query("SELECT produit.idProduit, produit.nom, count(*) FROM produit,produit_commande where produit.idProduit=produit_commande.Produit_idProduit group by produit_commande.Produit_idProduit")
	//fmt.Println("after rows")
	if err!=nil{
		fmt.Println(err)
	}
	fmt.Printf("before close")
	//close rows after all readed
	defer rows.Close()
	fmt.Printf("afer close")
	for rows.Next(){
		var c Graphecommand
	
		err := rows.Scan(&c.Id,&c.Nom,&c.Valeur)
		
		fmt.Printf("before log")
		if err !=nil{
			fmt.Println(err)
		}
		fmt.Printf("before append")
		graphecommande=append(graphecommande, c)
		fmt.Printf("after graphecommande")
	}

	return &graphecommande
}

