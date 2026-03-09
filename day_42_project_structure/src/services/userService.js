const User = require("../models/userModel");

// Create a new user
const createUser = async (userData) => {
    const user = await User.create(userData);
    return user;
};

// Get all users
const getAllUsers = async () => {
    const users = await User.find({ isActive: true }).select('-password');
    return users;
};

// Get user by ID
const getUserById = async (userId) => {
    const user = await User.findById(userId).select('-password');
    return user;
};

// Get user by email
const getUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
};

// Update user
const updateUser = async (userId, userData) => {
    const user = await User.findByIdAndUpdate(
        userId,
        userData,
        { new: true, runValidators: true }
    ).select('-password');
    return user;
};

// Delete user (soft delete)
const deleteUser = async (userId) => {
    const user = await User.findByIdAndUpdate(
        userId,
        { isActive: false },
        { new: true }
    );  
    return user;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getUserByEmail,
    updateUser,
    deleteUser
};
