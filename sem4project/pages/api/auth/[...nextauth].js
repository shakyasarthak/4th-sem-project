import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

import clientPromise from "@/lib/dbConnect";



export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: {
                label: 'Username',
                type: 'text',
                placeholder: 'username'
              },
              password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
              const { email, password } = credentials
              const user = await loginUser(email, password)
       
              if (user) {
                return user
              } else {
                return null
              }
            }
        })
    ]
})

async function loginUser(email, password){
    const client = await clientPromise
    const db = client.db("logins")
    const student = db.collection("student")
    const result = await student
        .find({'Email': email, 'Password': password})
    return result
}
