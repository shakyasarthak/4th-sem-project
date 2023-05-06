const { default: NextCors } = require("nextjs-cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        origin: "*",
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    if (req.method !== "POST") {
        const users = await prisma.user.findMany();
        return res.status(200).json({users});
    }
    if (req.method == "POST") {
        const { name, email } = req.body;
        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: name
            }
        });
        return res.status(200).json(newUser);
    }
}
