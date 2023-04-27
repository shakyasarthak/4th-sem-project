import { useState } from 'react';
import { nanoid } from 'nanoid';
import { quizs } from '../components/quiz'
import React from 'react';
import { GlobalStyle } from '@/lib/Wrap';
import ViewAllPapers from './viewallQuiz';

const AddQuizForm = (classCode) => {
  const [formQuiz, setFormQuiz] = useState(quizs);

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
      classCode:classCode,
      ...formQuiz
    };
    quizs.push(newQuiz);
    setFormQuiz({
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
      <h1> Quiz</h1>
      <div className="button-container">
          <div className="form-container">
    <form onSubmit={handleSubmit1}>
      <div>
        <label htmlFor="classCode">Class Code:</label>
        <input
          type="text"
          id="classCode"
          value={formQuiz.classCode}
          onChange={handleInputChange1}
        />
      </div>
      <div>
        <label htmlFor="subjectName">Subject Name:</label>
        <input
          type="text"
          id="subjectName"
          value={formQuiz.subjectName}
          onChange={handleInputChange1}
        />
      </div>
      <div>
        <label htmlFor="subjectCode">Subject Code:</label>
        <input
          type="text"
          id="subjectCode"
          value={formQuiz.subjectCode}
          onChange={handleInputChange1}
        />
      </div>
      <div>
        <label htmlFor="link">Link:</label>
        <input
          type="text"
          id="link"
          value={formQuiz.link}
          onChange={handleInputChange1}
        />
      </div>
      <div>
        <label htmlFor="deadline">Deadline:</label>
        <input
          type="date"
          id="deadline"
          value={formQuiz.deadline}
          onChange={handleInputChange1}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={formQuiz.description}
          onChange={handleInputChange1}
        />
      </div>
      <button type="submit">Add Quiz</button>
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

export default AddQuizForm;