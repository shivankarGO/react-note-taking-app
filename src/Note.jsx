import React, { useEffect } from "react";

function Note({ id, text, completed, toggleCompleted }) {
  useEffect(() => {
    console.log(" note created", id);
  }, []);

  return (
    <div
      key={id}
      style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
    >
      <div>{text}</div>
      <button
        onClick={() => {
          toggleCompleted(id);
        }}
      >
        {completed ? "Mark Not Complete" : "Mark Complete"}
      </button>
      <button>Delete</button>
    </div>
  );
}

export default Note;
