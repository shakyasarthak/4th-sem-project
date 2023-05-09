import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Handle creating a new note
      const { title, content, email } = req.body
      const note = await prisma.note.create({
        data: { title, content, author: { connect: { email } }}
      })
      res.status(201).json(note)
    } else if (req.method === 'GET') {
      // Handle fetching all notes
      console.log(req.query.email)
      const notes = await prisma.note.findMany({
        where: {author: {email: req.query.email}}
      }
)
      res.status(200).json(notes)
    }
  }