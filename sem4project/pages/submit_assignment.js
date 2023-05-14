import React, { useState } from 'react';
import { enclasses } from '../components/enrolled_class';
import { classes } from '../components/class';
import { std_assignments } from '@/components/std_assignment';
import { nanoid } from 'nanoid';

const Sub_assignment = ({ classCode, assignmentId }) => {
  const [slink, setSlink] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = event => {
    setSlink(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const existingSubmission = std_assignments.find(
      submission => submission.classCode === classCode && submission.assignmentId === assignmentId
    );

    if (existingSubmission) {
      setErrorMessage('You have already submitted this assignment');
    } else {
      const newSubmission = {
        id: Math.random().toString(36).substr(2, 9),
        submission_id: nanoid(),
        classCode: classCode,
        slink: slink,
        status: 'Submitted',
        studentId: 'std123',
        assignmentId: assignmentId,
      };
      std_assignments.push(newSubmission);
      setSlink('');
      setErrorMessage('');
    }
  };

  const existingSubmission = std_assignments.find(
    submission => submission.classCode === classCode && submission.assignmentId === assignmentId
  );

  if (existingSubmission) {
    return (
      <div>
        {/* <h6>Assignment already submitted</h6> */}
        <p>Status: {existingSubmission.status}</p>
        <p>Submission link: {existingSubmission.slink}</p>
      </div>
    );
  }

  return (
    <div>
  
      <form class="form-floating-sm mb-0.5" onSubmit={handleSubmit}>
      <input type="url"  class="form-control" id="floatingInputValue" placeholder="Submission Link" value={slink} onChange={handleInputChange} name="submission_id" />
          <label for="floatingInputValue"> 
        </label>
        </form>
      <button class="btn btn-outline-primary" type="submit">Add Submission</button>
        {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default Sub_assignment;



// import React, { useState } from 'react';
// import { enclasses } from '../components/enrolled_class';
// import { classes } from '../components/class';
// import { std_assignments } from '@/components/std_assignment';
// import { nanoid } from 'nanoid';

// const Sub_assignment = ({ classCode, assignmentId }) => {
//   const [slink, setSlink] = useState('');
//   const [submissionStatus, setSubmissionStatus] = useState('pending');

//   const handleInputChange = event => {
//     setSlink(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     const newSubmission = {
//       id: Math.random().toString(36).substr(2, 9),
//       submission_id: nanoid(),
//       classCode: classCode,
//       slink: slink,
//       status: submissionStatus,
//       studentId: 'std123',
//       assignmentId: assignmentId,
//     };
//     std_assignments.push(newSubmission);
//     setSlink('');
//     setSubmissionStatus('submitted');
//   };

//   return (
//     <div>
//       {submissionStatus === 'pending' && (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Enter Submission Link
//             <input type="url" value={slink} onChange={handleInputChange} />
//           </label>
//           <button type="submit">Add Submission</button>
//         </form>
//       )}
//       {submissionStatus === 'submitted' && <p>Status: Submitted</p>}
//     </div>
//   );
// };

// export default Sub_assignment;



// import React, { useState } from 'react';
// import { enclasses } from '../components/enrolled_class';
// import { classes } from '../components/class';
// import { std_assignments } from '@/components/std_assignment';
// import { nanoid } from 'nanoid';

// const Sub_assignment = (classCode,assignmentId) => {
//   const [slink,setSlink] = useState('');

//   const handleInputChange = event => {
//     setSlink(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     // Check if the class code is already enrolled
//     // Add the enrollment
//     const newSubmission = {
//       id: Math.random().toString(36).substr(2, 9),
//       submission_id: nanoid(),
//       classCode: classCode,
//       slink:slink,
//       status:"Submitted",
//       studentId: 'std123',
//       assignmentId :assignmentId,
      
//     };
//     std_assignments.push(newSubmission);
//     setSlink('');
//   };

//   return (
//     <div>
//       <h1>Enrolled Classes</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter Submission Link
//           <input type="url" value={slink} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Add Submission</button>
//         {errorMessage && <div>{errorMessage}</div>}
//       </form>
     
     
//     </div>
//   );
// };

// export default Sub_assignment;
