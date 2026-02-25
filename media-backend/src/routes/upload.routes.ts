import { Router, type Request, type Response, type NextFunction } from "express";
import multer from "multer";
import upload from "../middleware/upload";
import { deleteImage } from "../controllers/media.controller";
import { verifyTokenMiddleware, requireAdmin } from "../middleware/auth";
import type { AuthRequest } from "../middleware/auth";

const router = Router();


const handleUploadError = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      res.status(400).json({
        message: "Field name missing. Expected field name 'image'",
        error: err.message,
      });
      return;
    }
    res.status(400).json({
      message: "Upload error",
      error: err.message,
    });
    return;
  }
  if (err) {
    res.status(500).json({
      message: "Server error",
      error: (err as Error).message,
    });
    return;
  }
  next();
};


router.post(
  "/upload-image",
  verifyTokenMiddleware,
  upload.single("image"),
  handleUploadError,
  (req: AuthRequest, res: Response) => {
    if (!req.file) {
      res.status(400).json({
        message:
          "No file uploaded. Make sure to send the file with field name 'image'",
      });
      return;
    }

    
    const file = req.file as unknown as { secure_url: string };
    const imageUrl = file.secure_url;

    res.json({
      message: "Image uploaded to Cloudinary successfully",
      imageUrl: imageUrl,
    });
  }
);


router.delete(
  "/delete-image",
  verifyTokenMiddleware,
  requireAdmin,
  deleteImage
);

export default router;
