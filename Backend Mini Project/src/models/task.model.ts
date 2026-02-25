import mongoose, { Schema, model } from "mongoose";


interface ITask {
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  dueDate?: number; 
}

const taskSchema = new mongoose.Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    dueDate: { type: Number },
  },
  { timestamps: true } 
);


const Task = model<ITask>("Task", taskSchema);

export default Task;
