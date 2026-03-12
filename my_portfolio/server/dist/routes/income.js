<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Income_js_1 = __importDefault(require("../models/Income.js"));
const authMiddleware_js_1 = __importDefault(require("../middleware/authMiddleware.js"));
const router = express_1.default.Router();
router.post("/", authMiddleware_js_1.default, async (req, res) => {
    try {
        const { title, amount, category, date } = req.body;
        const income = await Income_js_1.default.create({
=======
import express from "express";
import Income from "../models/Income.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { title, amount, category, date } = req.body;
        const income = await Income.create({
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
            userId: req.userId,
            title,
            amount,
            category,
            date,
        });
        res.status(201).json({ message: "Income added successfully", income });
    }
    catch (error) {
        console.error("Error adding income:", error);
        res.status(500).json({ message: "Failed to add income" });
    }
});
<<<<<<< HEAD
router.get("/", authMiddleware_js_1.default, async (req, res) => {
    try {
        const incomes = await Income_js_1.default.find({ userId: req.userId })
=======
router.get("/", authMiddleware, async (req, res) => {
    try {
        const incomes = await Income.find({ userId: req.userId })
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
            .sort({ date: -1 });
        res.json(incomes);
    }
    catch (error) {
        console.error("Error fetching incomes:", error);
        res.status(500).json({ message: "Failed to fetch incomes" });
    }
});
<<<<<<< HEAD
router.put("/:id", authMiddleware_js_1.default, async (req, res) => {
    try {
        const updated = await Income_js_1.default.findOneAndUpdate({
=======
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const updated = await Income.findOneAndUpdate({
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
            _id: req.params.id, userId: req.userId
        }, req.body, { new: true });
        res.json(updated);
    }
    catch (error) {
        console.error("Error updating income:", error);
        res.status(500).json({ message: "Update failed" });
    }
});
<<<<<<< HEAD
router.delete("/:id", authMiddleware_js_1.default, async (req, res) => {
    try {
        const deleted = await Income_js_1.default.findOneAndDelete({
=======
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const deleted = await Income.findOneAndDelete({
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
            _id: req.params.id,
            userId: req.userId,
        });
        if (!deleted) {
            return res.status(404).json({ message: "Income not found" });
        }
        res.json({ message: "Income deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting income:", error);
        res.status(500).json({ message: "Failed to delete income" });
    }
});
<<<<<<< HEAD
exports.default = router;
=======
export default router;
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
