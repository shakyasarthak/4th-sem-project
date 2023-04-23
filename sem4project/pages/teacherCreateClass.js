import React, { useState } from "react";

function CreateClass({onCreateClass}) {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
 

  const handleClassNameChange = (event) => {
    event.preventDefault();
    setClassName(event.target.value);
  };
  const handleSubjectChange = (event) => {
    event.preventDefault();
    setSubject(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const handleCreateClass = () => {
    // Generate a unique class code
     const classCode = Math.random().toString(36).substr(2, 8);
      
    // Pass the new class data to the parent component
    onCreateClass(className,subject,description,classCode);
    
    // Clear the input fields
    setClassName("");
    setSubject("");
    setDescription("");
  };

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
        <input type="text" id ="description" value={description} onChange={handleDescriptionChange}></input>
        <br />
        <button type="button" onClick={handleCreateClass}>
          Create
        </button>
      </form>
      <hr />
    </div>
  );
}

export default CreateClass;