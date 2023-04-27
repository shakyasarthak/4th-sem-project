
import { nanoid } from 'nanoid';

let assignments= [
    {
        id: nanoid(),
        classCode: 'CS101',
        subjectName: 'Computer Science',
        subjectCode: 'COMP101',
        link: 'https://example.com/assignment1.pdf',
        deadline: new Date('2023-05-01'),
        description: 'Write a program in Python to implement a binary search algorithm.'
      },
      {
        id: nanoid(),
        classCode: 'PHYS202',
        subjectName: 'Physics',
        subjectCode: 'PHYS201',
        link: 'https://example.com/assignment2.pdf',
        deadline: new Date('2023-05-10'),
        description: 'Derive the equations of motion for a particle in three dimensions using Lagrangian mechanics.'
      },
      {
        id: nanoid(),
        classCode: 'MATH201',
        subjectName: 'Mathematics',
        subjectCode: 'MATH101',
        link: 'https://example.com/assignment3.pdf',
        deadline: new Date('2023-05-15'),
        description: 'Prove that the determinant of an orthogonal matrix is either 1 or -1.'
      }
];

function addAssignments(newAssignments) {
  const newAssignmentsWithId = {
    ...newAssignments,
    id: nanoid(),

  };
  assignments = [...assignments, newAssignmentsWithId];
}

function updateAssignments(id, newAssignments) {
  const newAssignmentsWithId = {
    ...newAssignments,
    id,
  };
  assignments = assignments.map((d) => (d.id === id ? newAssignmentsWithId : d));
}

export { assignments, addAssignments, updateAssignments };