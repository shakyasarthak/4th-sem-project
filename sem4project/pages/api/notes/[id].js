import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const id = Number(req.query.id);
    
    if (req.method === 'PUT') {
        // Handle updating an existing note
        const { title, content } = req.body
        const note = await prisma.note.update({
          where: { id },
          data: { title, content }
        })
        res.status(200).json(note)
      } else if (req.method === 'DELETE') {
        // Handle deleting an existing note
        const note = await prisma.note.delete({
          where: { id }
        })
        res.status(200).json(note)
      }
  }