// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, password, role } = req.body;

//     const existingUser = await prisma.user.findUnique({
//       where: { email },
//     });

//     if (existingUser) {
//       return res.status(409).json({ error: "Email already in use." });
//     }

//     const newUser = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password,
//         role,
//       },
//     });

//     return res.status(201).json(newUser);
//   }

//   return res.status(405).json({ error: "Method not allowed." });
// }

// pages/api/users.js

import prisma from "../../lib/prisma";
import { getSession } from "next-auth/client";

export default async function handle(req, res) {
  const session = await getSession({ req });

  if (!session || session.user.role !== "admin") {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  if (req.method === "POST") {
    const { name, email, password, role } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });

    res.json(user);
  } else if (req.method === "GET") {
    const users = await prisma.user.findMany();

    res.json(users);
  }
}

