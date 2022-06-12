const { Router } = require("express");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const express = require("express"); 
const fetchuser = require("../middleware")

const { default: mongoose } = require("mongoose");
const router = express.Router()
const User = require("../models/User");    
const { ResultWithContext } = require("express-validator/src/chain");
const JWT_SECRET= "thsjwttokensecrectkey"
//create a user using :POST "/api/auth" rout 1 

router.post( "/createuser",[
body('email'," invalid email").isEmail(),

body('password',"enter password more than 3 words ").isLength({ min: 3 }),
],
async(req,res)=>{ 
  let success = true
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
       let user =await User.findOne({email:req.body.email})
       if (user) {
           success=false
           return res.status(400).json({ success, error: "sorry a user with this email already exists"})
        }

        //hasing the paswsword 
        let spassword= req.body.password.toString();
        const salt = await bcrypt.genSalt(3)
        const secpas = await bcrypt.hash(spassword, salt )

        //creating new user 
       user =await  User.create({
            name : req.body.name.toString(),
            email: req.body.email.toString(),
            password:secpas
          })
          const data= { 
              id:user.id 
          }
         const jwtauthentication = jwt.sign(data, JWT_SECRET); 
         res.json({ success ,jwtauthentication})



         
    }catch(err){ 
        console.log(err);
        res.status(500).json(`some erro occourd in auth ${err} `)
    }
    


   
    console.log(req.body);
  
})

//vaifing a user for login using POST   : login not required ROUT 2
router.post( "/login",[
 body('email'," invalid email").isEmail(),

 body('password'," password can not be empty").exists(), ],

 async(req,res)=>{ 
   let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
      return res.status(400).json({ errors: errors.array() });
    }
    let { email , password }= req.body; 
    try {
        let user = await User.findOne({ email });
        if (!user) {
          success = false
          return res.status(400).json({ success, error: "Please try to login with correct email" });
        }
          console.log("chekpoin 3 pass" ,  user.password)
           password= password.toString()
        let passwordCompare = await  bcrypt.compare(password, user.password);

        if (!passwordCompare) {
          success = false
          return res.status(400).json({ success, error:  " incorect password " });
        }

        const data= { 
            id:user.id 
        }
        success = true
       const jwtauthentication = jwt.sign(data, JWT_SECRET); 
       res.json({ success,jwtauthentication})

    }catch(err){ 
    console.log(err);
    success=false
    res.status(500).json({ success, error:`some erro occourd in auth ${err} `})
       }
})


//ROUT:3   get data of logined user ; require login 

router.post( "/getuser",fetchuser,async (req,res)=>{ 
    console.log(req.user.id)
try {
   userId = req.user.id; 
    // console.log(userid);
const user= await User.findById(userId).select("-password")
res.send(user);
} catch (error) {
    console.log(error);
    res.status(500).send("internal server error ")
    
}
})

module.exports = router; 