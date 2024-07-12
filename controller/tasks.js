const Task = require('../models/schema')
const getAllTasks =async (req, res)=>{
    try {
       const tasks = await Task.find({})
       res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const getTask = (req, res)=>{
    res.send('get single task from server')
}
const createTask = async (req, res)=>{
    try {
        
        const task = await Task.create(req.body)
        res.status(201).json({task})
        // res.send('create task from server')
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
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