import { useState } from 'react';
import { nanoid } from 'nanoid';
import { classes } from '../components/class'
import React from 'react';
import { GlobalStyle } from '@/components/Wrap';
import ViewAllClass from '../components/viewallClass';
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


const AddClassForm = () => {
  const [formClass2, setFormClass2] = useState(classes);
  const [showForm2, setShowForm2] = useState(false);

  function handleInputChange2(event) {
    setFormClass2({
      ...formClass2,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit2(event) {
    event.preventDefault();
   
    const newClass = {
      id: nanoid(),
      ...formClass2
    };
    classes.push(newClass);
    setFormClass2({
      className: '',
      subject: '',
      description:'',
      classCode:''
    });
    
    setShowForm2(false);
  }

  return (
    <>
    <GlobalStyle/>
    <section className='quiz quiz-small'>
      <h1> Classes </h1>
      <div className="button-container">
        <button className="add-button" onClick={() => setShowForm2(true)}>Add Pastpaper</button>
        {showForm2 && (
          <div className="form-container">
            <form onSubmit={handleSubmit2} className='setup-form'>
              <div className='form-control'>
              <label>
                ClassName : 
                <input type="text" name="className" value={formClass2.className} onChange={handleInputChange2}  />
              </label></div>
              <div className='form-control'>
              <label>
                Subject :
                <input type="text" name="subject" value={formClass2.subject} onChange={handleInputChange2}  />
              </label></div>
              <div className='form-control'>
              <label>
                description
                <input type="text" name="description" value={formClass2.description} onChange={handleInputChange2} />
              </label></div>
              <div className='form-control'>
              <label>
                 ClassCode : 
                <input type="text" name="classCode" value={formClass2.classCode} onChange={handleInputChange2} />
              </label></div>
              <button type="submit" className='submit-btn'>Add </button>
            </form>
          </div>
        )}
      </div>
      </section>
    <div className="container">
       <ViewAllClass/>
    </div>
    </>
  );
};

export default AddClassForm;