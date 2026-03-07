import { Router } from "express";
import { getLinks, createLink, deleteLink, recordClick } from "../controllers/linkController";
import { authenticate } from "../middleware/auth";

const router = Router();

// public click tracker (no auth)
router.post("/:id/click", recordClick);

// protected by JWT
router.get("/", authenticate, getLinks);
router.post("/", authenticate, createLink);
router.delete("/:id", authenticate, deleteLink);

export default router;
