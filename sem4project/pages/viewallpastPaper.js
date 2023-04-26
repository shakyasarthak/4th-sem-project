//for student and teachers 


import React from 'react';
import { pastpaper } from '../components/Pastpaper';
import  {BsDownload} from "react-icons"
import { GlobalStyle } from '@/lib/Wrap';

const ViewAllPapers = () => {
  return (
    <>
    <GlobalStyle/>
    <div className='container'>
      <h1>All Past Papers</h1>
      <div className='notes-list'>
      {pastpaper.map((paper) => (
        <div key={paper.id} className='note' >
          <h2>{paper.subjectName} - {paper.semester} {paper.year}</h2>
          {/* <BsDownload onClick ={() => handleDeleteNote(id)}
                 className='delete-icon' 
                 size='1.3em'/> */}
          <p>Link: <a href={paper.link}>{paper.link}</a></p>
        </div>
      ))}
      </div>
    </div>
    </>
  );
};

export default ViewAllPapers;