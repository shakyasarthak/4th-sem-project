import BottomHomeWrapper from "./BottomHomeWrappper";
import Navbar from "./Navbar";

import {useSession} from "next-auth/react";

export default function Layout({children}) {
    return (
        <>
            <div className="min-h-screen">
            <Navbar />
            <main>{children}</main> 
            <BottomHomeWrapper/>           
            </div>
        </>
    )
}

