var express = require('express');
//const userController = require('../src/controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//editar
//router.get('/edit:id', userController.edit)

//router.get('/edit:id', userController.edit)


module.exports = router;
