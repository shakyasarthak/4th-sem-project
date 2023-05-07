//  import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import Search from '../components/Note_search';
// import NotesList from '../components/notesList';
// import styled from 'styled-components';
// import { GlobalStyle } from '../components/Wrap';

// // const Notes_F = () => {

// 	const [notes, setNotes] = useState ([
// 		{
// 			id: nanoid(),
// 			text: 'This is my first note!',
// 			date: '15/04/2021',
// 		},
// 		{
// 			id: nanoid(),
// 			text: 'I am so powerful !',
// 			date: '21/04/2021',
// 		},
// 		{
// 			id: nanoid(),
// 			text: 'Rangon ki barkha hai kusboo ki aandhi hai',
// 			date: '28/04/2021',
// 		},
// 		{
// 			id: nanoid(),
// 			text: 'This is my new note!',
// 			date: '30/04/2021',
// 		},
// 	]);
// 	const [searchText, setSearchText] = useState('');
//   const addNote = (text) => {
// 		const date = new Date();
// 		const newNote = {
// 			id: nanoid(),
// 			text: text,
// 			date: date.toLocaleDateString(),
// 		};
// 		const newNotes = [...notes, newNote];
// 		setNotes(newNotes);
// 	};

// 	const deleteNote = (id) => {
// 		const newNotes = notes.filter((note) => note.id !== id);
// 		setNotes(newNotes);
// 	};
    
//   return (
//     <>
// 	{<GlobalStyle/> }
//    <div className="container">
// 	<h1 className='header'>Notes Collection</h1>
//    <Search handleSearchNote={setSearchText} />
//     <NotesList 
//     notes={notes.filter((note) =>
// 		note.text.toLowerCase().includes(searchText)
// 	)}
//     handleAddNote={addNote}
//     handleDeleteNote={deleteNote}
//     />
  
//     </div>
//     </>
//   )
// }
// export default Notes_F;
// import { PrismaClient } from '@prisma/client';

// export async function getServerSideProps() {
//   const prisma = new PrismaClient();

//   try {
//     const notes = await prisma.note.findMany();
//     return { props: { notes } };
//   } catch (err) {
//     console.error(err);
//     return { props: { notes: [] } };
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// const Notes_F = ({ notes: initialNotes }) => {
//   const [notes, setNotes] = useState(initialNotes);
//   const [searchText, setSearchText] = useState('');

//   const addNote = async (text) => {
//     const date = new Date();
//     const newNote = {
//       id: nanoid(),
//       text: text,
//       date: date.toLocaleDateString(),
//     };

//     const prisma = new PrismaClient();
//     try {
//       const createdNote = await prisma.note.create({
//         data: {
//           id: newNote.id,
//           text: newNote.text,
//           date: newNote.date,
//         },
//       });
//       const newNotes = [...notes, createdNote];
//       setNotes(newNotes);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       await prisma.$disconnect();
//     }
//   };

//   const deleteNote = async (id) => {
//     const prisma = new PrismaClient();
//     try {
//       await prisma.note.delete({ where: { id } });
//       const newNotes = notes.filter((note) => note.id !== id);
//       setNotes(newNotes);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       await prisma.$disconnect();
//     }
//   };

//   return (
//     <>
//       <GlobalStyle />
//       <div className="container">
//         <h1 className="header">Notes Collection</h1>
//         <Search handleSearchNote={setSearchText} />
//         <NotesList
//           notes={notes.filter((note) =>
//             note.text.toLowerCase().includes(searchText)
//           )}
//           handleAddNote={addNote}
//           handleDeleteNote={deleteNote}
//         />
//       </div>
//     </>
//   );
// };

// export default Notes_F;

// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import Search from '../components/Note_search';
// import NotesList from '../components/notesList';
// import styled from 'styled-components';
// import { GlobalStyle } from '../components/Wrap';
// import { PrismaClient } from '@prisma/client';

// const Notes_F = ({ notes }) => {
// 	const [searchText, setSearchText] = useState('');

// 	const addNote = async (text) => {
// 		const date = new Date();
// 		const newNote = {
// 			id: nanoid(),
// 			text: text,
// 			date: date.toLocaleDateString(),
// 		};
// 		try {
// 			const prisma = new PrismaClient();
// 			await prisma.note.create({ data: newNote });
// 			setNotes([...notes, newNote]);
// 			await prisma.$disconnect();
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};

// 	const deleteNote = async (id) => {
// 		try {
// 			const prisma = new PrismaClient();
// 			await prisma.note.delete({ where: { id: id } });
// 			const newNotes = notes.filter((note) => note.id !== id);
// 			setNotes(newNotes);
// 			await prisma.$disconnect();
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};

// 	return (
// 		<>
// 			<GlobalStyle />
// 			<div className="container">
// 				<h1 className="header">Notes Collection</h1>
// 				<Search handleSearchNote={setSearchText} />
// 				<NotesList
// 					notes={notes.filter((note) =>
// 						note.text.toLowerCase().includes(searchText)
// 					)}
// 					handleAddNote={addNote}
// 					handleDeleteNote={deleteNote}
// 				/>
// 			</div>
// 		</>
// 	);
// };

// export const getServerSideProps = async () => {
// 	let notes = [];
// 	try {
// 		const prisma = new PrismaClient();
// 		notes = await prisma.notes.findMany();
// 		await prisma.$disconnect();
// 	} catch (error) {
// 		console.error(error);
// 	}

// 	return {
// 		props: { notes },
// 	};
// };

// export default Notes_F;

import { useState } from 'react';
import { nanoid } from 'nanoid';
import Search from '../components/Note_search';
import NotesList from '../components/notesList';
import styled from 'styled-components';
import { GlobalStyle } from '../components/Wrap';
import { PrismaClient } from '@prisma/client';

const Notes_F = ({ notes }) => {
  const [searchText, setSearchText] = useState('');

  const addNote = async (title, content, studentId, teacherId) => {
    try {
      const prisma = new PrismaClient();
      const newNote = await prisma.notes.create({
        data: {
          title,
          content,
          studentId,
          teacherId,
        },
      });
      setNotes([...notes, newNote]);
      await prisma.$disconnect();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const prisma = new PrismaClient();
      await prisma.notes.delete({ where: { id } });
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
      await prisma.$disconnect();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <h1 className="header">Notes Collection</h1>
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.title.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  let notes = [];
  try {
    const prisma = new PrismaClient();
    notes = await prisma.notes.findMany({
      include: {
        student: true,
        teacher: true,
      },
    });
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
  }

  return {
    props: { notes },
  };
};

export default Notes_F;
