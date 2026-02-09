import jwt from "jsonwebtoken";
import type {  Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  userId?: string;
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ message: "Token invalid" });
  }
};

export default authMiddleware;
