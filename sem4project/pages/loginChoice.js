import Link from "next/link"
import Layout from './layout/Layout';



const Login_choice = () => (
    
    <>  
    <Layout navbarType={1}> 
    <Link href='/teacherLogin'><button id="teacher-btn">Login as Teacher</button></Link>
    <Link href ='/studentLogin'><button id="student-btn">Login as Student</button></Link>
    <Link href ='/adminLogin'><button id="admin-btn">Login as Admin</button></Link>    
    </Layout> 
    </>

)

export default Login_choice