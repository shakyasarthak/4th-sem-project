// import React, { useState } from 'react';

// const Assignments = ({ classCode, onSave }) => {
//   const [assignments, setAssignments] = useState([]);

//   const handleAddAssignment = (event) => {
//     event.preventDefault();
//     const title = event.target.elements.title.value;
//     const file = event.target.elements.file.files[0];
//     const deadline = event.target.elements.deadline.value;
//     const newAssignment = { title, file, deadline, classCode };
//     setAssignments([...assignments, newAssignment]);
//     onSave(newAssignment); // Pass the new assignment to the parent component
//     event.target.reset();
//   };

//   return (
//     <div>
//       <h3>Assignments</h3>
//       <ul>
//         {/* Display the list of assignments */}
//         {assignments
//           .filter((assignment) => assignment.classCode === classCode)
//           .map((assignment, index) => (
//             <li key={index}>
//               {assignment.title}
//               {assignment.file && (
//                 <a href={URL.createObjectURL(assignment.file)}>Download</a>
//               )}
//               {assignment.deadline && (
//                 <span>Deadline: {assignment.deadline}</span>
//               )}
//             </li>
//           ))}
//       </ul>
//       {/* Form to add a new assignment */}
//       <form onSubmit={handleAddAssignment}>
//         <label>
//           Title:
//           <input type="text" name="title" required />
//         </label>
//         <label>
//           File:
//           <input type="file" name="file" required />
//         </label>
//         <label>
//           Deadline:
//           <input type="datetime-local" name="deadline" />
//         </label>
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default Assignments;
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
