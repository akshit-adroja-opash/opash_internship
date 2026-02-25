import { Router } from "express";
import { upload } from "../middleware/upload.middleware";
import { uploadImage } from "../controllers/media.controller";
import { verifyTokenMiddleware } from "../middleware/auth";

const router = Router();


router.post(
  "/upload-image-local", // http://localhost:5000/api/upload-image-local
  verifyTokenMiddleware,
  upload.single("image"),
  uploadImage
);

export default router;
