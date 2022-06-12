const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
//Rout 1 : to fetch notes of the user
router.get("/fetchnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id }); // unable to understand this line
  res.json(notes);
});

//Rout 2 : to addnotes of the user  using POST :  api/notes/add/addnote
router.post(
  "/addnotes",
  fetchuser,
  //[
  //   body("title", " enter more tha 3 wrods ").isLength({ min: 3 }),

  //   body("discription", " discirption should be more than 10 words  ").isLength(
  //     { min: 4 }
  //   ),
  //],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { title,discription, tag } = req.body;
      const note = new Notes({
        title,
       discription,
        tag,
        user: req.user.id,
      });
      const savednotes = await note.save();
      // const notes = await Notes.find({user:req.user.id}) // unable to under stand this line
      res.json(savednotes);
    } catch (error) {
        console.log(error)
        res.error
    }
  }
);

//Rout 3 : to update notes  of the user  for given id of the notes 
//  using PUT :  api/notes/add/updatenote/:id
router.put("/updatenotes/:id", fetchuser, async(req,res)=>{ 
        try{ 
          const { title,discription , tag} = req.body; 
          //create a new note 
          const newNote = {}; 
          if(title){newNote.title= title } ; 
          if(discription){newNote.discription=discription}
          if(tag){newNote.tag=tag}
          //find the note to be updated and update it 
 
          let note =  await Notes.findOne({_id:req.params.id}); 
          console.log(note)
         console.log(note.user.id)
          if(!note){ return res.status(401).send("acess denide ")}
          if(note.user.toString() !== req.user.id ){ return res.status(401).send("acess  denide not allowd  ")}
          note = await Notes.findByIdAndUpdate(req.params.id , {$set:newNote},{new:true}); 
          
          res.json(note)
 
 
        }catch(err){ 
           console.log(err);
           res.status(400).send('internal server error')
        }


        

})
//Rout 4 : to delete notes  of the user  for given id of the notes 
//  using delete :  api/notes/add/updatenote/:id
router.delete("/deletenotes/:id", fetchuser, async(req,res)=>{ 
  try{ 
    
    //find the note to be deleted  and delete it 

    let note =  await Notes.findOne({_id:req.params.id}); 
   
    if(!note){ return res.status(401).send("not found  ")}
    if(note.user.toString() !== req.user.id ){ return res.status(401).send("acess  denide not allowd  ")}
    note = await Notes.findByIdAndDelete(req.params.id ); 
    
    res.json({"sucess":`note " ${note.title} " is deleted`})


  }catch(err){ 
     console.log(err);
     res.status(400).send('internal server error')
  }

})


module.exports = router;
