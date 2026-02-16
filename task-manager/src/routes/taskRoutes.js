const express = require("express");
const router = express.Router();

const { createTaskHandler, getAllTasksHandler } = require("../controllers/taskController");

router.post("/tasks", createTaskHandler);
router.get("/tasks", getAllTasksHandler);

module.exports = router;
