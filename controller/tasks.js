const Task = require('../models/schema')
const getAllTasks = (req, res)=>{
    res.send('get all tasks from server')
}
const getTask = (req, res)=>{
    res.send('get single task from server')
}
const createTask = async (req, res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
    // res.send('create task from server')
}
const updateTask = (req, res)=>{
    res.send('update task from server')
}
const deleteTask = (req, res)=>{
    res.send('delete task from server')
}



module.exports = {
getAllTasks, getTask , createTask, updateTask, deleteTask
}