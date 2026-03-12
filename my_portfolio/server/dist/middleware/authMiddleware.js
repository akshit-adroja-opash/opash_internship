<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
=======
import jwt from "jsonwebtoken";
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "No token, access denied" });
    }
    try {
<<<<<<< HEAD
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
=======
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
        req.userId = decoded.id;
        next();
    }
    catch {
        res.status(401).json({ message: "Token invalid" });
    }
};
<<<<<<< HEAD
exports.default = authMiddleware;
=======
export default authMiddleware;
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
