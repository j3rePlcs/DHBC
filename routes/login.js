var express = require('express');
var router = express.Router();
const userController = require("./../src/controllers/userController")
/* login */
router.post('/login', function(req, res, next) {
  res.render('login');
});
// Regitro de usuario
router.get("/register",userController.createView)
router.post("/register",userController.create)


module.exports = router;