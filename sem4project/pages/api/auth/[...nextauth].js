import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
// const prisma = new PrismaClient()

export default NextAuth({
providers: [
GoogleProvider({
 clientId: process.env.GOOGLE_ID,
clientSecret: process.env.GOOGLE_SECRET,
httpOptions: {
  timrout: 50000,
},

  }),
],
// adapter: PrismaAdapter(prisma),
secret: process.env.JWT_SECRET,
callbacks: {
async signIn({user, account, profile}) {
if(profile.email=="kupathsala@gmail.com"){
     return '/adminDashboard';
   } else if (profile.email.endsWith("@gmail.com")) {
       return '/t_dashboard';
     } else if (profile.email.endsWith("@student.ku.edu.np")) {
        return '/s_dashboard';
   } else {
         return '/loginChoice';
       }
 },
 },
})

