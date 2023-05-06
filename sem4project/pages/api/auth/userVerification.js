// import { PrismaClient } from '@prisma/client'
// import { getSession } from 'next-auth/client'

// const prisma = new PrismaClient()

// export default async function handleNextAuth(req, res) {
//   const session = await getSession({ req })

//   // check if user is logged in
//   if (!session) {
//     res.status(401).json({ error: 'Unauthorized' })
//     return
//   }

//   const email = session.user.email
//   const name = session.user.name

//   let isTeacher = email.endsWith('@gmail.com')
//   let isStudent = email.endsWith('@student.ku.edu.np')

//   if (isTeacher) {
//     await prisma.teacher.create({
//       data: {
//         email: email,
//         name: name
//       }
//     })
//   } else if (isStudent) {
//     await prisma.student.create({
//       data: {
//         email: email,
//         name: name
//       }
//     })
//   }

//   res.status(200).json({ success: true })
// }


