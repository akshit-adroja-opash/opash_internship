const Task = require("../models/taskModel");

const createTask = async (data)=> { 
    const task = await Task.create(data);
    return task;
};
const getAllTasks = async () => {
    const tasks = await Task.find();
    return tasks;
};


module.exports = { createTask , getAllTasks};
