var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/test', function(req, res, next) {
  res.send({ title: 'hello ca va ' });
});
router.get('*', function(req, res, next) {
  res.send('index.html');
});

module.exports = router;
