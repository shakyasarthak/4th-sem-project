import React from 'react';
import Navbar from './Navbar';
import x from '/src/styles/About.module.css';

function Contact() {
  return (
    <>
    <Navbar/>
      <div class={x.about_wrapper}>
      <h1>THIS IS ABOUT PAGE</h1>
    </div>
    </>  
  );
}

export default Contact;
