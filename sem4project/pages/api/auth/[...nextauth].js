// // import NextAuth from 'next-auth'
// // import GoogleProvider from "next-auth/providers/google";
// // // import prisma from './../../../prisma/prisma';
// // import { PrismaAdapter } from "@next-auth/prisma-adapter"
// // import { PrismaClient } from "@prisma/client"

// // const prisma = new PrismaClient()

// // export default NextAuth({

// // providers: [
// //     GoogleProvider({
// //         clientId: process.env.GOOGLE_ID,
// //         clientSecret: process.env.GOOGLE_SECRET,
// //     }),
// // ],
// // adapter: PrismaAdapter(prisma),
// // secret: process.env.JWT_SECRET,
// // // callbacks: {
// // //   async signIn({user, account, profile}) {
// // //     if(profile.email=="kupathsala@gmail.com"){
// // //         return '/adminDashboard';
// // //     } else if (profile.email.endsWith("@gmail.com")) {
// // //           return '/t_dashboard';
// // //       } else if (profile.email.endsWith("@student.ku.edu.np")) {
// // //           return '/s_dashboard';
// // //       } else {
// // //           return '/loginChoice';
// // //       }
// // //   },
// // // },
// // })

// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   adapter: PrismaAdapter(prisma),
// })

// import NextAuth from "next-auth";
// import TwitchProvider from "next-auth/providers/twitch";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// // Enable studio auth in development mode
// const cookiesPolicy =
//   process.env.NODE_ENV === "development"
//     ? {
//         sessionToken: {
//           name: `_Secure_next-auth.session-token`,
//           options: {
//             httpOnly: true,
//             sameSite: "None",
//             path: "/",
//             secure: true,
//           },
//         },
//       }
//     : {};

// const prisma = new PrismaClient();

// export default NextAuth({
//   secret: process.env.AUTH_SECRET,
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     // TwitchProvider({
//     //   clientId: process.env.PROVIDER_TWITCH_CLIENT_ID,
//     //   clientSecret: process.env.PROVIDER_TWITCH_CLIENT_SECRET,
//     // }),
//     // GitHubProvider({
//     //   clientId: process.env.PROVIDER_GITHUB_ID,
//     //   clientSecret: process.env.PROVIDER_GITHUB_SECRET,
//     // }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   cookies: cookiesPolicy,
// });

import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  adapter: PrismaAdapter(prisma),

  secret: process.env.SECRET,
};

export default (req, res) => NextAuth(req, res, options);
