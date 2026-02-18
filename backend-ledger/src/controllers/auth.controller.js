const userModel = require('../models/user.model');
const jwt = require("jsonwebtoken");


// POST /api/auth/register
async function userRegisterController(req, res) {

    try {

        const { name, email, password } = req.body;

        const isExists = await userModel.findOne({ email });

        if (isExists) {

            return res.status(422).json({
                message: "User already exists",
                status: "failed"
            });

        }

        const user = await userModel.create({
            name,
            email,
            password
        });

        const token = jwt.sign(

            { userId: user._id },

            process.env.JWT_SECRET,  

            { expiresIn: "1h" }

        );

        res.status(201).json({

            status: "success",

            user: {

                id: user._id,
                name: user.name,
                email: user.email

            },

            token

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Internal server error",
            status: "failed"

        });

    }

}

//user login controller
// POST /api/auth/login
// POST /api/auth/login
async function userLoginController(req, res) {

    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
                status: "failed"
            });
        }

        const isValidPassword = await user.comparePassword(password);

        if (!isValidPassword) {
            return res.status(401).json({
                message: "Invalid email or password",
                status: "failed"
            });
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            status: "success",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Internal server error",
            status: "failed"
        });

    }

}
module.exports = {
    userRegisterController,
    userLoginController
};

