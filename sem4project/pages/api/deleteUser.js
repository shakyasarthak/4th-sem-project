import { getSession } from "next-auth/client";
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    const { id } = req.body;

    try {
      await prisma.admin.delete({ where: { user_id: id } });
      await prisma.teacher.delete({ where: { user_id: id } });
      await prisma.student.delete({ where: { user_id: id } });
      await prisma.user.delete({ where: { id } });

      res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
