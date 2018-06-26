package main

import (
	"github.com/kataras/iris"
	"github.com/iris-contrib/middleware/cors"
	"models/categorieModels"
	"models/produitModels"
	"models/commandeModels"
	"models/rolleModels"
	"models/usersModels"
	"models/statistique"
	"models/reference_livraisonModels"
	"models/historic"
	"Configuration"
)

func main() {
	//mail.Send("bellunetabithamegane@gmail.com"," tests de email");
	
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

		categorieID, _ := ctx.Params().GetInt("id")
	   
		ctx.JSON(categorieModels.DeletecategoryById(categorieID))
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

	app.Get("/produit/limite", func(ctx iris.Context) {
		// date_debut:= ctx.Params().Get("debut")
		// date_fin:= ctx.Params().Get("fin") 
		
	   
		ctx.JSON(produitModels.AllproduitDate());
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
	app.Get("/commande", func(ctx iris.Context) {


		ctx.JSON(commandeModels.AllCommande())
	})


	app.Get("/commande/{id:int}", func(ctx iris.Context) {
		commandeID, _ := ctx.Params().GetInt("id")
		
	   
		ctx.JSON(commandeModels.FindCommandeById(commandeID))
	})

	app.Post("/modifiercommande", func(ctx iris.Context) {
		var commande commandeModels.Commande 

		ctx.ReadJSON(&commande)
	   
		ctx.JSON(commandeModels.UpdateCommande(&commande))
	})

	app.Post("/deletecommande/{id:int}", func(ctx iris.Context) {
		var commande commandeModels.Commande 

		ctx.ReadJSON(&commande)
	   
		ctx.JSON(commandeModels.UpdateCommande(&commande))
	})

	app.Post("/creercommande", func(ctx iris.Context) {

	   var commande commandeModels.Commande 

		ctx.ReadJSON(&commande)
	  
	   ctx.JSON( commandeModels.NewCommande(&commande))
	})
	
 
	//Routage pour les utilisateurs
	app.Post("/ceerUtilisateur", func(ctx iris.Context) {


		var users usersModels.Users 

		ctx.ReadJSON(&users)
	  
	   ctx.JSON( usersModels.NewUsers(&users))
		
	})

	//lister tout les utilisateurs
	app.Get("/utilisateur", func(ctx iris.Context){
		ctx.JSON( usersModels.AllUsers())
	})

		//lister tout les utilisateurs
	app.Get("/utilisateur/{id:int}", func(ctx iris.Context) {
		userID, _ := ctx.Params().GetInt("id")

		ctx.JSON( usersModels.FindUsersById(userID))
		})

	//modifier un utilisateur
	app.Post("/modifierUtilisateur", func(ctx iris.Context){
         
		var users usersModels.Users 

		ctx.ReadJSON(&users)
	  
	   ctx.JSON( usersModels.UpdateUsers(&users))

	})

	//supprimer un utilisateur
	app.Post("/supprimerUtilisateur/{id:int}", func(ctx iris.Context) {
		userID, _ := ctx.Params().GetInt("id")

		ctx.JSON( usersModels.DeleteUsersById(userID))

	})

	//modifier password un utilisateur
	app.Post("/modifier/passwordUtilisateur", func(ctx iris.Context) {
		var users usersModels.Users 

		ctx.ReadJSON(&users)
	  
	   ctx.JSON( usersModels.UpdateUserspasswordbyid(&users))

	})

 //modifier password un utilisateur
 app.Post("/oublier/passwordUtilisateur", func(ctx iris.Context) {
	var users usersModels.Users  

	ctx.ReadJSON(&users)
  
   ctx.JSON( usersModels.UpdateUserspasswordbyemail(&users))

})
	//deconnecter un utilisateur
	app.Get("/deconnecter/Utilisateur/{id:int}", func(ctx iris.Context) {
		userID, _ := ctx.Params().GetInt("id")

		usersModels.UpdateUsersdeconnection(userID)

	})
	
	//Routage pour les differents roles
	app.Post("/creerRolle", func(ctx iris.Context) {
		var role rolleModels.Roles 

		ctx.ReadJSON(&role)
	   
		ctx.JSON(rolleModels.NewRole(&role))
		
	})

	//lister tout les utilisateurs
	app.Get("/rolle", func(ctx iris.Context) {

		ctx.JSON(rolleModels.ListerRole())
	})


	app.Get("/rolle/{id:int}", func(ctx iris.Context) {
		roleID, _ := ctx.Params().GetInt("id")

		ctx.JSON(rolleModels.FindRoleById(roleID))
	})   


	//modifier un utilisateur
	app.Post("/modifierRolle", func(ctx iris.Context){
		var role rolleModels.Roles 

		ctx.ReadJSON(&role)
	   
		ctx.JSON(rolleModels.UpdateRole(&role))    
	})

	//supprimer un utilisateur
	app.Post("/supprimerRolle/{id:int}", func(ctx iris.Context) {
		roleID, _ := ctx.Params().GetInt("id")


		ctx.JSON(rolleModels.DeleteRoleById(roleID))
	})
	

	//connexion 
	app.Post("/connexion", func(ctx iris.Context) {
        var conn usersModels.Users 

		ctx.ReadJSON(&conn)
	   
		ctx.JSON(usersModels.Connection(&conn)) 
	
	 })
	 
	 app.Get("/statistique", func(ctx iris.Context) {

		ctx.JSON(statistique.Statistique())
	})
 

	app.Get("/Graphecommande", func(ctx iris.Context) {

		ctx.JSON(statistique.Graphecommande())
	})



	//lister tout les utilisateurs
	app.Post("/creer_reference_livraison", func(ctx iris.Context) {
		var reference_livraison reference_livraisonModels.Reference_livraison 

		ctx.ReadJSON(&reference_livraison)
	   
		ctx.JSON(reference_livraisonModels.NewReference_livraison(&reference_livraison))    
	
	 })


	app.Get("/reference_livraison", func(ctx iris.Context) {

		ctx.JSON(reference_livraisonModels.AllReference_livraison())
	})


	app.Get("/reference_livraison/{id:int}", func(ctx iris.Context) {
		reference_livraisonID, _ := ctx.Params().GetInt("id")

		ctx.JSON(reference_livraisonModels.FindReference_livraisonById(reference_livraisonID))
	})   


	//modifier un utilisateur
	app.Post("/modifier/reference_livraison", func(ctx iris.Context){
		var reference_livraison reference_livraisonModels.Reference_livraison 

		ctx.ReadJSON(&reference_livraison)
	   
		ctx.JSON(reference_livraisonModels.UpdateReference_livraison(&reference_livraison))    
	})

	//supprimer un utilisateur
	app.Post("/supprimer/reference_livraison/{id:int}", func(ctx iris.Context) {
		reference_livraisonID, _ := ctx.Params().GetInt("id")


		ctx.JSON(reference_livraisonModels.DeleteReference_livraisonById(reference_livraisonID))
	})

		//supprimer un utilisateur
		app.Get("/historic", func(ctx iris.Context) {
	
	
			ctx.JSON(historic.Allhistoric())
		})
	

	newapp.Run(iris.Addr(":1230"))
}         
