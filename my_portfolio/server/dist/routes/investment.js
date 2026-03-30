"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Investment_1 = __importDefault(require("../models/Investment"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = express_1.default.Router();
router.post("/", authMiddleware_1.default, async (req, res) => {
    try {
        const { name, amount, type, date, description } = req.body;
        const investment = await Investment_1.default.create({
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
router.get("/", authMiddleware_1.default, async (req, res) => {
    try {
        const investments = await Investment_1.default.find({ userId: req.userId })
            .sort({ date: -1 });
        res.json(investments);
    }
    catch (error) {
        console.error("Error fetching investments:", error);
        res.status(500).json({ message: "Failed to fetch investments" });
    }
});
router.put("/:id", authMiddleware_1.default, async (req, res) => {
    try {
        const updated = await Investment_1.default.findOneAndUpdate({
            _id: req.params.id, userId: req.userId
        }, req.body, { new: true });
        res.json(updated);
    }
    catch (error) {
        console.error("Error updating investment:", error);
        res.status(500).json({ message: "Update failed" });
    }
});
router.delete("/:id", authMiddleware_1.default, async (req, res) => {
    try {
        const deleted = await Investment_1.default.findOneAndDelete({
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
exports.default = router;
