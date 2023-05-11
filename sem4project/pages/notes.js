import { useState, useEffect } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
// import {AiFillEdit} from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { GlobalStyle } from "@/components/Wrap";
import {getSession} from "next-auth/react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noteToUpdate, setNoteToUpdate] = useState(null);

  useEffect(() => {
    // Fetch all notes on component mount
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const session = await getSession()
      const response = await axios.get("/api/notes?email=" + session.user.email);
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createNote = async () => {
    console.log("test")
    try {
      const session = await getSession()
      const response = await axios.post("/api/notes", { title, content, email: session.user.email });
      setNotes([...notes, response.data]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  const updateNote = async () => {
    try {
      const response = await axios.put(`/api/notes/${noteToUpdate.id}`, {
        title,
        content,
      });
      const updatedNotes = notes.map((note) => {
        if (note.id === response.data.id) {
          return response.data;
        } else {
          return note;
        }
      });
      setNotes(updatedNotes);
      setTitle("");
      setContent("");
      setNoteToUpdate(null);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(`/api/notes/${id}`);
      const updatedNotes = notes.filter((note) => note.id !== response.data.id);
      setNotes(updatedNotes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content || "");
    setNoteToUpdate(note);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (noteToUpdate) {
      updateNote();
    } else {
      createNote();
    }
  };

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <h1>Notes</h1>
        <div className="notes-list">
          <div className="note new">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Title"
                required
              />
              <br />
              <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Type to add content..."
              ></textarea>
              <div className="note-footer">
              <button type="submit" className="save">
                {noteToUpdate ? "Update" : "Create"}
              </button>
              </div>
            </form>
          </div>

          {notes.map((note) => (
            <div key={note.id} className="note">
              <h2>{note.title}</h2>
              <p>{note.content}</p>

              <div className="note-footer">
                {/* <button onClick={() => handleEdit(note)}>Edit</button> */}
                <BiEdit
                  onClick={() => handleEdit(note)}
                  className="edit-icon"
                  size="1.1em"
                />
                {/* <button onClick={() => deleteNote(note.id)}>Delete</button> */}
                <MdDeleteForever
                  onClick={() => deleteNote(note.id)}
                  className="delete-icon"
                  size="1.3em"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
