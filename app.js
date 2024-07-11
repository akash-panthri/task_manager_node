require("dotenv").config();
const express = require('express')
const app = express()
const PORT = 3000;
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')


//connect to db
connectDB()


// middleware
app.use(express.json())

// routes
app.get('/hello',(req, res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)
app.listen(PORT, console.log(`server listening on ${PORT}`))
