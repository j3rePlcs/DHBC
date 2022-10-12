var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/admin/turnos', function(req, res, next) {
  res.render('turns');
});
router.get('/admin', function(req, res, next) {
  res.render('admin');
});

router.get("/",(req, res)=>{res.send("hola")})
router.use("/turnos", turnosRoute)
router.use("/user",loginRoute)

module.exports = router;
