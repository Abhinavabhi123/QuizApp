"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const admincController_1 = require("../controllers/admincController");
router.post("/login", admincController_1.login);
exports.default = router;
