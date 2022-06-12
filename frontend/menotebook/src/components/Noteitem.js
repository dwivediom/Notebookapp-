import "../App.css"
import React, { useContext } from "react";
// import NoteState from "../context/notes/NoteState"
import NoteContext from "../context/notes/NoteContext";



function Noteitem(props) {


 
  

const {id , title, discription, tag ,note,updatenote }=props
    const context = useContext(NoteContext); 
  
    const {deletenote,editnotes}=context;
 const handleonclick=()=>{ 
    deletenote(id)
    console.log("on clikc cliked ");
 } 

//  const handleOnClickEdit=()=>{ 
//    editnotes(id,title,discription,tag)
   
   
//    console.log("on clikc edit cliked ");
//  } 
  return (
    <>
    
    <div className='col-md-4 md-3'> 
        <div className="card col-md-3 md-3 my-3 bgcolor" style={{width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{tag}</h6>
    <p className="card-text">{discription}</p>
    <a href="#!" className="card-link"><i onClick={handleonclick} className ="fa-solid fa-trash-can"></i></a>
    <a href="#!" className="card-link"><i onClick={()=>{updatenote(note)}} className="fa-solid fa-file-pen"></i></a>
  </div>
</div>
    </div>
    </>
  )
}

export default Noteitem