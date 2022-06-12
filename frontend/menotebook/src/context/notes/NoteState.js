import NoteContext from "./NoteContext";

import { useState } from "react";

const NoteState =(props)=>{ 
    const host = "http://localhost:5000"; 

  const noteinitial =[]
    

const [notes , setnotes]=useState(noteinitial)


// get all notes 


//logic to fetch a note 
const fetchNotes= async ()=>{

  let url = `${host}/api/notes/fetchnotes`
  const response = await fetch(url , { 
    method: 'GET',
    headers: { 
         'Content-Type': "application/json",
         'auth-token':  localStorage.getItem("token")
         
    },
    
   

  }) 
 let json =await  response.json()
  setnotes(json)


 
 
  
  }



//add a note 



//logic to add a note 
const addnotes= async (id ,title , discription, tag)=>{
   let stitle= title.toString(); 
   let sdiscription = discription.toString() 
   let stag = tag.toString()
  
  
 
  let url = `http://localhost:5000/api/notes/addnotes`
  const response = await fetch(url , { 
    method: 'POST',
    headers: { 
         'Content-type': "application/json",
         'auth-token': localStorage.getItem("token")
         
    },
    // body:JSON.stringify({stitle, sdiscription , stag})
     body:JSON.stringify({
       title:stitle, 
       discription:sdiscription, 
       tag:stag
     })

  
   

  }) 
 
  const json =await  response.json()
 


  console.log(json._id);
 
 let note =   {
      "_id": json._id,
      "user": "625421c5aff3d37276a92d2c",
      "title": title,
      "discription": discription,
      "tag": tag,
      "date": "2022-04-11T13:37:35.546Z",
      "__v": 0
    }
    setnotes(notes.concat(note))
  }





//delete a note 


//logic to delete a note 
const deletenote= async(id)=>{ 
  

    let url = `http://localhost:5000/api/notes/deletenotes/${id}`
    const response = await fetch(url , { 
      method: 'DELETE',
      headers: { 
           'Content-Type': "application/json",
           'auth-token':  localStorage.getItem("token")
           
      },
      
     
  
    }) 
      const data = await response.json()
       console.log(data);
 let newnotes =  notes.filter((note)=>note._id !==id )

 setnotes(newnotes)


}

//edit a note 
    
//logic to edit a note  
const editnotes=async(id, title,discription,tag)=>{ 
    
  console.log( "values=" ,id,title,discription,tag)
  
  //fetching data from api 
   let url = `http://localhost:5000/api/notes/updatenotes/${id}`
  const response = await fetch(url , { 
    
    method: 'PUT',
    headers: { 
         "Content-type": "application/json",
         'auth-token':  localStorage.getItem("token")
         
    },
    
    body:JSON.stringify({title,discription,tag}),
   
   

  }) 
  const json = await response.json()
  console.log(json)
  const newnotes = JSON.parse(JSON.stringify(notes)); 

   //logic to edit in clint 
  for (let index = 0; index < notes.length; index++) {
    const element = newnotes[index];
    if(element._id===id){ 
       console.log("notstate editnotes clicked ");
       newnotes[index].title=title;
       newnotes[index].discription=discription; 
       newnotes[index].tag= tag;  
       break ; 
    }
   

  }
console.log(notes)
 setnotes(newnotes)
}


    return(
        <NoteContext.Provider value={{notes,addnotes,deletenote,editnotes, fetchNotes}}>

            {props.children}

        </NoteContext.Provider>
    )
}

export default NoteState