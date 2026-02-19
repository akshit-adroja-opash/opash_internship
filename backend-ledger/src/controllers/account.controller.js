const accountModel = require('../models/account.model');

async function createAccountController(req, res) {
    try {
        const user = req.user;

        // The user object is expected to be populated by authentication middleware.
        // This check ensures that the middleware has successfully attached user information.
        if (!user) {
            return res.status(401).json({
                message: "Unauthorized - User information missing from request",
                status: "failed"
            });
        }

        const account = await accountModel.create({
            user: user._id
        })
        res.status(201).json({
            status: "success",
            account
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error while creating account",
            status: "failed"
        });
    }
}

module.exports = {
    createAccountController

}

