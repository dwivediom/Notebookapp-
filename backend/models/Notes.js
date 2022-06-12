const mongoose = require ("mongoose");
const {Schema}=mongoose;

const noteSchema = new Schema({ 
    //to
    user: {  // this is to connect with collection user
        type:mongoose.Schema.Types.ObjectId, 
        ref:"user"
    },
    title: { 
        type : String  
        
    },
    discription: { 
        type : String 
      
        
    }, 
   tag : { 
        type : String 
       
    }, 
    date: { 
        type: Date,
        default: Date.now
    }

}); 
module.exports= mongoose.model("notes",noteSchema)