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
router.get("/", authMiddleware_js_1.default, async (req, res) => {
    try {
        const incomes = await Income_js_1.default.find({ userId: req.userId })
            .sort({ date: -1 });
        res.json(incomes);
    }
    catch (error) {
        console.error("Error fetching incomes:", error);
        res.status(500).json({ message: "Failed to fetch incomes" });
    }
});
router.put("/:id", authMiddleware_js_1.default, async (req, res) => {
    try {
        const updated = await Income_js_1.default.findOneAndUpdate({
            _id: req.params.id, userId: req.userId
        }, req.body, { new: true });
        res.json(updated);
    }
    catch (error) {
        console.error("Error updating income:", error);
        res.status(500).json({ message: "Update failed" });
    }
});
router.delete("/:id", authMiddleware_js_1.default, async (req, res) => {
    try {
        const deleted = await Income_js_1.default.findOneAndDelete({
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
exports.default = router;
