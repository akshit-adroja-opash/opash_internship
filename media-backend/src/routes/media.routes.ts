import  { Router } from "express";
import {upload} from '../middleware/upload.middleware'
import {uploadImage} from "../controllers/media.controller";

const router = Router();
router.post (
    "/upload-image", // http://localhost:5000/api/upload-image
    upload.single("image"),
    uploadImage

);

export default router;



