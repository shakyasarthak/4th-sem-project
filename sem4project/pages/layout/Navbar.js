import React from 'react';
import x from '/styles/Navbar.module.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { useState } from 'react';
import {SessionProvider} from 'next-auth/react';
import Image from 'next/image';
import logo from '/public/logo.svg';

const Navbar =() => {
  const { data: session, status } = useSession();
  console.log(session)

  let userEmail = " ";

  if (status === "authenticated") {
      userEmail = session.user.email;
  }
  return (
    <nav>

      <div className={x.nav_bar_wrapper}>
        <div className={x.logo}>
        <Image src={logo} alt="" width='100' />
        </div>
        <div className={x.nav_bar}>
          {status ==  "unauthenticated" && <Link class ={x.menu} href ="/">HOME</Link>}
          {status == "unauthenticated" && <Link class ={x.menu} href ='/About'>ABOUT</Link>}
          {status == "unauthenticated" && <Link class ={x.menu} href ="/Contact">CONTACT</Link>}
          {/* {status == "unauthenticated" && <Link class ={x.menu} href ="/addpastPaper">Pastpaper</Link>} */}
          
          {/* {userEmail.endsWith("@student.ku.edu.np") && <Link class ={x.menu} href ="/s_dashboard">DASHBOARD</Link>}
          {userEmail.endsWith("@gmail.com") && <Link class ={x.menu} href ="/t_dashboard">DASHBOARD</Link>}
          {status == "authenticated" && <Link class = {x.menu} href="/addpastPaper">PAST PAPER</Link>}
          {status == "authenticated" && <Link class = {x.menu} href="/notes">MY NOTES</Link>}
          {userEmail.endsWith("@student.ku.edu.np") && <Link href="">WELCOME {session.user.name}</Link>}
          {userEmail.endsWith("@gmail.com") && <Link href="">WELCOME {session.user.name}</Link>}
         */}
        </div>
         <div className={x.Nav_bar}>
         {userEmail.endsWith("@student.ku.edu.np") && <Link class ={x.menu} href ="/s_dashboard">DASHBOARD</Link>}
          {userEmail.endsWith("@gmail.com") && <Link class ={x.menu} href ="/t_dashboard">DASHBOARD</Link>}
          {status == "authenticated" && <Link class = {x.menu} href="/addpastPaper">PAST PAPER</Link>}
          {status == "authenticated" && <Link class = {x.menu} href="/notes">MY NOTES</Link>}
          {status == "authenticated" && <Link class = {x.menu} href="/Quiz_final">QUIZZES</Link>}
          {userEmail.endsWith("@student.ku.edu.np") && <Link href="">WELCOME {session.user.name}</Link>}
          {userEmail.endsWith("@gmail.com") && <Link href="">WELCOME {session.user.name}</Link>}

         </div>
        <div className={x.logins}>
        {status == "unauthenticated" && <Link href="/loginChoice">
            <button className={x.btn}>
              LOGIN
            </button></Link>} 
            {status == "authenticated" && <Link href="/">
            <button className={x.btn} onClick={() => signOut({ callbackUrl: '/' })}>
              LOGOUT
            </button></Link>}
         
        </div>
    </div>
    </nav>
  );
}

export default Navbar;

