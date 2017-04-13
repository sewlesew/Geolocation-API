var express = require('express');
var router = express.Router();
var mongodb=require('mongodb').MongoClient;



router.get('/', function(req, res, next) {
  res.render('index');
});
module.exports = router;
