import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [noteToUpdate, setNoteToUpdate] = useState(null)

  useEffect(() => {
    // Fetch all notes on component mount
    fetchNotes()
  }, [])

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/notes')
      setNotes(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const createNote = async () => {
    try {
      const response = await axios.post('/api/notes', { title, content })
      setNotes([...notes, response.data])
      setTitle('')
      setContent('')
    } catch (error) {
      console.error(error)
    }
  }

  const updateNote = async () => {
    try {
      const response = await axios.put(`/api/notes/${noteToUpdate.id}`, { title, content })
      const updatedNotes = notes.map(note => {
        if (note.id === response.data.id) {
          return response.data
        } else {
          return note
        }
      })
      setNotes(updatedNotes)
      setTitle('')
      setContent('')
      setNoteToUpdate(null)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(`/api/notes/${id}`)
      const updatedNotes = notes.filter(note => note.id !== response.data.id)
      setNotes(updatedNotes)
    } catch (error) {
      console.error(error)
    }
  }

  const handleEdit = (note) => {
    setTitle(note.title)
    setContent(note.content || '')
    setNoteToUpdate(note)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (noteToUpdate) {
      updateNote()
    } else {
      createNote()
    }
  }

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} placeholder="Title" required />
        <textarea value={content} onChange={event => setContent(event.target.value)} placeholder="Content"></textarea>
        <button type="submit">{noteToUpdate ? 'Update' : 'Create'}</button>
      </form>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => handleEdit(note)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
