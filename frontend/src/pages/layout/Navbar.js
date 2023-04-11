import React from 'react';
import x from '/src/styles/Navbar.module.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar =() => {
  return (
    // <nav>
    //   <div className={x.nav_bar_wrapper}>
    //   <div className={x.logo}>
    //    this is logo
    //   </div>
    //   <div className={x.nav_bar}>
    //     <Link class ={x.menu} href ="/">HOME</Link>
    //     <Link class ={x.menu} href ="/components/landing_page/About">ABOUT</Link>
    //     <Link class ={x.menu} href ="/components/landing_page/Contact">CONTACT</Link>
    //   </div>
    //   <div className={x.logins}>
    //   <Link href="#">
    //       <button className={x.btn}>
    //         LOGIN
    //       </button></Link>
    //     <Link href="#"
    //       ><button className={x.btn} >
    //         SIGN UP
    //       </button></Link>
    //   </div>
    // </div>
    // </nav>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse justify-content-center navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/components/landing_page/Contact">CONTACT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/components/landing_page/About">ABOUT</Link>
        </li>
        
     
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;