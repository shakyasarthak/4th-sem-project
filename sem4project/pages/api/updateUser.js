
import { getSession } from "next-auth/client";
import prisma from './../../prisma/prisma';


export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    const { id, name, role } = req.body;

    try {
      const user = await prisma.user.update({
        where: { id },
        data: {
          name,
          role,
        },
      });

      switch (role) {
        case "STUDENT":
          await prisma.student.upsert({
            where: { user_id: id },
            update: { studentData: "" },
            create: { user_id: id, studentData: "" },
          });
          break;
        case "TEACHER":
          await prisma.teacher.upsert({
            where: { user_id: id },
            update: { teacherData: "" },
            create: { user_id: id, teacherData: "" },
          });
          break;
        case "ADMIN":
          await prisma.admin.upsert({
            where: { user_id: id },
            update: { adminData: "" },
            create: { user_id: id, adminData: "" },
          });
          break;
        default:
          throw new Error("Invalid role.");
      }

      res.status(200).json({ message: "User updated successfully." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
