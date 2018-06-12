package mail

import (
	"gopkg.in/gomail.v2"
	"log"
	"net/smtp"
)

var auth smtp.Auth
var subject = "13 or Collection!!! Bon Choix pour l'achat de vos vetements\n\n"

func Send(to,body string) {
	body=Messagehtml(body)
	m := gomail.NewMessage()
    m.SetHeader("From", user_mail)
    m.SetHeader("To", to)
    m.SetHeader("Subject", subject)
    m.SetBody("text/html", body)

    // Send the email to Bob
    d := gomail.NewPlainDialer("smtp.gmail.com", 587, user_mail, password_mail)
	if err := d.DialAndSend(m); 
	err != nil {
		log.Printf("smtp error: %s", err)
	}
	
}

// import (
// 	"log"
// 	"net/smtp"
// )

// func Send(body string,to string) {

// from :=user_mail;
// pass :=password_mail;
// //to := "wilendy27@gmail.com"
// mime := "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\n\n";
// msg := "From: " + from + "\n" +
// 	"To: " + to + "\n" +
// 	"Subject: 13 or Collection!!! Bon Choix pour l'achat de vos vetements\n\n" +mime+
// 	body

// err := smtp.SendMail("smtp.gmail.com:587",
// 	smtp.PlainAuth("", from, pass, "smtp.gmail.com"),
// 	from, []string{to}, []byte(msg))

// if err != nil {
// 	log.Printf("smtp error: %s", err)
// 	return
// }
