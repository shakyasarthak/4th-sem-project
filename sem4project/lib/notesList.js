import AddNote from "./addNote";
import Note from './note';
import styled from "styled-components";
import { GlobalStyle } from "./Wrap";

const NotesList = ({notes,handleAddNote,handleDeleteNote}) => {

  
   return(
    <>
    <GlobalStyle/>
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote}/>
        {notes?.map((note)=>(
        <Note
         key={note.id}
          id={note.id} 
         text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          />))} 
            
    </div>
    </>
   )
}
export default NotesList;