import express from "express";
import uploadRoutes from "./routes/upload.routes";

const app = express();

app.use(express.json());
app.use("/api", uploadRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});