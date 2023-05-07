import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Handle creating a new note
      const { title, content } = req.body
      const note = await prisma.note.create({
        data: { title, content }
      })
      res.status(201).json(note)
    } else if (req.method === 'GET') {
      // Handle fetching all notes
      const notes = await prisma.note.findMany()
      res.status(200).json(notes)
    } else if (req.method === 'PUT') {
      // Handle updating an existing note
      const { id, title, content } = req.body
      const note = await prisma.note.update({
        where: { id },
        data: { title, content }
      })
      res.status(200).json(note)
    } else if (req.method === 'DELETE') {
      // Handle deleting an existing note
      const { id } = req.body
      const note = await prisma.note.delete({
        where: { id }
      })
      res.status(200).json(note)
    }
  }