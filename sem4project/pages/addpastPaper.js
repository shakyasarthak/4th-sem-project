import { useState } from 'react';
import { nanoid } from 'nanoid';
import { pastpapers } from '../components/pastpaper'
import React from 'react';
import { GlobalStyle } from '@/lib/Wrap';
import ViewAllPapers from './viewallpastPaper';

const AddpastPaperForm = () => {
  const [formpastPaper, setFormpastPaper] = useState(pastpapers);

  const [showForm, setShowForm] = useState(false);

  function handleInputChange(event) {
    setFormpastPaper({
      ...formpastPaper,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
   
    const newpastPaper = {
      id: nanoid(),
      ...formpastPaper
    };
    pastpapers.push(newpastPaper);
    setFormpastPaper({
      subjectName: '',
      semester: '',
      year : '',
      link: ''
    });
    setShowForm(false);
  }

  return (
    <>
    <GlobalStyle/>
    <div className="container">
      <h1> All Classes </h1>
      <div className="button-container">
        <button className="add-button" onClick={() => setShowForm(true)}>Add Class</button>
        {showForm && (
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label>
                 Subject:
                <input type="text" name="subjectName" value={formpastPaper.subjectName} onChange={handleInputChange} />
              </label>
              <label>
                Semester:
                <input type="text" name="semester" value={formpastPaper.semester} onChange={handleInputChange} />
              </label>
              <label>
                Year :
                <input type="text" name="year" value={formpastPaper.year} onChange={handleInputChange} />
              </label>
              <label>
                 Link :
                <input type="url" name="link" value={formpastPaper.link} onChange={handleInputChange} />
              </label>
              <button type="submit">Add Class</button>
            </form>
          </div>
        )}
      </div>
       <ViewAllPapers/>
    </div>
    </>
  );
};

export default AddpastPaperForm;