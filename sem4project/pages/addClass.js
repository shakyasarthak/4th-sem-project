import { useState } from 'react';
import { nanoid } from 'nanoid';
import { classes } from '../components/class'
import React from 'react';
import { GlobalStyle } from '@/lib/Wrap';


const AddAssignmentForm = (classCode) => {
  const [formAssignment, setFormAssignment] = useState(assignments);

  function handleInputChange1(event) {
    setFormAssignment({
      ...formAssignment,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit1(event) {
    event.preventDefault();
   
    const newAssignment = {
      id: nanoid(),
      classCode:classCode,
      ...formAssignment
    };
    assignments.push(newAssignment);
    setFormAssignment({
      classCode : '',
      subjectName: '',
      subjectCode : '',
      link: '',
      deadline:'',
      description:''
    });
    setShowForm(false);
  }

  return (
    <>
    <GlobalStyle/>
    <section className='quiz quiz-small'>
      <h1> Pastpaper </h1>
      <div className="button-container">
          <div className="form-container">
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
          </div>
      </div>
      </section>
    {/* <div className="container">
       <ViewAllPapers/>
    </div> */}
    </>
  );
};

export default AddAssignmentForm;