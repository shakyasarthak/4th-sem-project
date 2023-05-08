import { getSession } from "next-auth/client";
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    const { email, name, role } = req.body;

    try {
      const user = await prisma.user.create({
        data: {
          email,
          name,
          role,
        },
      });

      switch (role) {
        case "STUDENT":
          await prisma.student.create({
            data: {
              user_id: user.id,
              studentData: "",
            },
          });
          break;
        case "TEACHER":
          await prisma.teacher.create({
            data: {
              user_id: user.id,
              teacherData: "",
            },
          });
          break;
        case "ADMIN":
          await prisma.admin.create({
            data: {
              user_id: user.id,
              adminData: "",
            },
          });
          break;
        default:
            throw new Error("Invalid role");
        }

        res.status(200).json({ message: "User created successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }   
}
