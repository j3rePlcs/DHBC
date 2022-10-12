var express = require('express');
var router = express.Router();
const userController = require('../src/controllers/userController');

router.get("/",userController.list)
module.exports = router;