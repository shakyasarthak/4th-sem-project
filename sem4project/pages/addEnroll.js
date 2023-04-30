// addEnroll.js

import { useState } from 'react';
import { classes } from '@/components/class';
import { enclasses } from '@/components/enrolled_class';
import { addEnroll } from '@/components/enrolled_class';
import ViewAllEnroll from '@/pages/viewallEnroll';

function AddEnroll() {
  const [classCode, setClassCode] = useState('');
  const [studentId,setStudentId]=useState('')
  const [enrollmentMessage, setEnrollmentMessage] = useState('');

  const handleEnroll = (event) => {
    event.preventDefault();
    const classToEnroll = classes.find((c) => c.classCode === classCode);

    if (classToEnroll) {
      const enrolledClass = {
        classCode,
        studentId:"Ssd123", // replace with actual student ID
      };
      addEnroll(enrolledClass);
      setEnrollmentMessage(`You are now enrolled in ${classToEnroll.className}.`);
      setClassCode('');
      // setStudentId('');
    } else {
      setEnrollmentMessage('Invalid class code. Please try again.');
    }
  };

  return (
    <div>
        <div>
      <h2>Enroll in a Class</h2>
      <form onSubmit={handleEnroll}>
        <label>
          Class Code:
          <input type="text" value={classCode} onChange={(e) => setClassCode(e.target.value)} />
        </label>
        <label>
          Student Id:
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </label>
        <button type="submit">Enroll</button>
      </form>
      {enrollmentMessage && <p>{enrollmentMessage}</p>}
    </div>
    {/* <div>
        <ViewAllEnroll/>
    </div> */}
    </div>
  );
}

export default AddEnroll;
