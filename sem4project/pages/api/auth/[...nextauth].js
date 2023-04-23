import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import { signIn } from 'next-auth/react';
import Google from 'next-auth/providers/google';
import GoogleProfile from 'next-auth/providers/google';



export default NextAuth({

  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),

    
],
secret: process.env.JWT_SECRET,
callbacks: {
  async signIn({user, account, profile}) {
    if(profile.email=="kupathsala@gmail.com"){
        return Promise.resolve(true);
    } else if (profile.email.endsWith("@gmail.com")) {
          return Promise.resolve(true);
      } else if (profile.email.endsWith("@student.ku.edu.np")) {
          return Promise.resolve(true);
      } else {
          return '/loginChoice';
      }            
  }
  },
})
