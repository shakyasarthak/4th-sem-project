
import React, { useState } from 'react';

const Assignment = ({ classCode }) => {
  const [assignments, setAssignments] = useState([]);

  const handleAddAssignment = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const file = event.target.elements.file.files[0];
    const deadline = event.target.elements.deadline.value;
    const newAssignment = { title, file, deadline, classCode };
    setAssignments([...assignments, newAssignment]);
    event.target.reset();
  };

  return (
    <div>
      <h3>Assignments</h3>
      <ul>
        {/* Display the list of assignments */}
        {assignments
          .filter((assignment) => assignment.classCode === classCode)
          .map((assignment, index) => (
            <li key={index}>
              {assignment.title}
              {assignment.file && (
                <a href={URL.createObjectURL(assignment.file)}>Download</a>
              )}
              {assignment.deadline && (
                <span>Deadline: {assignment.deadline}</span>
              )}
            </li>
          ))}
      </ul>
      {/* Form to add a new assignment */}
      <form onSubmit={handleAddAssignment}>
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <label>
          File:
          <input type="file" name="file" required />
        </label>
        <label>
          Deadline:
          <input type="datetime-local" name="deadline" />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Assignment;
