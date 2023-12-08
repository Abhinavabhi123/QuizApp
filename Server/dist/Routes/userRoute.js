"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController_1 = require("../controllers/userController");
router.post("/login", userController_1.userLogin);
router.post("/register", userController_1.register);
exports.default = router;
