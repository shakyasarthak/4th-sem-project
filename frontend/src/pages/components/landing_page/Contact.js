import React from 'react';
import Navbar from './Navbar';
import x from '/src/styles/Contact.module.css';

function Contact() {
  return (
    <>
    <Navbar/>
      <div class={x.contact_wrapper}>
      <h1>THIS IS CONTACT PAGE</h1>
    </div>
    </>  
  );
}

export default Contact;
