<<<<<<< HEAD
const express = require("express")
const authController = require("../controllers/auth.controller")

const router = express.Router()


/* POST /api/auth/register */
router.post("/register", authController.userRegisterController)


/* POST /api/auth/login */
router.post("/login",authController.userLoginController)

/**
 * - POST /api/auth/logout
 */
router.post("/logout", authController.userLogoutController)



module.exports = router
=======
const express = require('express');

const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', authController.userRegisterController);

//  post /api/auth/login
router.post('/login', authController.userLoginController);



module.exports = router;
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
