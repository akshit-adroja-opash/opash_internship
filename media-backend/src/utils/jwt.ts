import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "media-backend-secret-key-change-in-production";
const JWT_EXPIRES_IN = "24h";

export interface IPayload {
  id: string;
  username: string;
  role: "user" | "admin";
}

export const generateToken = (payload: IPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const verifyToken = (token: string): IPayload => {
  return jwt.verify(token, JWT_SECRET) as IPayload;
};

export const generateAdminToken = (): string => {
  const adminPayload: IPayload = {
    id: "admin",
    username: "admin",
    role: "admin",
  };
  return jwt.sign(adminPayload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};
