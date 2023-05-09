import { useState } from "react";
import { nanoid } from "nanoid";
import { pastpapers } from "../components/pastpaper";
import React from "react";
import { GlobalStyle } from "@/components/Wrap";
import Wrapper from '../assets/wrappers/DashboardFormPage';
import ViewAllPapers from "../components/viewallpastPaper";

const AddpastPaperForm = () => {
  const [formpastPaper, setFormpastPaper] = useState(pastpapers);

  const [showForm, setShowForm] = useState(false);

  function handleInputChange(event) {
    setFormpastPaper({
      ...formpastPaper,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newpastPaper = {
      id: nanoid(),
      ...formpastPaper,
    };
    pastpapers.push(newpastPaper);
    setFormpastPaper({
      subjectName: "",
      semester: "",
      year: "",
      link: "",
    });
    setShowForm(false);
  }

  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <section >
        <div className="button-container">
          <button  onClick={() => setShowForm(true)}>
            Add Pastpaper
          </button>
          {showForm && (
            <div className="form-container">
              <form onSubmit={handleSubmit} className="form">
              {/* <h3>RGB</h3> */}
                <div className="form-center">
                  <div className="form-row">
                    <label className="form-label">
                      Subject:
                      <input
                        type="text"
                        name="subjectName"
                        value={formpastPaper.subjectName}
                        onChange={handleInputChange}
                        className='form-input'
                      />
                    </label>
                  </div>
                  <div className="form-row">
                    <label className="form-label">
                      Semester:
                      <input
                        type="text"
                        name="semester"
                        value={formpastPaper.semester}
                        onChange={handleInputChange}
                        className='form-input'
                      />
                    </label>
                  </div>
                  <div className="form-row">
                    <label className="form-label">
                      Year :
                      <input
                        type="text"
                        name="year"
                        value={formpastPaper.year}
                        onChange={handleInputChange}
                        className='form-input'
                      />
                    </label>
                  </div>
                  <div className="form-row">
                    <label className="form-label">
                      Link :
                      <input
                        type="url"
                        name="link"
                        value={formpastPaper.link}
                        onChange={handleInputChange}
                        className='form-input'
                      />
                    </label>
                  </div>
                  <div className="btn-container">
                  <button type="submit"   className='btn btn-block submit-btn'>
                    Add{" "}
                  </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </Wrapper>
    <div className="container">
       <ViewAllPapers/>
    </div>
    </>
  );
};

export default AddpastPaperForm;

// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { pastpapers } from '../components/pastpaper'
// import React from 'react';
// import { GlobalStyle } from '@/components/Wrap';
// import ViewAllPapers from '../components/viewallpastPaper';

// const AddpastPaperForm = () => {
//   const [formpastPaper, setFormpastPaper] = useState(pastpapers);

//   const [showForm, setShowForm] = useState(false);

//   function handleInputChange(event) {
//     setFormpastPaper({
//       ...formpastPaper,
//       [event.target.name]: event.target.value
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const newpastPaper = {
//       id: nanoid(),
//       ...formpastPaper
//     };
//     pastpapers.push(newpastPaper);
//     setFormpastPaper({
//       subjectName: '',
//       semester: '',
//       year : '',
//       link: ''
//     });
//     setShowForm(false);
//   }

//   return (
//     <>
//     <GlobalStyle/>
//     <section className='quiz quiz-small'>
//       <div className="button-container">
//         <button className="add-button" onClick={() => setShowForm(true)}>Add Pastpaper</button>
//         {showForm && (
//           <div className="form-container">
//             <form onSubmit={handleSubmit} className='setup-form'>
//               <div className='form-control'>
//               <label>
//                  Subject:
//                 <input type="text" name="subjectName" value={formpastPaper.subjectName} onChange={handleInputChange}  />
//               </label></div>
//               <div className='form-control'>
//               <label>
//                 Semester:
//                 <input type="text" name="semester" value={formpastPaper.semester} onChange={handleInputChange}  />
//               </label></div>
//               <div className='form-control'>
//               <label>
//                 Year :
//                 <input type="text" name="year" value={formpastPaper.year} onChange={handleInputChange} />
//               </label></div>
//               <div className='form-control'>
//               <label>
//                  Link :
//                 <input type="url" name="link" value={formpastPaper.link} onChange={handleInputChange} />
//               </label></div>
//               <button type="submit" className='submit-btn'>Add </button>
//             </form>
//           </div>
//         )}
//       </div>
//       </section>
//     {/* <div className="container">
//        <ViewAllPapers/>
//     </div> */}
//     </>
//   );
// };

// export default AddpastPaperForm;
