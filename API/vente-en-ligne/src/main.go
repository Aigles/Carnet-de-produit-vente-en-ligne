package main

import (
	"github.com/kataras/iris"
	"github.com/iris-contrib/middleware/cors"
	"models"
	"models/categorieModels"
	"models/produitModels"
	"config"
	"Configuration"
)

func main() {
	newapp := iris.New()
	crs := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // allows everything, use that to change the hosts.
		// AllowedMethods:   []string{"*"},
		// AllowedHeaders:   []string{"Authorization"},
		AllowCredentials: true,
	})

	app:= newapp.Party("/api/app", crs).AllowMethods(iris.MethodOptions)

	//app.Use(crs)

	Configuration.DatabaseInitial()

	app.Get("/", func(ctx iris.Context) {
		//envoie de texte simple
		//ctx.WriteString("Hello word")
		//envoie de texte HTML
		ctx.HTML("<h1>Hello Word</h1>")
	})

	app.Get("/json", func(ctx iris.Context) {
		config.DatabaseInit()
		//liste := map[string]int8{"un": 1, "deux": 2, "trois": 3, "quatres": 4}
		//envoie de texte simple
		//ctx.WriteString("Hello word")
		//envoie de texte HTML
		//ctx.HTML("<h1>Hello Word</h1>")
		//models.NewCar(&models.Car{Manufacture:"citroen",Design: "ds3", Style: "sport", Doors: 4})

		ctx.JSON(models.AllCars())
	})

	app.Get("/categorie", func(ctx iris.Context) {
		//Configuration.DatabaseInitial()
		//config.DatabaseInit()
		//liste := map[string]int8{"un": 1, "deux": 2, "trois": 3, "quatres": 4}
		//envoie de texte simple
		//ctx.WriteString("Hello word")
		//envoie de texte HTML
		//ctx.HTML("<h1>Hello Word</h1>")
		//categorieModels.Newcategory(&categorieModels.Category{Type:"Men"})
		// ctx.Header("Access-Control-Allow-Origin","*")
		// ctx.Header("Access-Control-Allow-Headers","Content-Type")
		// ctx.Header("Access-Control-Allow-Methods","GET")

		ctx.JSON(categorieModels.Allcategorie())
	})

	app.Get("/produit", func(ctx iris.Context) {
	
		//config.DatabaseInit()
		//liste := map[string]int8{"un": 1, "deux": 2, "trois": 3, "quatres": 4}
		//envoie de texte simple
		//ctx.WriteString("Hello word")
		//envoie de texte HTML
		//ctx.HTML("<h1>Hello Word</h1>")
		//produitModels.Newproduit(&produitModels.Produit{Nom:"Jeans jupe",Description:"Jeans blanc",Nbre_like:0,Nbre_vendu:0, Nbre_en_stock:23,Rabais:0, Activer:0,Categorie_idCategorie:2})
	//    ctx.Header("Access-Control-Allow-Origin","*")
	//    ctx.Header("Access-Control-Allow-Headers","Content-Type")
	//    ctx.Header("Access-Control-Allow-Methods","GET")
	   
		ctx.JSON(produitModels.Allproduit())
	})
	// app.Get("/user/{id:long}", func(ctx iris.Context) {
    //     userID, _ := ctx.Params().GetInt64("id")
    //     ctx.Writef("User ID: %d", userID)
    // })
	
	app.Get("/produit/{id:int}", func(ctx iris.Context) {
		produitID, _ := ctx.Params().GetInt("id")
		//config.DatabaseInit()
		//liste := map[string]int8{"un": 1, "deux": 2, "trois": 3, "quatres": 4}
		//envoie de texte simple
		//ctx.WriteString("Hello word")
		//envoie de texte HTML
		//ctx.HTML("<h1>Hello Word</h1>")
		//produitModels.Newproduit(&produitModels.Produit{Nom:"Jeans jupe",Description:"Jeans blanc",Nbre_like:0,Nbre_vendu:0, Nbre_en_stock:23,Rabais:0, Activer:0,Categorie_idCategorie:2})
	//    ctx.Header("Access-Control-Allow-Origin","*")
	//    ctx.Header("Access-Control-Allow-Headers","Content-Type")
	//    ctx.Header("Access-Control-Allow-Methods","*")
	   
		ctx.JSON(produitModels.FindProduitById(produitID));
	})
	app.Post("/creerproduit", func(ctx iris.Context) {
		//produitModels.Newproduit(&produitModels.Produit{Nom:"Jeans jupe",Description:"Jeans blanc",Nbre_like:0,Nbre_vendu:0, Nbre_en_stock:23,Rabais:0, Activer:0,Categorie_idCategorie:2})
	//    ctx.Header("Access-Control-Allow-Origin","*")
	//    ctx.Header("Access-Control-Allow-Headers","Content-Type")
	//    ctx.Header("Access-Control-Allow-Methods","POST")
	   var prod produitModels.Produit 

		ctx.ReadJSON(&prod)
	  
	   ctx.JSON( produitModels.Newproduit(&prod));
	})
	app.Post("/creerproduit/caracteristics", func(ctx iris.Context) {
		//produitModels.Newproduit(&produitModels.Produit{Nom:"Jeans jupe",Description:"Jeans blanc",Nbre_like:0,Nbre_vendu:0, Nbre_en_stock:23,Rabais:0, Activer:0,Categorie_idCategorie:2})
	//    ctx.Header("Access-Control-Allow-Origin","*")
	//    ctx.Header("Access-Control-Allow-Headers","Content-Type")
	//    ctx.Header("Access-Control-Allow-Methods","POST")
	   var caract produitModels.Caracteristiques 

		ctx.ReadJSON(&caract)
	  
	   //ctx.JSON( 
		   produitModels.NewCaracteristiques(&caract)
		   //);
	})
	
	newapp.Run(iris.Addr(":1230"))
}
