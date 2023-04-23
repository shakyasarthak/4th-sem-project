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