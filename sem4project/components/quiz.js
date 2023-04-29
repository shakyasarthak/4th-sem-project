
import { nanoid } from 'nanoid';

let quizs= [
    {
        id: nanoid(),
        classCode: 'CS101',
        subjectName: 'Computer Science',
        subjectCode: 'COMP101',
        link: 'https://example.com/quiz1.pdf',
        // deadline: new Date('2023-05-01'),
        description: 'Finish this quiz ',
      },
      {
        id: nanoid(),
        classCode: 'PHYS202',
        subjectName: 'Physics',
        subjectCode: 'PHYS201',
        link: 'https://example.com/quiz2.pdf',
        // deadline: new Date('2023-05-10'),
        description: 'Finish this quiz ',
      },
      {
        id: nanoid(),
        classCode: 'MATH201',
        subjectName: 'Mathematics',
        subjectCode: 'MATH101',
        link: 'https://example.com/quiz3.pdf',
        // deadline: new Date('2023-05-15'),
        description: 'Finish this quiz ',
      }
];

function addQuizs(newQuizs) {
  const newQuizsWithId = {
    ...newQuizs,
    id: nanoid(),

  };
  quizs = [...quizs, newQuizsWithId];
}

function updateQuizs(id, newQuizs) {
  const newQuizsWithId = {
    ...newQuizs,
    id,
  };
  quizs = quizs.map((d) => (d.id === id ? newQuizsWithId : d));
}

export { quizs, addQuizs, updateQuizs };