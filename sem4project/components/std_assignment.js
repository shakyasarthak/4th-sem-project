
import { nanoid } from 'nanoid';

let std_assignments = [
    {
        submission_id: nanoid(),
        classCode: 'CS101',
        slink: 'https://example.com/mathematics-spring-2022.pdf',
        status: 'submitted',
        studentId: '123',
        assignmentId: "CS101-1"
        
      },
      {
        submission_id: nanoid(),
        classCode: 'MATH202',
        slink: 'https://example.com/calculus-fall-2022.pdf',
        status: 'submitted',
        studentId: 'std234',
        assignmentId: "MATH202-1"
      },
      {
        submission_id: nanoid(),
        classCode: 'PHY101',
        slink: 'https://example.com/physics-spring-2022.pdf',
        status: 'submitted',
        studentId: 'std345',
        assignmentId: "PHYS101-1"
      },
      {
        submission_id: nanoid(),
        classCode: 'CS202',
        slink: 'https://example.com/algorithms-spring-2023.pdf',
        status: 'submitted',
        studentId: 'std456',
        assignmentId: "CS202-2",
      },
      {
        submission_id: nanoid(),
        classCode: 'BIO101',
        slink: 'https://example.com/biology-fall-2022.pdf',
        status: 'submitted',
        studentId: 'std567',
        assignentId: "BTO101-1",
      },
];

function addStd_Assignments(newStd_Assignments) {
  const newStd_AssignmentsWithId = {
    ...newStd_Assignments,
    submission_id: nanoid(),
    
  };
  assignments = [...assignments, newStd_AssignmentsWithId];
}
export { std_assignments, addStd_Assignments };




