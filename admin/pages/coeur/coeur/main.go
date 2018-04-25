package main

import (
    "log"
    "net/http"

    // Note this is my path according to my GOPATH, chage it according to yours.
    "go_folder/controllers"
    "runtime"
    "path"
)


func main() {
    http.Handle("/", http.FileServer(http.Dir("./public")))
    http.HandleFunc("/upload", controllers.UploadFile)
    log.Println("Running")
   
    http.ListenAndServe(":3030", nil)
}

func getPath() {
    _, filename, _, _ := runtime.Caller(1)

    save := path.Dir(filename)
    log.Println(save)
}
