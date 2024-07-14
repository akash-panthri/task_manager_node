## Project Setup



In order to run the project, setup .env and set MONGO_URI variable equal to DB connection string and PORT variable equal to port value (port you want to run backend on) .



Caution : Don't set PORT in .env file to 3000 as frontend is running on port 3000.



Routes in backend are: 

//app.get('/api/v1/tasks')   - get all the tasks 
//app.post('/api/v1/tasksĮ) - create a new task 
//app.get('/api/v1/tasks/:id') - get single task
// app.patch('/api/v1/tasks/:id') - update task 
//app.delete('/api/v1/tasks/:id')   - delete task