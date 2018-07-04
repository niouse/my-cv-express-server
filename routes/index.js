var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/test', function(req, res) {
  res.send({ title: 'hello ca va bien là haut ?' });
});
router.get('*', function(req, res) {
  res.send('index.html');
});

// router.get('*', function(req, res, next) {
//   res.send('index.html');
// });

module.exports = router;
