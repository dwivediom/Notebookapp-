// import React, { useContext,useState,useRef } from "react";
// import NoteContext from "../context/notes/NoteContext";




// function EditnoteModal(props) {
  
    
//     const context = useContext(NoteContext); 
//  const {editnotes ,notes}=context; 


//     const ref = useRef(null)
//     const [note, setnote] = useState({title:"", discription:"", tag:""})
  
//     const updatenotefunc=(cnote)=>{
//       ref.current.click()
//       setnote(cnote)
//       console.log(cnote)
     
     
//     }
//    props.up({updatenotefunc:updatenotefunc})

   



   
//   return (
//       <>
//       <button ref={ref} type="button" className="btn btn-primary d-none " data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>
//     <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div className="modal-dialog">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className="modal-body">
//       <form className="my-3">
//             <div className="mb-3">
//                 <label  className="form-label">
//                     Title
//                 </label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     id="title"
//                     name="etitle"
//                     onChange={OnChange}
//                     aria-describedby="emailHelp"
//                     // value={note.title}
//                 />
//                 <div id="emailHelp" className="form-text">
//                     We'll never share your email with anyone else.
//                 </div>
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">
//                     Discription
//                 </label>
//                 <input
//                     type="text"
//                     name="ediscription"
//                     className="form-control"
//                     id="discription"
//                     onChange={OnChange}
//                     // value={note.discription}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">
//                  Tag
//                 </label>
//                 <input
//                     type="text"
//                     name="etag"
//                     className="form-control"
//                     id="tag"
//                     onChange={OnChange}
//                     // value={note.tag}
//                 />
//             </div>
            
//         </form>
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" className="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
// </>
//   )
// }

// export default EditnoteModal