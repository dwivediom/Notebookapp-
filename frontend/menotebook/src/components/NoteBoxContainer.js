import React from 'react'
import { useContext, useState, useEffect ,useRef} from "react";
import { useNavigate } from 'react-router-dom';     

import NoteContext from "../context/notes/NoteContext";

import Noteitem from "./Noteitem";

function NoteBoxContainer() {
  const navigate = useNavigate();
 
    let Context = useContext(NoteContext);
    
    const {notes ,fetchNotes,editnotes}=Context; 
    useEffect(() => {
      if(localStorage.getItem("token")){
        fetchNotes();
       

      }else{
        navigate("/login")
      }
    
    

     
    }, [])
  
   
 


    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setnote] = useState({eid:"" ,etitle:"", ediscription:"", etag:""})
  
    const updatenote=(cnote)=>{
      ref.current.click()
        
     
       
       console.log(cnote);
       setnote({ eid:cnote._id,etitle:cnote.title, ediscription:cnote.discription, etag:cnote.tag})
     
     
     
    }
   
    const handleOnClick =(e)=>{ 
      refClose.current.click()
      e.preventDefault(); 
      editnotes(note.eid,note.etitle.toString(),note.ediscription.toString(),note.etag.toString())
      console.log("note id  ", note.eid )
    
  }
    const OnChange=(e)=>{
     
      setnote({...note ,[e.target.name]:[e.target.value]}) 
      //unable to understand this line 
     
      }

   
  
  
  return (
    <>
     <>
      <button ref={ref} type="button" className="btn btn-primary d-none " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className="my-3">
            <div className="mb-3">
                <label  className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="etitle"
                    onChange={OnChange}
                    aria-describedby="emailHelp"
                    value={note.etitle}
                />
                <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Discription
                </label>
                <input
                    type="text"
                    name="ediscription"
                    className="form-control"
                    id="discription"
                    onChange={OnChange}
                    value={note.ediscription}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                 Tag
                </label>
                <input
                    type="text"
                    name="etag"
                    className="form-control"
                    id="tag"
                    onChange={OnChange}
                    value={note.etag}
                />
            </div>
            
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleOnClick} className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</>
    <div className="container row "> 
        { 
        notes.map((notes)=>{ 
         return <Noteitem key={notes._id} updatenote={updatenote}  note={notes} id={notes._id} title= {notes.title} discription={notes.discription}  tag={notes.tag}/>

      
        })
        }
       </div>
       </>
  )
}

export default NoteBoxContainer