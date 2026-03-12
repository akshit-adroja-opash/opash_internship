<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const router = express_1.default.Router();
=======
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const router = express.Router();
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // 1️⃣ Check user exists
<<<<<<< HEAD
        const existingUser = await User_1.default.findOne({ email });
=======
        const existingUser = await User.findOne({ email });
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        // 2️⃣ Hash password
<<<<<<< HEAD
        const salt = await bcryptjs_1.default.genSalt(10);
        const hashedPassword = await bcryptjs_1.default.hash(password, salt);
        // 3️⃣ Save user
        const user = await User_1.default.create({
=======
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // 3️⃣ Save user
        const user = await User.create({
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
            name,
            email,
            password: hashedPassword,
        });
        res.status(201).json({
            message: "User registered successfully",
            userId: user._id,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
<<<<<<< HEAD
exports.default = router;
=======
export default router;
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        // 1️⃣ Check user
<<<<<<< HEAD
        const user = await User_1.default.findOne({ email });
=======
        const user = await User.findOne({ email });
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // 2️⃣ Compare password
<<<<<<< HEAD
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
=======
        const isMatch = await bcrypt.compare(password, user.password);
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // 3️⃣ Generate JWT
<<<<<<< HEAD
        const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
=======
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
