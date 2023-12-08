import { Router, Request } from "express";
const router = Router();
import {userLogin,register} from "../controllers/userController"

router.post("/login",userLogin)
router.post("/register",register)

export default router