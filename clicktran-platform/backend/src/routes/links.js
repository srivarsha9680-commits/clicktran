const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
    const link = await prisma.link.create({
        data: req.body
    });
    res.json(link);
});

router.post("/:id/click", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    await prisma.link.update({
        where: { id },
        data: { clicks: { increment: 1 } }
    });
    res.json({ success: true });
});

module.exports = router;