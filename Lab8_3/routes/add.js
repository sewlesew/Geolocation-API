var express = require('express');
var router = express.Router();
var mongodb=require('mongodb').MongoClient;

router.post('/add', function(req, res, next) {
console.log("hahaha"+req.body);
mongodb.connect("mongodb://127.0.0.1:27017/allLocation", function(err,db){
    console.log("Sewlesew"+req.body['fname']);
 if(err) next(err);
 var result=null; 
 var doc={'name':req.body.fname ,'category':req.body.category , 'location':[req.body.lon,req.body.lat]};
  db.collection('myLocations').insert(doc,function(err,insertedDoc){
if(err) next(err);
  res.end("Your Location is added to the database")
 });
return db.close();

  
});
});
module.exports = router;
