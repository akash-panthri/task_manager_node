const getAllTasks = (req, res)=>{
    res.send('get all tasks from server')
}
const getTask = (req, res)=>{
    res.send('get single task from server')
}
const createTask = (req, res)=>{
    res.send('create task from server')
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