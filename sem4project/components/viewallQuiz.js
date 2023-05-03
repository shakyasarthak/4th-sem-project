import React from 'react';
import { quizs } from './quiz';
// import  {BsDownload} from "react-icons"
import { GlobalStyle } from '@/components/Wrap';

const ViewAllQuiz = () => {
  return (
    <>
    <GlobalStyle/>
    <div className='container'>
      <h1>All Classes</h1>
      <div className='notes-list'>
      {quizs.map((quiz1) => (
        <div key={quiz1.id} className='note' >
          <h2>{quiz1.subjectCode} - {quiz1.subjectName} </h2>
          <h3>ClassCode : {quiz1.classCode}</h3>
          <p>{quiz1.description}    Link: <a href={quiz1.link}>{quiz1.link} </a></p>
        </div>
      ))}
      </div>
    </div>
    </>
  );
};

export default ViewAllQuiz;