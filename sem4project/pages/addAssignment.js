import { useState } from 'react';
import { nanoid } from 'nanoid';
import { assignments } from '../components/assignment'
import React from 'react';
import { GlobalStyle } from '@/lib/Wrap';
import ViewAllAssigns from './viewallAssignment';

const AddAssignmentForm = () => {
  const [formAssignment, setFormAssignment] = useState(assignments);

  const [showForm, setShowForm] = useState(false);

  function handleInputChange(event) {
    setFormAssignment({
      ...formAssignment,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
   
    const newAssignment = {
      id: nanoid(),
      ...formAssignment
    };
    assignments.push(newAssignment);
    setFormAssignment({
      classCode:'',
      subjectName: '',
      subjectCode: '',
      year : '',
      link: ''
    });
    setShowForm(false);
  }

  return (
    <>
    <GlobalStyle/>
    <section className='quiz quiz-small'>
      <h1> Assignment </h1>
      <div className="button-container">
        <button className="add-button" onClick={() => setShowForm(true)}>Add Assignment</button>
        {showForm && (
          <div className="form-container">
            <form onSubmit={handleSubmit} className='setup-form'>
            <div className='form-control'>
              <label>
                 Class Code:
                <input type="text" name="classCode" value={formAssignment.classCode} onChange={handleInputChange}  />
              </label></div>
              <div className='form-control'>
              <label>
                 Subject:
                <input type="text" name="subjectName" value={formAssignment.subjectName} onChange={handleInputChange}  />
              </label></div>
              <div className='form-control'>
              <label>
                Subject Code :
                <input type="text" name="subjectCode" value={formAssignment.subjectCode} onChange={handleInputChange}  />
              </label></div>
              <div className='form-control'>
              <label>
                Year :
                <input type="text" name="year" value={formAssignment.year} onChange={handleInputChange} />
              </label></div>
              <div className='form-control'>
              <label>
                 Link :
                <input type="url" name="link" value={formAssignment.link} onChange={handleInputChange} />
              </label></div>
              <button type="submit" className='submit-btn'>Add </button>
            </form>
          </div>
        )}
      </div>
      </section>
    <div className="container">
       <ViewAllAssigns/>
    </div>
    </>
  );
};

export default AddAssignmentForm;






// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { assignments } from '../components/assignment'
// import React from 'react';
// import { GlobalStyle } from '@/lib/Wrap';
// import ViewAllAssignments from './viewallAssignment';
// // import ViewAllPapers from './viewallAssignment';

// const AddAssignmentForm = () => {
//   const [formAssignment1, setFormAssignment1] = useState(assignments);
//   const [showForm1, setShowForm1] = useState(false);
//   function handleInputChange1(event) {
//     setFormAssignment1({
//       ...formAssignment1,
//       [event.target.name]: event.target.value
//     });
//   }

//   function handleSubmit1(event) {
//     event.preventDefault();
   
//     const newAssignment = {
//       id: nanoid(),
//       ...formAssignment1,
      
//     };
//     assignments.push(newAssignment);
//     setFormAssignment1({
//       classCode1: '',
//       subjectName1: '',
//       subjectCode1: '',
//       link1: '',
//       deadline1:'',
//       description1:''
//     });
//     setShowForm1(false);
//   }

//   return (
//     <>
//     <GlobalStyle/>
//     <section className='quiz quiz-small'>
//       <h1> Assignment</h1>
//       <div className="button-container">
//       <button className="add-button" onClick={() => setShowForm1(true)}>Add Assignment</button>
//         {showForm1 && (
//           <div className="form-container">

//         <form onSubmit={handleSubmit1}>
//       <div>
//         <label htmlFor="classCode1">Class Code:</label>
//         <input
//           type="text"
//           id="classCode1"
//           value={formAssignment1.classCode1}
//           onChange={handleInputChange1}
//         />
//       </div>
//       <div>
//         <label htmlFor="subjectName">Subject Name:</label>
//         <input
//           type="text"
//           id="subjectName1"
//           value={formAssignment1.subjectName1}
//           onChange={handleInputChange1}
//         />
//       </div>
//       <div>
//         <label htmlFor="subjectCode">Subject Code:</label>
//         <input
//           type="text"
//           id="subjectCode1"
//           value={formAssignment1.subjectCode1}
//           onChange={handleInputChange1}
//         />
//       </div>
//       <div>
//         <label htmlFor="link">Link:</label>
//         <input
//           type="link"
//           id="link1"
//           value={formAssignment1.link1}
//           onChange={handleInputChange1}
//         />
//       </div>
//       <div>
//         <label htmlFor="deadline">Deadline:</label>
//         <input
//           type="date"
//           id="deadline1"
//           value={formAssignment1.deadline1}
//           onChange={handleInputChange1}
//         />
//       </div>
//       <div>
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description1"
//           value={formAssignment1.description1}
//           onChange={handleInputChange1}
//         />
//        </div>
//        <button type="submit">Add Assignment</button>
//        </form>
//           </div>
//         )}
//       </div>
//       </section>
//     <div className="container">
//        <ViewAllAssignments />
//     </div>
//     </>
//   );
// };

// export default AddAssignmentForm;