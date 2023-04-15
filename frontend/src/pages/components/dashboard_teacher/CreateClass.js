import React, { useState } from "react";
import Assignment from "./Assignment";
import Quiz from "./Quiz";

function CreateClasses(props) {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [classCode, setClassCode] = useState("");
  const [assignments, setAssignments] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  const handleClassNameChange = (event) => {
    setClassName(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCreateClass = () => {
    // Generate a unique class code
    const newClassCode = Math.random().toString(36).substr(2, 8);

    // Create a new class object with the entered data and generated class code
    const newClass = {
      className: className,
      subject: subject,
      description: description,
      classCode: newClassCode,
      assignments: assignments,
      quizzes: quizzes
    };

    // Pass the new class data to the parent component
    props.onCreateClass(newClass);

    // Clear the input fields
    setClassName("");
    setSubject("");
    setDescription("");
    setClassCode("");
    setAssignments([]);
    setQuizzes([]);
  };

  // const handleAssignmentUpload = (newAssignment) => {
  //   setAssignments([...assignments, newAssignment]);
  // };

  // const handleQuizSave = (newQuiz) => {
  //   setQuizzes([...quizzes, newQuiz]);
  // };

  return (
    <div>
      <h2>Create a new class</h2>
      <form>
        <label htmlFor="className">Class name:</label>
        <input type="text" id="className" value={className} onChange={handleClassNameChange} />
        <br />
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" value={subject} onChange={handleSubjectChange} />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange}></textarea>
        <br />
        <button type="button" onClick={handleCreateClass}>
          Create
        </button>
      </form>
      <hr />
      {/* <Assignment onUpload={handleAssignmentUpload} />
      <hr />
      <Quiz onSave={handleQuizSave} /> */}
    </div>
  );
}

export default CreateClasses;


// import React, { useState } from "react";

// function CreateClass(props) {
//   const [className, setClassName] = useState("");
//   const [subject, setSubject] = useState("");
//   const [description, setDescription] = useState("");
//   const [classCode, setClassCode] = useState("");

//   const handleCreateClass = () => {
//     // Generate a unique 6-digit alphanumeric class code
//     const generateClassCode = () => {
//       const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
//       let result = "";
//       for (let i = 0; i < 6; i++) {
//         result += chars[Math.floor(Math.random() * chars.length)];
//       }
//       return result.toUpperCase();
//     };

//     const newClass = {
//       className: className,
//       subject: subject,
//       description: description,
//       classCode: generateClassCode()
//     };

//     // Pass the new class data to the parent component
//     props.onCreateClass(newClass);

//     // Clear the input fields
//     setClassName("");
//     setSubject("");
//     setDescription("");
//     setClassCode("");
//   };

//   return (
//     <div>
//       <h2>Create a new class</h2>
//       <form>
//         <label htmlFor="className">Class name:</label>
//         <input
//           type="text"
//           id="className"
//           value={className}
//           onChange={(event) => setClassName(event.target.value)}
//         />
//         <br />
//         <label htmlFor="subject">Subject:</label>
//         <input
//           type="text"
//           id="subject"
//           value={subject}
//           onChange={(event) => setSubject(event.target.value)}
//         />
//         <br />
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//         ></textarea>
//         <br />
//         <button type="button" onClick={handleCreateClass}>
//           Create Class
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateClass;
