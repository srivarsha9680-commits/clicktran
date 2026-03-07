"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordClick = exports.deleteLink = exports.createLink = exports.getLinks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getLinks = async (req, res) => {
    const userId = res.locals.userId;
    try {
        const links = await prisma.link.findMany({ where: { userId } });
        res.json(links);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
exports.getLinks = getLinks;
const createLink = async (req, res) => {
    const userId = res.locals.userId;
    const { title, url } = req.body;
    try {
        const link = await prisma.link.create({ data: { title, url, userId } });
        res.json(link);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
exports.createLink = createLink;
const deleteLink = async (req, res) => {
    const userId = res.locals.userId;
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? parseInt(idParam[0], 10) : parseInt(idParam, 10);
    try {
        await prisma.link.deleteMany({ where: { id, userId } });
        res.json({ success: true });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
exports.deleteLink = deleteLink;
const recordClick = async (req, res) => {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? parseInt(idParam[0], 10) : parseInt(idParam, 10);
    try {
        const click = await prisma.click.create({ data: { linkId: id } });
        res.json(click);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
exports.recordClick = recordClick;
