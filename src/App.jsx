import { useState } from "react";
import "./App.css";
import Note from "./Note";

// {id: '', text: '', completed: boolean}

const currentNotes = [];

function App() {
  const [notes, setNotes] = useState(currentNotes);

  const [newNote, setNewNote] = useState("");

  const addNote = (text) => {
    const newNote = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setNotes([...notes, newNote]);
  };

  const toggleCompleted = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, completed: !note.completed };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <>
      <h1>Notes</h1>
      <div>
        <input
          onChange={(event) => {
            setNewNote(event.target.value);
          }}
          value={newNote}
          placeholder="notes"
        ></input>
        <button
          onClick={() => {
            addNote(newNote);
            setNewNote("");
          }}
        >
          Add{" "}
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            completed={note.completed}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
    </>
  );
}

export default App;
