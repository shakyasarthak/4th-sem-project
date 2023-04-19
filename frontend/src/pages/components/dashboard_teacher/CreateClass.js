import React, { useState } from "react";

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

  return (
    <div>
      <h2>Create a new class</h2>
      <form>
        <label htmlFor="className">Class name:</label>
        <input type="text" id="className" value={className} onChange={handleClassNameChange} required />
        <br />
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" value={subject} onChange={handleSubjectChange} required/>
        <br />
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} required></textarea>
        <br />
        <button type="button" onClick={handleCreateClass}>
          Create Class
        </button>
      </form>
      <hr />
    </div>
  );
}

export default CreateClasses;


