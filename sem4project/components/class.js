
import { nanoid } from 'nanoid';

let classes= [
    {
        id: nanoid(),
        className: 'Cs Batch 2020 MCSC 207' ,
  subject: 'Numerical Methods ',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing el vehicula erra maximus.',
  classCode: 'nxfirhjdj45',
    },
{
 id: nanoid(),
 className: 'Cs Batch 2021 MATH 207' ,
  subject: 'Statistics ',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing el vehicula erra maximus.',
  classCode: 'hhgdjnh45',
    },
    {
      id: nanoid(),
      className: 'Eng Batch 2021 ENG 101' ,
      subject: 'Introduction to English Literature',
      description: 'This course provides an introduction to the study of English literature, covering a range of genres and time periods.',
      classCode: 'jknfsd36',
    },
    {
      id: nanoid(),
      className: 'BSc Batch 2022 ' ,
      subject: 'Cell Biology',
      description: 'This course covers the fundamentals of cell biology, including cell structure, function, and communication.',
      classCode: 'MATH202',
    },
    {
      id: nanoid(),
      className: 'Law Batch 2020 LAW 301' ,
      subject: 'Constitutional Law',
      description: 'This course explores the principles and practices of constitutional law, focusing on the interpretation and application of the U.S. Constitution.',
      classCode: 'CS101',
    },
    {
      id: nanoid(),
      className: 'PharmD Batch 2023 PHAR 501' ,
      subject: 'Pharmacology',
      description: 'This course covers the principles of pharmacology, including drug classification, pharmacodynamics, and pharmacokinetics.',
      classCode: 'bjhjks57',
    },
    {
      id: nanoid(),
      className: 'Art Batch 2021 ART 301' ,
      subject: 'Contemporary Art',
      description: 'This course examines contemporary art from the 1960s to the present, focusing on the major movements and artists of the period.',
      classCode: 'nfdsjw36',
    }
];


function addClasses(newClasses) {
    // const classCode = Math.random().toString(36).substr(2, 8);
  const newClassesWithId = {
    ...newClasses,
    id: nanoid(),
    // classCode:classCode,
    
  };
  classes = [...classes, newClassesWithId];
}

function deleteClass(classCode) {
  classes = classes.filter((c) => c.classCode !== classCode);
}

export { classes, addClasses, deleteClass };