import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/upload.routes";
import mediaRoutes from "./routes/media.routes";
import authRoutes from "./routes/auth.routes";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();


app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(join(__dirname, "..", "uploads")));

// Routes
app.use("/api", authRoutes);
app.use("/api", uploadRoutes);
app.use("/api", mediaRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
