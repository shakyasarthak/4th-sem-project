import Layout from './layout/Layout';
import { getSession, useSession } from "next-auth/react";
import prisma from './../prisma/prisma';


//get the server side prop
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
if (session.user.email !== "kupathsala@gmail.com") {
    return {
        redirect: {
            destination: '/adminLogin',
            permanent: false,
        },
    }
}
  const {user} = session;

  const status = await prisma.User.upsert({
    create: {
      email: user.email,
      role: "admin",
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
    
    <div>THIS IS ADMIN DASHBOARD</div>

    </>
}
  
export default Home