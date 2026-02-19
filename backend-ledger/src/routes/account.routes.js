const express = require('express');
const router = express.Router();
const authRouter = require('./auth.routes');
const { authMiddleware } = require('../middleware/auth.middleware');
const accountController = require('../controllers/account.controller');




//create new account
//protected account
router.post("/", authMiddleware, accountController.createAccountController)





module.exports = router;