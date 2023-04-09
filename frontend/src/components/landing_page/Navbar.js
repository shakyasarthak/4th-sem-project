import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <nav>
      <div class="nav-bar-wrapper">
      <div class="logo">
       this is logo
      </div>
      <div class="nav-bar">
        <a class="menu" href="#"><b>HOME</b></a>
        <a class="menu" href="#"><b>ABOUT</b></a>
        <a class="menu" href="#"><b>CONTACT</b></a>
      </div>
      <div class="logins">
        <a href="#">
          <button class="btn">
            LOGIN
          </button></a
        >
        <a href="#"
          ><button class="btn" >
            SIGN UP
          </button></a
        >
      </div>
    </div>
    </nav>
  );
}

export default Navbar;