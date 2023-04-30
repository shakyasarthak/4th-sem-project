import React, { useState } from 'react';
import { enclasses } from '../components/enrolled_class';
import { classes } from '@/components/class';
import { addEnroll } from '@/components/enrolled_class';

const ViewAllEnrolled = () => {
  const [classCode, setClassCode] = useState('');
  const [studentId,setStudentId]=useState('')
  const [enrollmentMessage, setEnrollmentMessage] = useState('');

  const enrolledClassesWithClassInfo = enclasses.map(enrolledClass => {
    const classInfo = classes.find(c => c.classCode === enrolledClass.classCode);
    return {
      studentId: enrolledClass.studentId,
      className: classInfo.className,
      subject: classInfo.subject,
      description: classInfo.description
    };
  });

  const handleInputChange = event => {
    setClassCode(event.target.value);

  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    const classToEnroll = classes.find((c) => c.classCode === classCode);

    if (classToEnroll) {
      const enrolledClass = {
        classCode,
        studentId :"std223", // replace with actual student ID
      };
      addEnroll(enrolledClass);
      setEnrollmentMessage(`You are now enrolled in ${classToEnroll.className}.`);
      setClassCode('');
      // setStudentId('');
    } else {
      setEnrollmentMessage('Invalid class code. Please try again.');
    }
    setClassCode('');
    setStudentId('');
    console.log('Class code:', classCode);
  };

  return (
    <div>
      <h1>Enrolled Classes</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Enter Class Code:
          <input type="text" value={classCode} onChange={handleInputChange} />
        </label>
        {/* <label>
          Student Id:
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </label> */}
        <button type="submit">Add Enrollment</button>
      </form>
      {enrollmentMessage && <p>{enrollmentMessage}</p>}
      <table>
        <thead>
          <tr>
            {/* <th>Student ID</th> */}
            <th>Class Name</th>
            <th>Subject</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {enrolledClassesWithClassInfo.map((enrolledClass, index) => (
            <tr key={index}>
              {/* <td>{enrolledClass.studentId}</td> */}
              <td>{enrolledClass.className}</td>
              <td>{enrolledClass.subject}</td>
              <td>{enrolledClass.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
};

export default ViewAllEnrolled;









// import React from "react";
// import { enclasses } from "./enrolled_class";

// const ViewAllEnroll = () => {
//   return (
//     <div>
//       <h2>Enrolled Classes</h2>
//       {enclasses.length > 0 ? (
//         <ul>
//           {enclasses.map((c) => (
//             <li key={c.id}>
//               <h3>{c.className}</h3>
//               <p>
//                 <strong>Subject:</strong> {c.subject}
//               </p>
//               <p>{c.description}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No classes enrolled yet.</p>
//       )}
//     </div>
//   );
// };

// export default ViewAllEnroll;
