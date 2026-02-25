import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  role: "user" | "admin";
  createdAt: string;
}

const DATA_FILE = path.join(process.cwd(), "data", "users.json");

// Ensure data directory exists
const ensureDataDir = () => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Read users from JSON file
const readUsers = (): IUser[] => {
  ensureDataDir();
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return data ? JSON.parse(data) : [];
};

// Write users to JSON file
const writeUsers = (users: IUser[]): void => {
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
};

// Generate unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Create a new user
export const createUser = async (
  username: string,
  email: string,
  password: string,
  role: "user" | "admin" = "user"
): Promise<Omit<IUser, "password">> => {
  const users = readUsers();

  // Check if user already exists
  const existingUser = users.find(
    (u) => u.username === username || u.email === email
  );
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: IUser = {
    id: generateId(),
    username,
    email,
    password: hashedPassword,
    role,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  writeUsers(users);

  // Return user without password (exclude password from returned object)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _pwd, ...userWithoutPassword } = newUser;
  return userWithoutPassword as Omit<IUser, "password">;
};

// Find user by username
export const findUserByUsername = (username: string): IUser | undefined => {
  const users = readUsers();
  return users.find((u) => u.username === username);
};

// Find user by ID
export const findUserById = (id: string): IUser | undefined => {
  const users = readUsers();
  return users.find((u) => u.id === id);
};

// Verify password
export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};

// Check if user is admin
export const isAdmin = (user: IUser): boolean => {
  return user.role === "admin";
};

// Get all users (for admin)
export const getAllUsers = (): Omit<IUser, "password">[] => {
  const users = readUsers();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return users.map(({ password: _password, ...user }) => user);
};
