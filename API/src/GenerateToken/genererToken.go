 package GenerateToken

 import(
	 "crypto/rand"
	 "fmt"
 )

 func TokenGenerator() string {
	 b:=make([] byte,30)
	 rand.Read(b)
	 return fmt.Sprintf("%x",b)
 }