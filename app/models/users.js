var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var sequelize = require('sequelize');
/*
var db = require('./index.js');

db.Sequelize = Sequelize;

var User = sequelize.import('./pluggableuser.js');*/

 sequelize.import(__dirname + "/models/pluggableuser.js");

// end of auth part