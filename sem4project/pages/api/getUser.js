import { getSession } from "next-auth/client";
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        student: true,
        teacher: true,
        admin: true,
      },
    });

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}