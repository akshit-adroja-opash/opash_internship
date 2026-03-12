const express = require("express");
const router = express.Router();

const {
    createUserHandler,
    getAllUsersHandler,
    getUserByIdHandler,
    updateUserHandler,
    deleteUserHandler
<<<<<<< HEAD
} = require("../controllers/userController");   m                                                                                                          
=======
} = require("../controllers/userController");
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1

// Routes
router.post("/users", createUserHandler);
router.get("/users", getAllUsersHandler);
router.get("/users/:id", getUserByIdHandler);
router.put("/users/:id", updateUserHandler);
router.delete("/users/:id", deleteUserHandler);

module.exports = router;
