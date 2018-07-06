var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path');

/* GET home page. */
router.get('/api/test', function (req, res) {
  res.send({ title: 'hello ca va bien là haut ?' });
});
router.get('/cv', function (req, res) {
  console.log(res)
  res.render('index.html');
});

router.get('/cv/:type/:lng?', function (req, res) {
  var lng = req.params.lng || "fr"
  var type = req.params.type
  var uri = path.join(__dirname, `./../data/${lng}/${type}.json`)
  fs.readFile(uri, 'utf8', function (error, data) {
    if (error) {
      res.send(new Error())
    }
    else {
      res.send(JSON.parse(data))
    }
  })
});

// router.get('*', function(req, res, next) {
//   res.send('index.html');
// });

module.exports = router;
