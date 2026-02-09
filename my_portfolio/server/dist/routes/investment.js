import express from "express";
import Investment from "../models/Investment.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { name, amount, type, date, description } = req.body;
        const investment = await Investment.create({
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
router.get("/", authMiddleware, async (req, res) => {
    try {
        const investments = await Investment.find({ userId: req.userId })
            .sort({ date: -1 });
        res.json(investments);
    }
    catch (error) {
        console.error("Error fetching investments:", error);
        res.status(500).json({ message: "Failed to fetch investments" });
    }
});
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const updated = await Investment.findOneAndUpdate({
            _id: req.params.id, userId: req.userId
        }, req.body, { new: true });
        res.json(updated);
    }
    catch (error) {
        console.error("Error updating investment:", error);
        res.status(500).json({ message: "Update failed" });
    }
});
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const deleted = await Investment.findOneAndDelete({
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
export default router;
