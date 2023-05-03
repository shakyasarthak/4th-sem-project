import React from 'react';
import { classes } from '@/components/class';
import { enclasses } from '@/components/enrolled_class';


function ViewAllEnroll() {
  const enrolledClassesWithClassInfo = enclasses.map(enrolledClass => {
    const classInfo = classes.find(c => c.classCode === enrolledClass.classCode);
    return {
      studentId: enrolledClass.studentId,
      className: classInfo.className,
      subject: classInfo.subject,
      description: classInfo.description
    };
  });
  

  return (
    <div>
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
}

export default ViewAllEnroll;
