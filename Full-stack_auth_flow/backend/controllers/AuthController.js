const UserModel = require("../models/user");
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
require('dotenv').config();

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const lowerEmail = email.toLowerCase();
        console.log('Signup request:', { name, email: lowerEmail });

        const user = await UserModel.findOne({ email: lowerEmail });
        if (user) {
            return res.status(409)
                .json({ message: "user is already exist you can login", success: false });
        }

        const userModel = new UserModel({ name, email: lowerEmail, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();

        res.status(201)
            .json({
                message: "signup successful",
                success: true
            });

    } catch (err) {
        console.error('Error in signup:', err);
        res.status(500)
            .json({
                message: "internal server error",
                success: false
            });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const lowerEmail = email.toLowerCase();
        console.log('Login request:', { email: lowerEmail });

        const user = await UserModel.findOne({ email: lowerEmail });
        const errorMsg = 'email or password is incorrect';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200)
            .json({
                message: "login successful",
                success: true,
                jwtToken,
                name: user.name,
                email: user.email
            });

    } catch (err) {
        console.error('Error in login:', err);
        res.status(500)
            .json({
                message: "internal server error",
                success: false
            });
    }
}

module.exports = {
    signup,
    login
};
