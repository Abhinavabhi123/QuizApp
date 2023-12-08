"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv.config();
const userRoute_1 = __importDefault(require("./Routes/userRoute"));
const adminRoute_1 = __importDefault(require("./Routes/adminRoute"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json({ limit: '100mb' }));
app.use(express_1.default.urlencoded({ limit: '100mb', extended: false }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN,
    methods: process.env.CORS_METHODS,
    credentials: true
}));
(0, db_1.default)();
app.use("/", userRoute_1.default);
app.use("/admin", adminRoute_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
