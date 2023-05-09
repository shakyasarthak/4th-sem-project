import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      httpOptions: {
  timeout: 50000,
},

}),
],
//adapter: PrismaAdapter(prisma),
secret: process.env.JWT_SECRET,
callbacks: {
  async signIn({user, account, profile}) {
    if(profile.email=="kupathsala@gmail.com"){
      return Promise.resolve(true)
    } else if (profile.email.endsWith("@gmail.com")) {
      return Promise.resolve(true)
    } else if (profile.email.endsWith("@student.ku.edu.np")) {
      return Promise.resolve(true)
      //return '/s_dashboard';
    } else {
      return '/loginChoice';
    }
  },
},
};

export default NextAuth(authOptions)
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default NextAuth({
  //   providers: [
//     GoogleProvider({
//      clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_SECRET,
//     httpOptions: {
//       timrout: 50000,
//     },
    
//       }),
//     ],
//   secret: process.env.JWT_SECRET,
//   callbacks: {
//     async signIn(user, account, profile) {
//       const { email } = user;

//       const existingUser = await prisma.user.findUnique({
//         where: {
//           email,
//         },
//       });

//       if (!existingUser) {
//         // If the user doesn't exist in the database, create a new user with the default role of "student"
//         await prisma.user.create({
//           data: {
//             email,
//             role: "student",
//           },
//         });
//       } else {
//         // If the user already exists, assign the appropriate role based on their email domain
//         if (email.endsWith("@gmail.com")) {
//           existingUser.role = "teacher";
//         } else if (profile.email == "kupathsala@gmail.com")  {
//           existingUser.role = "admin";
//         } else if (profile.email.endsWith("@student.ku.edu.np")) { 
//           existingUser.role = "student";
//         }

//         await prisma.user.update({
//           where: {
//             email,
//           },
//           data: {
//             role: existingUser.role,
//           },
//         });
//       }

//       if(profile.email=="kupathsala@gmail.com"){
//               return '/adminDashboard';
//             } else if (profile.email.endsWith("@gmail.com")) {
//                 return '/t_dashboard';
//               } else if (profile.email.endsWith("@student.ku.edu.np")) {
//                   return '/s_dashboard';
//                 } else {
//                   return '/loginChoice';
//                 }
//          },
//   },
// });
