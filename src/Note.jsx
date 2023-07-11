import React from "react";
import notes from "./notes.js";


function Note(){
    return (
        notes.map(note =>
        <div className="note">
        <h2 className="note, h1">{note.title}</h2>
        <p className="note, p">{note.content}</p>
        </div>)  
    )
};

export default Note;