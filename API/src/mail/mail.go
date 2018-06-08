package mail

import (
	"log"
	"net/smtp"
)

// func main() {
// 	send("hello there")
// }

func Send(body string,to string) {
	from := "bellunetabithamegane@gmail.com"
	pass := "Tabie123"
	//to := "wilendy27@gmail.com"

	msg := "From: " + from + "\n" +
		"To: " + to + "\n" +
		"Subject: 13 or Collection!!! Bon Choix pour l'achat de vos vetements\n\n" +
		body

	err := smtp.SendMail("smtp.gmail.com:587",
		smtp.PlainAuth("", from, pass, "smtp.gmail.com"),
		from, []string{to}, []byte(msg))

	if err != nil {
		log.Printf("smtp error: %s", err)
		return
	}

	log.Print("sent, visit http://foobarbazz.mailinator.com")
}
