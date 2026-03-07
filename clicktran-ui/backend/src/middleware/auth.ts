import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ message: "No token" });
    const token = header.split(" ")[1];
    try {
        const payload: any = jwt.verify(token, process.env.JWT_SECRET || "secret");
        res.locals.userId = payload.userId;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
