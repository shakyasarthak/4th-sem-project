// import React from "react";
// import {signIn } from "next-auth/react";

// const Login_choice = () => {
//     return(
//         <div>
//             <h1>Choose your login</h1>
//             <button onClick={() => {signIn('google', {callbackUrl: '/s_dashboard'})}}>Student</button>
//             <button onClick={() => {signIn('google', {callbackUrl: '/adminDashboard'})}}>ADMIN</button>
//             <button onClick={() => {signIn('google', {callbackUrl: '/t_dashboard'})}}>Teacher</button>
//         </div>
//     )
// }


// export default Login_choice
// // function Home () {
// //     return <></>
// // }
  
// // export default Home


import React from "react";
import { signIn } from "next-auth/react";

const LoginChoice = () => {
  return (
    <div className="container">
      <h1>Choose Your Login</h1>
      <div className="buttons">
        <button onClick={() => signIn("google", { callbackUrl: "/s_dashboard" })}>
          Student Login
        </button>
        <button onClick={() => signIn("google", { callbackUrl: "/t_dashboard" })}>
          Teacher Login
        </button>
        {/* <button onClick={() => signIn("google", { callbackUrl: "/adminDashboard" })}>
          Admin Login
        </button> */}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 2rem;
        }
        .buttons {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 5px;
          background-color: #4c75f2;
          color: white;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #3264c4;
        }
        button:active {
          background-color: #254293;
        }
      `}</style>
    </div>
  );
};

export default LoginChoice;
