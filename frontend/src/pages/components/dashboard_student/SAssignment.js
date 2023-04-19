import React, { useState } from 'react';

const SAssignment = ({ classCode, onAddAssignment }) => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [deadline, setDeadline] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAssignment = { title, file, deadline, classCode };
    onAddAssignment(newAssignment);
    setTitle('');
    setFile(null);
    setDeadline('');
  };

  return (
    <div>
      <h3>Submit Assignment</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} required />
        </label>
        <label>
          File:
          <input type="file" onChange={handleFileChange} required />
        </label>
        <label>
          Deadline:
          <input type="datetime-local" value={deadline} onChange={handleDeadlineChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SAssignment;
