
var express = require('express');
var router = express.Router();
var mongodb=require('mongodb').MongoClient;



router.get('/', function(req, res, next) {
mongodb.connect("mongodb://127.0.0.1:27017/allLocation", function(err,db){
 if(err) next(err);
 var query={'name':req.query.name ,'category':req.query.category};   

  db.collection('myLocations').find(query).limit(3).forEach(function(doc){
  console.dir(doc);

 });
db.close();
  res.end("");
});
});

module.exports = router;
