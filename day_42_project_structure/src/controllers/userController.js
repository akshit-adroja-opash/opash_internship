const userService = require("../services/userService");

// Create a new user
const createUserHandler = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        
        // Check if user already exists
        const existingUser = await userService.getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered" });
        }

        const user = await userService.createUser({ username, email, password, role });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all users
const getAllUsersHandler = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user by ID
const getUserByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update user
const updateUserHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, role } = req.body;
        
        const user = await userService.updateUser(id, { username, email, role });
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete user (soft delete)
const deleteUserHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.deleteUser(id);
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUserHandler,
    getAllUsersHandler,
    getUserByIdHandler,
    updateUserHandler,
    deleteUserHandler
};
