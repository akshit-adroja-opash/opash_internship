<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const incomeSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
=======
import mongoose from "mongoose";
const incomeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: ["salary", "freelance", "business", "investment", "other"],
        default: "other",
    },
    date: {
        type: Date,
        required: true,
    },
}, { timestamps: true });
<<<<<<< HEAD
const Income = mongoose_1.default.model("Income", incomeSchema);
exports.default = Income;
=======
const Income = mongoose.model("Income", incomeSchema);
export default Income;
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
