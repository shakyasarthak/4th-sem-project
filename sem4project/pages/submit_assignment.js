import React, { useState } from 'react';
import { enclasses } from '../components/enrolled_class';
import { classes } from '../components/class';
import { std_assignments } from '@/components/std_assignment';
import { nanoid } from 'nanoid';

const Sub_assignment = (classCode,assignmentId) => {
  const [slink,setSlink] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = event => {
    setSlink(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Check if the class code is already enrolled
    // Add the enrollment
    const newSubmission = {
      id: Math.random().toString(36).substr(2, 9),
      submission_id: nanoid(),
      classCode: classCode,
      slink:slink,
      status:"Submitted",
      studentId: 'std123',
      assignmentId :assignmentId,
      
    };
    std_assignments.push(newSubmission);
    setSlink('');
    setErrorMessage('');
  };

  return (
    <div>
      <h1>Enrolled Classes</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Submission Link
          <input type="url" value={slink} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Submission</button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
     
     
    </div>
  );
};

export default Sub_assignment;
