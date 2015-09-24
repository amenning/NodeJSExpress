var express = require('express');
var router = express.Router();
var vd = require('../videodata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'Bucky',
    videodata: vd //pass in the JSON data to videodata through the vd variable
  });
});

module.exports = router;
