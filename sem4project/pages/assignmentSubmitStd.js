// import x from '/src/styles/Navbar.module.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import as from '/styles/AssignmentSubmit.module.css';
import { useState } from 'react'

export default function Assignment() {
  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Only PUT PDF OR DOCX FILES')
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <div>
      <h1>Assignment Submission</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="file">Select a file:</label>
          <input
            type="file"
            id="file"
            class={as.file_upload}   
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileChange}
            placeholder="Select a file"
            
          />
        </div>
        <button type="submit">POST NOW</button>
      </form>
    </div>
  )
}
