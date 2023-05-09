import { useState } from 'react';
import { nanoid } from 'nanoid';
import { assignments } from '../components/assignment'
import React from 'react';
import { GlobalStyle } from '@/components/Wrap';
import ViewAllAssigns from '../components/viewallAssignment';
import { getSession, useSession } from "next-auth/react";
import prisma from './../prisma/prisma';


//get the server side prop
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
        redirect: {
            destination: '/loginChoice',
            permanent: false,
        },
    }
}
  const {user} = session;

  const status = await prisma.User.upsert({
    create: {
      email: user.email,
      role: user.email.endsWith("@gmail.com") ? "teacher" : "student",
    },
    update: {},
    where: {email: user.email || ""}
  });
  return {
    props: { status },
  };
}

const AddAssignmentForm1 = ({ classCode }) => {
  const [formAssignment, setFormAssignment] = useState({
    classCode: classCode,
    assignmentId:'',
    subjectName: '',
    subjectCode: '',
    year: '',
    link: '',
    deadline: ''
  });
 const [assignmentno,setAssignmentno]=useState('')
  const [showForm, setShowForm] = useState(false);

  function handleAssignmentnoChange(event) {
    setAssignmentno(event.target.value);
  }
  function handleInputChange(event) {
    setFormAssignment({
      ...formAssignment,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
       const assignno =classCode+"-"+assignmentno;
    const newAssignment = {
      assignmentId: assignno,
      ...formAssignment
    };

    assignments.push(newAssignment);

    setFormAssignment({
      classCode: classCode,
      subjectName: '',
      subjectCode: '',
      year: '',
      link: '',
      deadline: ''
    });

    setShowForm(false);
  }

  return (
    <>
      <GlobalStyle/>
      <section className='quiz quiz-small'>
        {/* <h1>Assignment</h1> */}
        <div className="button-container">
          <button className="add-button" onClick={() => setShowForm(true)}>Assignment</button>
          {showForm && (
            <div className="form-container">
              <form onSubmit={handleSubmit} className='setup-form'>
                <div className='form-control'>
                <label>
                    Assignment No :
                    <input type="text" name="assignmentno" value={assignmentno} onChange={handleAssignmentnoChange} />
                  </label>
                  <label>
                    Class Code:
                    <input type="text" name="classCode" value={classCode} readOnly />
                  </label>
                </div>
                <div className='form-control'>
                  <label>
                    Subject:
                    <input type="text" name="subjectName" value={formAssignment.subjectName} onChange={handleInputChange} />
                  </label>
                </div>
                <div className='form-control'>
                  <label>
                    Subject Code:
                    <input type="text" name="subjectCode" value={formAssignment.subjectCode} onChange={handleInputChange} />
                  </label>
                </div>
                <div className='form-control'>
                  <label>
                    Year:
                    <input type="text" name="year" value={formAssignment.year} onChange={handleInputChange} />
                  </label>
                </div>
                <div className='form-control'>
                  <label>
                    Link:
                    <input type="url" name="link" value={formAssignment.link} onChange={handleInputChange} />
                  </label>
                </div>
                <div className='form-control'>
                  <label>
                    Description:
                    <input type="text" name="description" value={formAssignment.description} onChange={handleInputChange} />
                  </label>
                </div>
                <button type="submit" className='submit-btn'>Add</button>
              </form>
            </div>
          )}
        </div>
      </section>
      {/* <div className="container">
        <ViewAllAssigns/>
      </div> */}
    </>
  );
};

export default AddAssignmentForm1;
