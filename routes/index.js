var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
// router.get('/admin/turnos', function(req, res, next) {
//   res.render('turns');
// });
router.get('/admin', function(req, res, next) {
  res.render('admin');
});

const userRoute = require("./users")
const loginRoute = require("./login")
// const turnosRoute = require("./turnos");

// router.use("/turnos", turnosRoute)
// // router.use("/user",loginRoute)
// router.get("/register",userRoute)

module.exports = router;
