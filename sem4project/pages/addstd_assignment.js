import Layout from './layout/Layout';
import { getSession, useSession } from "next-auth/react";
import prisma from './../prisma/prisma';


//get the server side prop to create a student in the database
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
        redirect: {
            destination: '/loginChoice',
            permanent: false,
        },
    }
}
  const {user} = session;

  const status = await prisma.User.upsert({
    create: {
      email: user.email,
      role: user.email.endsWith("@student.ku.edu.np") ? "student" : "teacher",
    },
    update: {},
    where: {email: user.email || ""}
  });
  return {
    props: { status },
  };
}
function Home () {
    return <>
    
    <div>add std assignment</div>

    </>
}
  
export default Home