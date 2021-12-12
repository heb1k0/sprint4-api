const controllers  = require("../controllers/UserController");
const express = require('express');
const router =  express.Router();

router.get('/user', controllers.userController);
router.post('/time', controllers.timeController);


module.exports = router;