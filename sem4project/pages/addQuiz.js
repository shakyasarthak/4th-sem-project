import { useState } from 'react';
import { nanoid } from 'nanoid';
import { quizs } from '../components/quiz'
import React from 'react';
import { GlobalStyle } from '@/components/Wrap';
// import ViewAllPapers from './viewallQuiz';
import ViewAllQuiz from '../components/viewallQuiz';

const AddQuizForm = () => {
  const [formQuiz, setFormQuiz] = useState(quizs);
  const [showForm4, setShowForm4] = useState(false);

  function handleInputChange1(event) {
    setFormQuiz({
      ...formQuiz,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit1(event) {
    event.preventDefault();
   
    const newQuiz = {
      id: nanoid(),
      // classCode:classCode,
      ...formQuiz
    };
    quizs.push(newQuiz);
    setFormQuiz({
      classCode : '',
      subjectName: '',
      subjectCode : '',
      link: '',
      // deadline:'',
      description:''
    });
    setShowForm4(false);
  }

  return (
    <>
    <GlobalStyle/>
    <section className='quiz quiz-small'>
      <h1> Assignment </h1>
      <div className="button-container">
        <button className="add-button" onClick={() => setShowForm4(true)}>Add Assignment</button>
        {showForm4 && (
          <div className="form-container">
            <form onSubmit={handleSubmit1} className='setup-form'>
            <div className='form-control'>
              <label>
                 Class Code:
                <input type="text" name="classCode" value={formQuiz.classCode} onChange={handleInputChange1}  />
              </label></div>
              <div className='form-control'>
              <label>
                 Subject:
                <input type="text" name="subjectName" value={formQuiz.subjectName} onChange={handleInputChange1}  />
              </label></div>
              <div className='form-control'>
              <label>
                Subject Code :
                <input type="text" name="subjectCode" value={formQuiz.subjectCode} onChange={handleInputChange1}  />
              </label></div>
              <div className='form-control'>
              <label>
                Year :
                <input type="text" name="year" value={formQuiz.year} onChange={handleInputChange1} />
              </label></div>
              <div className='form-control'>
              <label>
                 Link :
                <input type="url" name="link" value={formQuiz.link} onChange={handleInputChange1} />
              </label></div>
              <div className='form-control'>
              <label>
                 Description
                <input type="text" name="description" value={formQuiz.description} onChange={handleInputChange1} />
              </label></div>
              <button type="submit" className='submit-btn'>Add </button>
            </form>
          </div>
        )}
      </div>
      </section>
    <div className="container">
       <ViewAllQuiz/>
    </div>
    </>
  );
};

export default AddQuizForm;