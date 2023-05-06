import React from "react";
import {signIn } from "next-auth/react";

const Login_choice = () => {
    return(
        <div>
            <h1>Choose your login</h1>
            <button onClick={() => {signIn('google', {callbackUrl: '/s_dashboard'})}}>Student</button>
            <button onClick={() => {signIn('google', {callbackUrl: '/adminDashboard'})}}>ADMIN</button>
            <button onClick={() => {signIn('google', {callbackUrl: '/t_dashboard'})}}>Teacher</button>
        </div>
    )
}


export default Login_choice
// function Home () {
//     return <></>
// }
  
// export default Home