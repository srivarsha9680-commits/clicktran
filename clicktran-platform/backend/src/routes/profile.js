const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

router.get("/:username", async (req, res) => {
    const user = await prisma.user.findUnique({
        where: { username: req.params.username },
        include: { links: true }
    });
    res.json(user);
});

module.exports = router;