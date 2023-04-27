
import { nanoid } from 'nanoid';

let pastpapers = [
    {
        id: nanoid(),
        subjectName: 'Mathematics',
        semester: 'Spring',
        year: '2022',
        link: 'https://example.com/mathematics-spring-2022.pdf'
      },
      {
        id: nanoid(),
        subjectName: 'Computer Science',
        semester: 'Fall',
        year: '2021',
        link: 'https://example.com/computer-science-fall-2021.pdf'
      },
      {
        id: nanoid(),
        subjectName: 'Geomatics',
        semester: 'Spring',
        year: '2021',
        link: 'https://example.com/mathematics-spring-2022.pdf'
      },
      {
        id: nanoid(),
        subjectName: 'Computer Science',
        semester: 'Spring',
        year: '2021',
        link: 'https://example.com/computer-science-fall-2021.pdf'
      },
      {
        id: nanoid(),
        subjectName: 'Physics',
        semester: 'Fall',
        year: '2022',
        link: 'https://example.com/physics-fall-2022.pdf'
      }
];

function addpastPapers(newpastPapers) {
  const newpastPapersWithId = {
    ...newpastPapers,
    id: nanoid(),
    
  };
  pastpaper = [...pastpaper, newpastPapersWithId];
}

function updatepastPapers(id, newpastPapers) {
  const newpastPapersWithId = {
    ...newpastPapers,
    id,
  };
  pastpaper = pastpaper.map((d) => (d.id === id ? newpastPapersWithId : d));
}

export { pastpapers, addpastPapers, updatepastPapers };
