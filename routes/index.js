var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DHBC' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'DHBC' });
});
router.get('/admin/turnos', function(req, res, next) {
  res.render('turns', { title: 'DHBC' });
});

module.exports = router;
