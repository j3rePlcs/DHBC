var express = require('express');
var router = express.Router();

/* login */
router.post('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;