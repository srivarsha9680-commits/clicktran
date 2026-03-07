"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const linkController_1 = require("../controllers/linkController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// public click tracker (no auth)
router.post("/:id/click", linkController_1.recordClick);
// protected by JWT
router.get("/", auth_1.authenticate, linkController_1.getLinks);
router.post("/", auth_1.authenticate, linkController_1.createLink);
router.delete("/:id", auth_1.authenticate, linkController_1.deleteLink);
exports.default = router;
