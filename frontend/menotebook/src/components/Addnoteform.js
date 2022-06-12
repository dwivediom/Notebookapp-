import React, { useContext,useState } from "react";
import NoteContext from "../context/notes/NoteContext";

function Addnoteform() {
 const context = useContext(NoteContext); 
 const {addnotes}=context; 

 const [note, setnote] = useState({title:"", discription:"", tag:"default"})
 const handleOnClick =(e)=>{ 
     e.preventDefault(); 
     
const {_id ,title , discription, tag}=note
      
   addnotes(_id ,title , discription, tag)


   console.log(title.toString() , discription.toString())
   
 }

 const handleOnChange=(e)=>{
     
setnote({...note ,[e.target.name]:[e.target.value]}) //unable to understand this line 

}

    return (
        <form className="my-3">
            <div className="mb-3">
                <label  className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={handleOnChange}
                    aria-describedby="emailHelp"
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
                    name="discription"
                    className="form-control"
                    id="discription"
                    onChange={handleOnChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                 Tag
                </label>
                <input
                    type="text"
                    name="tag"
                    className="form-control"
                    id="tag"
                    onChange={handleOnChange}
                />
            </div>
            <button type="submit" className="btn btn-primary"  onClick={handleOnClick}>
                Add note
            </button>
        </form>
    );
}

export default Addnoteform;
