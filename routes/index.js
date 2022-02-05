var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Homepage', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('Homepage', { title: 'Home' });
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('Aboutme', { title: 'About me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET Contact me page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact me' });
});


module.exports = router;
