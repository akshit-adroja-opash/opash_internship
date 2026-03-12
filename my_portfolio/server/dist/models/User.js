<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
=======
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });
<<<<<<< HEAD
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
=======
const User = mongoose.model("User", userSchema);
export default User;
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
