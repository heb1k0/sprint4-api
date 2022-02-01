const controllers  = require("../controllers/UserController");
const express = require('express');
const router =  express.Router();

const login = require('../middleware/login');

router.post('/user', controllers.userController);
router.post('/time', login.islogin, controllers.timeController);


module.exports = router;