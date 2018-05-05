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

 func CodeGenerator() string {
	b:=make([] byte,2)
	rand.Read(b)
	return fmt.Sprintf("%x",b)
}