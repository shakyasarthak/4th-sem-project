import React from 'react';
import x from '/src/styles/Navbar.module.css';
import Link from 'next/link';


const Navbar =() => {
  return (
    <nav>
      <div class={x.nav_bar_wrapper}>
      <div class={x.logo}>
       this is logo
      </div>
      <div class={x.nav_bar}>
        <Link class ={x.menu} href ="/">HOME</Link>
        <Link class ={x.menu} href ="/components/landing_page/About">ABOUT</Link>
        <Link class ={x.menu} href ="/components/landing_page/Contact">CONTACT</Link>
      </div>
      <div class={x.logins}>
      <Link href="#">
          <button class={x.btn}>
            LOGIN
          </button></Link>
        <Link href="#"
          ><button class={x.btn} >
            SIGN UP
          </button></Link>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;