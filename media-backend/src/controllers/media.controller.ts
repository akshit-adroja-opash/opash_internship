import type { Request, Response } from "express";
import path from "path";
import { resizeImage } from "../services/media.service";
import cloudinary from "../config/cloudinary";

export const uploadImage = async (req: Request, res: Response) => {
  try {
    // 1. Validation check
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // 2. Define paths
    const inputPath = req.file.path;
    const outputPath = path.join("uploads", `resize-${req.file.filename}`);

    // 3. Process image
    await resizeImage(inputPath, outputPath);

    // 4. Success response
    res.json({
      message: "Image uploaded and resized successfully",
      originalUrl: `http://localhost:5000/uploads/${req.file.filename}`,
      resizedUrl: `http://localhost:5000/uploads/resize-${req.file.filename}`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Something went wrong",
      details: error instanceof Error ? error.message : error,
    });

  }

};

export const  deleteImage  = async (req: Request, res: Response) => {
    try{
        const {public_id}  = req.body;

        if(!public_id){
            return res.status(400).json({
                message: "public id is required",
            });
        }
        const result = await cloudinary.uploader.destroy(public_id);

        res.json({
            message: "Image deleted successfully",
            result
        });

   } catch (error: unknown) { 
  if (error instanceof Error) {
    res.status(500).json({
      message: "server error",
      error: error.message, // Now safely recognized as a string
    });
  } else {
    res.status(500).json({ message: "An unknown error occurred" });
  }
   }
}

