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
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecret_1 = __importDefault(require("../data/jwtSecret"));
const pwdHash_1 = __importDefault(require("../data/pwdHash"));
const loginRouter = express_1.default.Router();
loginRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body)
        return res.status(401).json({ error: "Invalid request" });
    if (typeof req.body.password !== "string")
        return res.status(401).json({ error: "Invalid password" });
    const body = req.body;
    const passwordCorrect = yield bcryptjs_1.default.compare(body.password, pwdHash_1.default);
    if (!passwordCorrect) {
        return res.status(401).json({ error: "Password incorrect" });
    }
    const token = jsonwebtoken_1.default.sign({ user: "root" }, jwtSecret_1.default);
    res.status(200).send({ token, user: "root" });
    return null;
}));
exports.default = loginRouter;
