const router = require("express").Router();

const {getAllTasks} =  require('../controller/tasks')
router.route('/').get(getAllTasks)

module.exports = router