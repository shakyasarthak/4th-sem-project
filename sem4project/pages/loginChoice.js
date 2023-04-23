

import React from "react";
import { useSession, signIn } from "next-auth/react";

const Login_choice = () => {
    return(
        <div>
            <h1>Choose your login</h1>
            <button onClick={() => {signIn('google')}}>Student</button>
            <button>Admin</button>
            <button onClick={() => {signIn('google')}}>Teacher</button>
        </div>
    )
}


export default Login_choice
// function Home () {
//     return <></>
// }
  
// export default Home