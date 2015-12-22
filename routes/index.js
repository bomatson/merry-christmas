var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/gift', function(req, res) {
  var step = req.query.step;
  res.render('gift', { step: step});
});

module.exports = router;
