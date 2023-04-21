import Link from "next/link"



const Login_choice = () => (
    
    <>    
    <Link href='/teacherLogin'><button id="teacher-btn">Login as Teacher</button></Link>
    <Link href ='/studentLogin'><button id="student-btn">Login as Student</button></Link>
    <Link href ='/adminLogin'><button id="admin-btn">Login as Admin</button></Link>    
    
    </>

)

export default Login_choice