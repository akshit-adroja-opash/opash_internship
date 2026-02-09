import express from "express";
import Income from "../models/Income.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { title, amount, category, date } = req.body;
        const income = await Income.create({
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
router.get("/", authMiddleware, async (req, res) => {
    try {
        const incomes = await Income.find({ userId: req.userId })
            .sort({ date: -1 });
        res.json(incomes);
    }
    catch (error) {
        console.error("Error fetching incomes:", error);
        res.status(500).json({ message: "Failed to fetch incomes" });
    }
});
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const updated = await Income.findOneAndUpdate({
            _id: req.params.id, userId: req.userId
        }, req.body, { new: true });
        res.json(updated);
    }
    catch (error) {
        console.error("Error updating income:", error);
        res.status(500).json({ message: "Update failed" });
    }
});
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const deleted = await Income.findOneAndDelete({
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
export default router;
