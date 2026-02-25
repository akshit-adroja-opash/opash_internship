import { Router, type Request, type Response } from "express";
import {
  createUser,
  findUserByUsername,
  verifyPassword,
  getAllUsers,
} from "../models/user.model";
import { generateToken } from "../utils/jwt";
import type { IPayload } from "../utils/jwt";
import { verifyTokenMiddleware, requireAdmin } from "../middleware/auth";
import type { AuthRequest } from "../middleware/auth";

const router = Router();

// Registration endpoint
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;

    // Validate required fields
    if (!username || !email || !password) {
      res.status(400).json({
        message: "Username, email, and password are required",
      });
      return;
    }

    // Validate password length
    if (password.length < 6) {
      res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        message: "Invalid email format",
      });
      return;
    }

    // Create user (default role is "user", unless admin creates it)
    const userRole = role === "admin" ? "admin" : "user";
    const newUser = await createUser(username, email, password, userRole);

    // Generate token
    const payload: IPayload = {
      id: newUser.id,
      username: newUser.username,
      role: newUser.role,
    };
    const token = generateToken(payload);

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
      token,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "User already exists") {
      res.status(409).json({ message: error.message });
      return;
    }
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
});

// Login endpoint
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Validate required fields
    if (!username || !password) {
      res.status(400).json({
        message: "Username and password are required",
      });
      return;
    }

    // Find user
    const user = findUserByUsername(username);
    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Generate token
    const payload: IPayload = {
      id: user.id,
      username: user.username,
      role: user.role,
    };
    const token = generateToken(payload);

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// Get current user info (protected route)
router.get(
  "/me",
  verifyTokenMiddleware,
  (req: AuthRequest, res: Response) => {
    res.json({
      user: req.user,
    });
  }
);

// Admin-only route: Get all users
router.get(
  "/users",
  verifyTokenMiddleware,
  requireAdmin,
  (req: AuthRequest, res: Response) => {
    const users = getAllUsers();
    res.json({ users });
  }
);

// Admin-only route: Create admin user
router.post(
  "/admin/register",
  verifyTokenMiddleware,
  requireAdmin,
  async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        res.status(400).json({
          message: "Username, email, and password are required",
        });
        return;
      }

      const newUser = await createUser(username, email, password, "admin");

      res.status(201).json({
        message: "Admin user created successfully",
        user: newUser,
      });
    } catch (error) {
      if (error instanceof Error && error.message === "User already exists") {
        res.status(409).json({ message: error.message });
        return;
      }
      console.error("Admin registration error:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

export default router;
