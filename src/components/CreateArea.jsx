import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleNewNote(event) {
    const { name, value } = event.target;
    setNewNote((prevNotes) => ({ ...prevNotes, [name]: value }));
  }

  function submitNote(event) {
    //  console.log(newNote);
    //  setNotes((prevNotes) => {
    //    return [...prevNotes, newNote];
    //  });

    props.onAdd(newNote);
    setNewNote({
      title: "",
      content: "",
    });
    //formの中のbuttonを押したら自動的にリフレッシュするので、それを以下で防ぐ
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleNewNote}
          value={newNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleNewNote}
          value={newNote.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
