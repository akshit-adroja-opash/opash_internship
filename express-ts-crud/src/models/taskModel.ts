import mongoose, { Document, Schema } from "mongoose";

export interface Task extends Document {
  title: string;
  completed: boolean;
}

const taskSchema: Schema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const Task = mongoose.model<Task>("Task", taskSchema);

export default Task;
