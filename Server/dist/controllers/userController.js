"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.userLogin = void 0;
const UserModel_1 = __importDefault(require("../Model/UserModel"));
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield UserModel_1.default.findOne({ email: email });
        if (!user) {
            res.status(500).send("Un authorized");
        }
        else {
            res.status(200).send(user);
        }
    }
    catch (error) {
        console.error(error);
    }
});
exports.userLogin = userLogin;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        yield new UserModel_1.default({
            email: email,
            password: password,
        }).save().then(() => {
            res.status(200).send("success");
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.register = register;
