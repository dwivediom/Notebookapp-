const mongoose = require("mongoose");

const mongodbURI = "mongodb://localhost:27017/notebook ";

const conntectTomongo =()=>{ mongoose.connect(mongodbURI).then(()=>{ 
    console.log("database connected ");
}).catch((err)=>{
  console.log(err)
});
} ; 

module.exports = conntectTomongo; 