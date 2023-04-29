import { useState } from 'react';
import { nanoid } from 'nanoid';
import { quizs } from '../components/quiz'
import React from 'react';
import { GlobalStyle } from '@/components/Wrap';
import ViewAllQuiz from '../components/viewallQuiz';

const AddQuizForm1 = ({classCode}) => {
  
  const [formQuiz, setFormQuiz] = useState({
    classCode: classCode,
    subjectName: '',
    subjectCode: '',
    link: '',
    description: ''
  });
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
      classCode: classCode,
      ...formQuiz
    };
    quizs.push(newQuiz);
    setFormQuiz({
      classCode: classCode,
      subjectName: '',
      subjectCode: '',
      link: '',
      description: ''
    });
    setShowForm4(false);
  }

  return (
    <>
      <GlobalStyle/>
      <section className='quiz quiz-small'>
        <h1> Quiz </h1>
        <div className="button-container">
          <button className="add-button" onClick={() => setShowForm4(true)}>Add Quiz</button>
          {showForm4 && (
            <div className="form-container">
              <form onSubmit={handleSubmit1} className='setup-form'>
                <div className='form-control'>
                  <label>
                    Class Code:
                    <input type="text" name="classCode" value={classCode} readOnly  />
                  </label>
                </div>
                <div className='form-control'>
                  <label>
                    Subject:
                    <input type="text" name="subjectName" value={formQuiz.subjectName} onChange={handleInputChange1}  />
                  </label>
                </div>
                <div className='form-control'>
                  <label>
                    Subject Code :
                    <input type="text" name="subjectCode" value={formQuiz.subjectCode} onChange={handleInputChange1}  />
                  </label>
                </div>
                <div className='form-control'>
                  <label>
                    Year :
                    <input type="text" name="year" value={formQuiz.year} onChange={handleInputChange1} />
                  </label>
                </div>
                <div className='form-control'>
                  <label>
                    Link :
                    <input type="url" name="link" value={formQuiz.link} onChange={handleInputChange1} />
                  </label>
                </div>
                <div className='form-control'>
                  <label>
                    Description
                    <input type="text" name="description" value={formQuiz.description} onChange={handleInputChange1} />
                  </label>
                </div>
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

export default AddQuizForm1;
