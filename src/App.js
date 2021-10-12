import { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import NoteArea from './components/NoteArea'


const App = ()=>{
  const [notes, setNotes] = useState([]);

  const addNote = (newNote)=>{
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  const deleteNote = id =>{
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <NoteArea onAdd={addNote} />
      {notes.reverse().map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
