// import React, { useState } from 'react';

// const Assignment = ({ classCode ,onCreateAssignment}) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   // const [file, setFile] = useState("");
//   const [deadline, setDeadline] = useState("");
 

//   const handleTitleChange = (event) => {
//     event.preventDefault();
//     setTitle(event.target.value);
//   };
  
//   const handleDescriptionChange = (event) => {
//     event.preventDefault();
//     setDescription(event.target.value);
//   };
//   // const handleFileChange = (event) => {
//   //   event.preventDefault();
//   //   setFile(event.target.files[0]);
//   // };

//   const handleDeadlineChange = (event) => {
//     event.preventDefault();
//     setDeadline(event.target.value);
//   };



//   const handleAddAssignment= () => {
    
//     // Pass the new class data to the parent component
//     onCreateAssignment(title,description,deadline,classCode);
    
//     // Clear the input fields
//     setTitle("");
//     setDescription("");
//     setDeadline("");
    
//   };
  

//   return (
//     <div>
//       <h3>Assignments</h3>
//       {/* <ul>
//         {/* {assignments
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
//       </ul> */}
//       {/* Form to add a new assignment */}
//       <form >
//         <label>
//           Title:
//           <input type="text" name="title" required id="title" value={title} onChange={handleTitleChange}/>
//         </label>
//         <label>
//           Description:
//           <input type="text" name="descriptiom" required id="description" value={description} onChange={handleDescriptionChange}/>
//         </label>
//         <label>
//           Deadline:
//           <input type="datetime-local" name="deadline"id="deadline" value={deadline} onChange={handleDeadlineChange} />
//         </label>
//         <button type="button" onClick={handleAddAssignment}>Add</button>
//       </form>
//     </div>
//   );
// };

// export default Assignment;