import React from 'react';
import { assignments } from './assignment';
import  {BsDownload} from "react-icons"
import { GlobalStyle } from '@/components/Wrap';

const ViewAllAssigns = () => {
  return (
    <>
    <GlobalStyle/>
    <div className='container'>
      <h1>All Past Assigns</h1>
      <div className='notes-list'>
      {assignments.map((assign) => (
        <div key={assign.id} className='note' >
          <h2>{assign.subjectName} - {assign.subjectCode} {assign.classCode} {assign.year}</h2>
        <p> {assign.description}    Link: <a href={assign.link}>{assign.link} </a></p>
        </div>
      ))}
      </div>
    </div>
    </>
  );
};

export default ViewAllAssigns;





// import React from 'react';
// import { assignments } from '../components/assignment';
// import  {BsDownload} from "react-icons"
// import { GlobalStyle } from '@/lib/Wrap';

// const ViewAllAssignments = () => {
//   return (
//     <>
//     <GlobalStyle/>
//     <div className='container'>
//       <h1>All Assignment</h1>
//       <div className='notes-list'>
//       {assignments.map((assignmen) => (
//         <div key={assignmen.id} className='note' >
//           <h2>{assignmen.classCode1} - {assignmen.subjectName1} {assignmen.subjectCode1}</h2>
//           <p>{assignmen.description1}</p>
//         </div>
//       ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default ViewAllAssignments;