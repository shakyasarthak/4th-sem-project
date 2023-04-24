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

// import Navbar from "./Navbar";
// import NavbarUser from "./Navbar";
// import NavbarAdmin from "./Navbar";

// const Layout = ({ children, navbarType }) => {
//     return (
//         <div>
//             { navbarType == 1 &&  <Navbar />}
//             { navbarType == 2 &&  <NavbarUser />}
//             { navbarType == 3 &&  <NavbarAdmin />}
//             {children}
           
//         </div>
//     );
// }

// export default Layout;