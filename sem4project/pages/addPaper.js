//for admin

import { useState } from 'react';
import { nanoid } from 'nanoid';

import React from 'react';
// import '../styles/addpastPapers.module.css'
import { pastpaper ,addpastPapers} from '@/components/Pastpaper.js';
import ViewAllPapers from './viewallpastPaper';
import { GlobalStyle } from '@/lib/Wrap';

const AddpastPapersForm = () => {
  const [formpastPapers, setFormpastPapers] = useState(pastpaper);

  const [showForm, setShowForm] = useState(false);

  function handleInputChange(event) {
    setFormpastPapers({
      ...formpastPapers,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
   
    const newpastPapers = {
      id: nanoid(),
      ...formpastPapers
    };
    pastpaper.push(newpastPapers);
    setFormpastPapers({
      subjectName: '',
        semester: '',
        year: '',
        link: '',
    });
    setShowForm(false);
  }

  return (
    <>
    <GlobalStyle/>
    <div className="container">
      <h1> PastPapers</h1>
      <div className="button-container">
        <button className="add-button" onClick={() => setShowForm(true)}>Add Paper</button>
        {showForm && (
          <div className="form-container">
            <form onSubmit={handleSubmit} >
              <label>
                Subject Name : 
                <input type="text" name="subjectName" value={formpastPapers.subjectName} onChange={handleInputChange} required />
              </label>
              <label>
                Semester :
                <input type="text" name="semester" value={formpastPapers.semester} onChange={handleInputChange} required/>
              </label>
              <label>
                Year : 
                <input type="text" name="year" value={formpastPapers.year} onChange={handleInputChange} required/>
              </label>
              <label>
                Link :
                <input type="url" name="link" value={formpastPapers.link} onChange={handleInputChange} required/>
              </label>
              <button type="submit">Add </button>
            </form>
          </div>
        )}
      </div>
      <ViewAllPapers/>
    </div>
    </>
  );
};

export default AddpastPapersForm;