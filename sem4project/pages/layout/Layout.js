import Navbar from "./Navbar";

import {useSession} from "next-auth/react";

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>            
        </>
    )
}