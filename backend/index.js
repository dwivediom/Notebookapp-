const conntectTomongo = require ( "./db");
const express = require ( "express");
var cors = require('cors')
var app = express()
 
app.use(cors())
 



const port= 5000
conntectTomongo()




app.use(express.json())

app.use("/api/auth" , require("./routs/auth"));
app.use("/api/notes" , require("./routs/notes"))

// app.get("/",(req,res)=>{ 
//  res.send("hellow om ")
// });






app.listen(port , ()=>{ 
    console.log(`express is connected ${port}` );
})

