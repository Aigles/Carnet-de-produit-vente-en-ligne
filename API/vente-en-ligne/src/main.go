package main

import (
	"github.com/kataras/iris"
	"github.com/iris-contrib/middleware/cors"
	"models/categorieModels"
	"models/produitModels"
	"Configuration"
)

func main() {
	newapp := iris.New()
	crs := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // allows everything, use that to change the hosts.
		// AllowedMethods:   []string{"*"},
		// AllowedHeaders:   []string{"*"},
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

//categorie
	app.Get("/categorie", func(ctx iris.Context) {


		ctx.JSON(categorieModels.Allcategorie())
	})


	app.Get("/categorie/{id:int}", func(ctx iris.Context) {
		categorieID, _ := ctx.Params().GetInt("id")
		
	   
		ctx.JSON(categorieModels.FindcategoryById(categorieID));
	})

	app.Post("/modifiercategorie", func(ctx iris.Context) {
		var cat categorieModels.Category 

		ctx.ReadJSON(&cat)
	   
		ctx.JSON(categorieModels.Updatecategory(&cat))
	})

	app.Post("/deletecategorie/{id:int}", func(ctx iris.Context) {
		var cat categorieModels.Category 

		ctx.ReadJSON(&cat)
	   
		ctx.JSON(categorieModels.Updatecategory(&cat))
	})

	app.Post("/creercategorie", func(ctx iris.Context) {

	   var cat categorieModels.Category 

		ctx.ReadJSON(&cat)
	  
	   ctx.JSON( categorieModels.Newcategory(&cat));
	})

	//Routage pour les produits

	app.Get("/produit", func(ctx iris.Context) {

	   
		ctx.JSON(produitModels.Allproduit())
	})

	
	app.Get("/produit/{id:int}", func(ctx iris.Context) {
		produitID, _ := ctx.Params().GetInt("id")
		
	   
		ctx.JSON(produitModels.FindProduitById(produitID));
	})

	app.Get("/produit/categorie/{id:int}", func(ctx iris.Context) {
		categorieID, _ := ctx.Params().GetInt("id")

	   
		ctx.JSON(produitModels.FindProduitByIdcategorie(categorieID));
	})


	app.Post("/modifierproduit", func(ctx iris.Context) {
		var prod produitModels.Produit  

		ctx.ReadJSON(&prod)
	   
		ctx.JSON(produitModels.UpdateProduit(&prod))
	})


	app.Post("/modifierproduit/caracteristics", func(ctx iris.Context) {
		var caract produitModels.Caracteristiques  

		ctx.ReadJSON(&caract)
	   
		ctx.JSON(produitModels.Updatecaracteristique(&caract))
	})

	app.Post("/deleteproduit/{id:int}", func(ctx iris.Context) {
		produitID, _ := ctx.Params().GetInt("id")
	   
		ctx.JSON(produitModels.DeleteProduitById(produitID))
	})

	app.Post("/creerproduit", func(ctx iris.Context) {
	
	   var prod produitModels.Produit 

		ctx.ReadJSON(&prod)
	  
	   ctx.JSON( produitModels.Newproduit(&prod));
	})


	app.Post("/creerproduit/caracteristics", func(ctx iris.Context) {

	   var caract produitModels.Caracteristiques 

		ctx.ReadJSON(&caract)
	  
	   //ctx.JSON( 
		   produitModels.NewCaracteristiques(&caract)
		   //);
	})



	//commande
	// app.Get("/commande", func(ctx iris.Context) {


	// 	ctx.JSON(commandeModels.AllCommande())
	// })


	// app.Get("/commande/{id:int}", func(ctx iris.Context) {
	// 	commandeID, _ := ctx.Params().GetInt("id")
		
	   
	// 	ctx.JSON(categorieModels.FindCommandeById(commandeID));
	// })

	// app.Put("/modifiercommande", func(ctx iris.Context) {
	// 	var commande commandeModels.Commande 

	// 	ctx.ReadJSON(&commande)
	   
	// 	ctx.JSON(commandeModels.UpdateCategory(&commande))
	// })

	// app.Delete("/deletecommande/{id:int}", func(ctx iris.Context) {
	// 	var commande commandeModels.Commande 

	// 	ctx.ReadJSON(&commande)
	   
	// 	ctx.JSON(commandeModels.UpdateCommande(&commande))
	// })

	// app.Post("/creercommande", func(ctx iris.Context) {

	//    var commande commandeModels.Commande 

	// 	ctx.ReadJSON(&commande)
	  
	//    ctx.JSON( commandeModels.NewCommande(&commande));
	// })
	
	newapp.Run(iris.Addr(":1230"))
}         
