var express = require('express');
const userController = require('../src/controllers/userController');
var router = express.Router();

router.get("/crear")
router.get("/",userController.list)
module.exports = router;

