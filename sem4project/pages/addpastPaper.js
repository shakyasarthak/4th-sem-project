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
    <section className='quiz quiz-small'>
      <h1> Pastpaper </h1>
      <div className="button-container">
        <button className="add-button" onClick={() => setShowForm(true)}>Add Pastpaper</button>
        {showForm && (
          <div className="form-container">
            <form onSubmit={handleSubmit} className='setup-form'>
              <div className='form-control'>
              <label>
                 Subject:
                <input type="text" name="subjectName" value={formpastPaper.subjectName} onChange={handleInputChange}  />
              </label></div>
              <div className='form-control'>
              <label>
                Semester:
                <input type="text" name="semester" value={formpastPaper.semester} onChange={handleInputChange}  />
              </label></div>
              <div className='form-control'>
              <label>
                Year :
                <input type="text" name="year" value={formpastPaper.year} onChange={handleInputChange} />
              </label></div>
              <div className='form-control'>
              <label>
                 Link :
                <input type="url" name="link" value={formpastPaper.link} onChange={handleInputChange} />
              </label></div>
              <button type="submit" className='submit-btn'>Add </button>
            </form>
          </div>
        )}
      </div>
      </section>
    <div className="container">
       <ViewAllPapers/>
    </div>
    </>
  );
};

export default AddpastPaperForm;