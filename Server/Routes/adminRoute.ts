import { Router, Request } from "express";
const router = Router();
import {login} from "../controllers/admincController"


router.post("/login",login)
export default router