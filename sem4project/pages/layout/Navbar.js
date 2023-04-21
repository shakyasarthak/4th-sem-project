import React from 'react';
import x from '/styles/Navbar.module.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar =() => {
  return (
    <nav>
      <div className={x.nav_bar_wrapper}>
        <div className={x.logo}>
        this is logo
        </div>
        <div className={x.nav_bar}>
          <Link class ={x.menu} href ="/">HOME</Link>
          <Link class ={x.menu} href ='/About'>ABOUT</Link>
          <Link class ={x.menu} href ="/Contact">CONTACT</Link>
        </div>
        <div className={x.logins}>
        <Link href="/loginChoice">
            <button className={x.btn}>
              LOGIN
            </button></Link>
         
        </div>
    </div>
    </nav>
  );
}

export default Navbar;

export const NavbarUser =() => {
  return (
    <nav>
      <div className={x.nav_bar_wrapper}>
        <div className={x.logo}>
        this is logo
        </div>
        <div className={x.nav_bar}>
          <Link class ={x.menu} href ="/">HOME</Link>
          <Link class ={x.menu} href ='/About'>ABOUT</Link>
          <Link class ={x.menu} href ="/Contact">CONTACT</Link>
        </div>
        <div className={x.logins}>
        <Link href="/loginChoice">
            <button className={x.btn}>
              LOGIN
            </button></Link>
         
        </div>
    </div>
    </nav>
  );
}

export const NavbarAdmin =() => {
  return (
    <nav>
      <div className={x.nav_bar_wrapper}>
        <div className={x.logo}>
        this is logo
        </div>
        <div className={x.nav_bar}>
          <Link class ={x.menu} href ="/">ADD PAPERS</Link>
          <Link class ={x.menu} href ='#'>ADD USER</Link>
          <Link class ={x.menu} href ="#">STAT</Link>
        </div>
        <div className={x.logins}>
        <Link href="/Home">
            <button className={x.btn}>
              LOGOUT
            </button></Link>
         
        </div>
    </div>
    </nav>
  );
}

