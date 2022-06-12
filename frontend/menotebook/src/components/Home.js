import React from "react";
import Addnoteform from "./Addnoteform";

import NoteBoxContainer from "./NoteBoxContainer";



function Home() {

 
  return (
    <div className="container">
      <br />
      <h3>Add a note </h3>
       <Addnoteform/>
      
     
      <h3>your notes </h3>
      <NoteBoxContainer/>

    </div>
  );
}

export default Home;
