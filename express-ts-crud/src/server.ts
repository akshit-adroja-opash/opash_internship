import express from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorMiddleware";


const app = express();

app.use(express.json());
app.use(logger); 

mongoose.connect("mongodb://127.0.0.1:27017/taskDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/tasks", taskRoutes);
app.use(errorHandler);



app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

