import { Request, Response } from "express";
import { Task } from "../models/task.model";
import { User } from "../models/user.model";

// Create Task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, userId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const task = await Task.create({
      title,
      user: userId
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get All Tasks with Populate
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find().populate("user");

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
