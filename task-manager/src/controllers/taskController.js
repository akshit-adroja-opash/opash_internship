const {createTask , getAllTasks } = require("../services/taskService");

const createTaskHandler = async (req, res) => { 
    const task =  await createTask(req.body);
    res.status(201).json(task);
};

const getAllTasksHandler = async (req, res) => {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
};



module.exports = {createTaskHandler , getAllTasksHandler}