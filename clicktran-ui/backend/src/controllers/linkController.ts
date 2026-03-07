import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getLinks = async (req: Request, res: Response) => {
    const userId = res.locals.userId;
    try {
        const links = await prisma.link.findMany({ where: { userId } });
        res.json(links);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

export const createLink = async (req: Request, res: Response) => {
    const userId = res.locals.userId;
    const { title, url } = req.body;
    try {
        const link = await prisma.link.create({ data: { title, url, userId } });
        res.json(link);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

export const deleteLink = async (req: Request, res: Response) => {
    const userId = res.locals.userId;
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? parseInt(idParam[0], 10) : parseInt(idParam, 10);
    try {
        await prisma.link.deleteMany({ where: { id, userId } });
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
export const recordClick = async (req: Request, res: Response) => {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? parseInt(idParam[0], 10) : parseInt(idParam, 10);
    try {
        const click = await prisma.click.create({ data: { linkId: id } });
        res.json(click);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};