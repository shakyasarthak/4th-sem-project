
import { nanoid } from 'nanoid';

let assignments = [
    {
        assignmentId:"MATH202-1",
        classCode: 'MATH202',
        subjectName: 'Mathematics',
        subjectCode: 'Spring',
        year: '2022',
        link: 'https://example.com/mathematics-spring-2022.pdf',
         description: 'Assignment for 1st Chapter',
      },
      {
        assignmentId:'CS101-1',
        classCode: 'CS101',
        subjectName: 'Computer Science',
        subjectCode: 'Fall',
        year: '2021',
        link: 'https://example.com/computer-science-fall-2021.pdf',
        description: 'Assignment for 1st Chapter',
      },
      // {
      //   assignmentId:"MATH202-2",
      //   classCode: 'MATH202',
      //   subjectName: 'Mathematics',
      //   subjectCode: 'Spring',
      //   year: '2021',
      //   link: 'https://example.com/mathematics-spring-2022.pdf',
      //   description: 'Assignment for 2nd Chapter',
      // },

      // {
      //   assignmentId: 'CS101-2',
      //   classCode: 'CS101',
      //   subjectName: 'Computer Science',
      //   subjectCode: 'Spring',
      //   year: '2021',
      //   link: 'https://example.com/computer-science-fall-2021.pdf',
      //   description: 'Assignment for 2nd Chapter',
      // },

      {
        assignmentId: 'CS101-3',
        classCode: 'CS101',
        subjectName: 'Physics',
        subjectCode: 'Fall',
        year: '2022',
        link: 'https://example.com/physics-fall-2022.pdf',
        description: 'Assignment for 1st Chapter',
      }
];

function addAssignments(newAssignments) {
  const newAssignmentsWithId = {
    ...newAssignments,
    assignmentId: nanoid(),
    
  };
  assignments = [...assignments, newAssignmentsWithId];
}
export { assignments, addAssignments };











// import { nanoid } from 'nanoid';

// let assignments= [
//     {
//         id: nanoid(),
//         classCode1: 'CS101',
//         subjectName1: 'Computer Science',
//         subjectCode1: 'COMP101',
//         link1: 'https://example.com/assignment1.pdf',
//         deadline1: new Date('2023-05-01'),
//         description1: 'Write a program in Python to implement a binary search algorithm.'
//       },
//       {
//         id: nanoid(),
//         classCode1: 'PHYS202',
//         subjectName1: 'Physics',
//         subjectCode1: 'PHYS201',
//         link1: 'https://example.com/assignment2.pdf',
//         deadline1: new Date('2023-05-10'),
//         description1: 'Derive the equations of motion for a particle in three dimensions using Lagrangian mechanics.'
//       },
//       {
//         id: nanoid(),
//         classCode1: 'MATH201',
//         subjectName1: 'Mathematics',
//         subjectCode1: 'MATH101',
//         link1: 'https://example.com/assignment3.pdf',
//         deadline1: new Date('2023-05-15'),
//         description1: 'Prove that the determinant of an orthogonal matrix is either 1 or -1.'
//       }
// ];

// function addAssignments(newAssignments) {
//   const newAssignmentsWithId = {
//     ...newAssignments,
//     id: nanoid(),

//   };
//   assignments = [...assignments, newAssignmentsWithId];
// }

// // function updateAssignments(id, newAssignments) {
// //   const newAssignmentsWithId = {
// //     ...newAssignments,
// //     id,
// //   };
// //   assignments = assignments.map((d) => (d.id === id ? newAssignmentsWithId : d));
// // }

// export { assignments, addAssignments};