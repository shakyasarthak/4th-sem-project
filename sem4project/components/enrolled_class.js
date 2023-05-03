import { nanoid } from 'nanoid';

let enclasses= [
{
 id: nanoid(),
  classCode: 'hhgdjnh45',
  studentId:'sty123',
    },
];


function addEnroll(newEnroll) {
    // const classCode = Math.random().toString(36).substr(2, 8);
  const newClassesWithId = {
    ...newEnroll,
    id: nanoid(),
    // classCode:classCode,
    
  };
  enclasses = [...enclasses, newClassesWithId];
}

export { enclasses, addEnroll };