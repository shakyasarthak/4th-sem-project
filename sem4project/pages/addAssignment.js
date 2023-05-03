import { useState } from 'react';
import { nanoid } from 'nanoid';
import { assignments } from '../components/assignment'
import React from 'react';
import { GlobalStyle } from '@/components/Wrap';
import ViewAllAssigns from '../components/viewallAssignment';

const AddAssignmentForm = () => {
  const [formAssignment, setFormAssignment] = useState(assignments);

  const [showForm, setShowForm] = useState(false);

  function handleInputChange(event) {
    setFormAssignment({
      ...formAssignment,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
   
    const newAssignment = {
      id: nanoid(),
      ...formAssignment
    };
    assignments.push(newAssignment);
    setFormAssignment({
      classCode:'',
      subjectName: '',
      subjectCode: '',
      year : '',
      link: '',
      deadline:''
    });
    setShowForm(false);
  }

  return (
    <>
    <GlobalStyle/>
    <section className='quiz quiz-small'>
      <h1> Assignment </h1>
      <div className="button-container">
        <button className="add-button" onClick={() => setShowForm(true)}>Add Assignment</button>
        {showForm && (
          <div className="form-container">
            <form onSubmit={handleSubmit} className='setup-form'>
            <div className='form-control'>
              <label>
                 Class Code:
                <input type="text" name="classCode" value={formAssignment.classCode} onChange={handleInputChange}  />
              </label></div>
              <div className='form-control'>
              <label>
                 Subject:
                <input type="text" name="subjectName" value={formAssignment.subjectName} onChange={handleInputChange}  />
              </label></div>
              <div className='form-control'>
              <label>
                Subject Code :
                <input type="text" name="subjectCode" value={formAssignment.subjectCode} onChange={handleInputChange}  />
              </label></div>
              <div className='form-control'>
              <label>
                Year :
                <input type="text" name="year" value={formAssignment.year} onChange={handleInputChange} />
              </label></div>
              <div className='form-control'>
              <label>
                 Link :
                <input type="url" name="link" value={formAssignment.link} onChange={handleInputChange} />
              </label></div>
              <div className='form-control'>
              <label>
                 Description
                <input type="text" name="description" value={formAssignment.description} onChange={handleInputChange} />
              </label></div>
              <button type="submit" className='submit-btn'>Add </button>
            </form>
          </div>
        )}
      </div>
      </section>
    <div className="container">
       <ViewAllAssigns/>
    </div>
    </>
  );
};

export default AddAssignmentForm;

