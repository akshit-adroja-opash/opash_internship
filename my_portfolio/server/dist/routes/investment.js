<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Investment_js_1 = __importDefault(require("../models/Investment.js"));
const authMiddleware_js_1 = __importDefault(require("../middleware/authMiddleware.js"));
const router = express_1.default.Router();
router.post("/", authMiddleware_js_1.default, async (req, res) => {
    try {
        const { name, amount, type, date, description } = req.body;
        const investment = await Investment_js_1.default.create({
=======
import express from "express";
import Investment from "../models/Investment.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { name, amount, type, date, description } = req.body;
        const investment = await Investment.create({
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
            userId: req.userId,
            name,
            amount,
            type,
            date,
            description,
        });
        res.status(201).json({ message: "Investment added successfully", investment });
    }
    catch (error) {
        console.error("Error adding investment:", error);
        res.status(500).json({ message: "Failed to add investment" });
    }
});
<<<<<<< HEAD
router.get("/", authMiddleware_js_1.default, async (req, res) => {
    try {
        const investments = await Investment_js_1.default.find({ userId: req.userId })
=======
router.get("/", authMiddleware, async (req, res) => {
    try {
        const investments = await Investment.find({ userId: req.userId })
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
            .sort({ date: -1 });
        res.json(investments);
    }
    catch (error) {
        console.error("Error fetching investments:", error);
        res.status(500).json({ message: "Failed to fetch investments" });
    }
});
<<<<<<< HEAD
router.put("/:id", authMiddleware_js_1.default, async (req, res) => {
    try {
        const updated = await Investment_js_1.default.findOneAndUpdate({
=======
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const updated = await Investment.findOneAndUpdate({
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
            _id: req.params.id, userId: req.userId
        }, req.body, { new: true });
        res.json(updated);
    }
    catch (error) {
        console.error("Error updating investment:", error);
        res.status(500).json({ message: "Update failed" });
    }
});
<<<<<<< HEAD
router.delete("/:id", authMiddleware_js_1.default, async (req, res) => {
    try {
        const deleted = await Investment_js_1.default.findOneAndDelete({
=======
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const deleted = await Investment.findOneAndDelete({
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
            _id: req.params.id,
            userId: req.userId,
        });
        if (!deleted) {
            return res.status(404).json({ message: "Investment not found" });
        }
        res.json({ message: "Investment deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting investment:", error);
        res.status(500).json({ message: "Failed to delete investment" });
    }
});
<<<<<<< HEAD
exports.default = router;
=======
export default router;
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
