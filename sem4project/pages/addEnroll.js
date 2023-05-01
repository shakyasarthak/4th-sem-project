import React, { useState } from 'react';
import { enclasses } from '../components/enrolled_class';
import { classes } from '../components/class';
import ViewallEnroll from '../components/viewAllEnrolled';

const AddEnroll = () => {
  const [classCode, setClassCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  

  const handleInputChange = event => {
    setClassCode(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Check if the class code is already enrolled
    const isAlreadyEnrolled = enclasses.some(e => e.classCode === classCode);
    if (isAlreadyEnrolled) {
      setErrorMessage('You are already enrolled in this class');
      return;
    }

    // Check if the class code is valid
    const classInfo = classes.find(c => c.classCode === classCode);
    if (!classInfo) {
      setErrorMessage('Invalid class code');
      return;
    }

    // Add the enrollment
    const newEnrollment = {
      id: Math.random().toString(36).substr(2, 9),
      classCode: classCode,
      studentId: '123456'
    };
    enclasses.push(newEnrollment);
    setClassCode('');
    setErrorMessage('');
  };

  return (
    <div>
      <h1>Enrolled Classes</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Class Code:
          <input type="text" value={classCode} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Enrollment</button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
     <ViewallEnroll/>
     
    </div>
  );
};

export default AddEnroll;




