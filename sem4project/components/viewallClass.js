import React from 'react';
import { classes } from './class';
// import  {BsDownload} from "react-icons"
import { GlobalStyle } from '@/components/Wrap';

const ViewAllClass = () => {
  return (
    <>
    <GlobalStyle/>
    <div className='container'>
      <h1>All Classes</h1>
      <div className='notes-list'>
      {classes.map((class1) => (
        <div key={class1.id} className='note' >
          <h2>{class1.className} - {class1.subject} </h2>
          <h3>ClassCode : {class1.classCode}</h3>
          <p>{class1.description}</p>
        </div>
      ))}
      </div>
    </div>
    </>
  );
};

export default ViewAllClass;