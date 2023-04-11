import React from 'react';
import Navbar from './Navbar';
import x from '/src/styles/Contact.module.css';

function Contact() {
  return (
    <>
    <Navbar/>
    <div class={x.outer_wrapper}> 
      <div class={x.contact_wrapper}>
      <h1>KNOW THE TEAM</h1>
    </div>
    <div class={x.info_box}>
      This is box
    </div>
    </div>     
    </>  
  );
}

export default Contact;
