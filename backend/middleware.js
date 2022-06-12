var jwt = require('jsonwebtoken');
const JWT_SECRET= "thsjwttokensecrectkey"

 const fetchuser= async( req,res,next)=>{
    //get the user using jwt token and add id to req object 
    const token = req.header("auth-token"); 
    
    if(!token){ 
        res.status(401).send({error:"please  authinticate using valid token "})
    } 
    try {
        // console.log(token);
        const data =   jwt.verify(token,JWT_SECRET); 
        console.log(data);
        req.user= data
        console.log(data.id)
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({error:"please  catch authinticate using valid token "})
    }

}
module.exports= fetchuser; 