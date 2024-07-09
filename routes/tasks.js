const router = require("express").Router();

router.route('/').get((req, res)=>{
    res.send('all items')
})

module.exports = router