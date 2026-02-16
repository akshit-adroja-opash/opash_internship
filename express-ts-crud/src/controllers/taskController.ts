import { Request, Response } from "express";
import Task from "../models/taskModel";

// CREATE
export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;

  const newTask = await Task.create({ title });
  res.status(201).json(newTask);
};

// GET
export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// UPDATE
export const updateTask = async (req: Request, res: Response, next: Function) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!task) {
      const error = new Error("Task not found");
      (error as any).status = 404;
      return next(error);
    }

    res.json(task);

  } catch (error) {
    next(error);
  }
};


// DELETE
export const deleteTask = async (req: Request, res: Response) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted successfully" });
};
